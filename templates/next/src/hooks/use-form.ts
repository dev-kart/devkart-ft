import { useState, useCallback, ChangeEvent, FormEvent } from "react";
import { validateForm, ValidationRule } from "@/lib/validation";

type UseFormOptions<T> = {
  initialValues: T;
  validationSchema?: Record<keyof T, ValidationRule[]>;
  onSubmit?: (values: T) => void | Promise<void>;
};

type UseFormReturn<T> = {
  values: T;
  errors: Record<keyof T, string>;
  touched: Record<keyof T, boolean>;
  isValid: boolean;
  isSubmitting: boolean;
  handleChange: (
    name: keyof T
  ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (name: keyof T) => () => void;
  handleSubmit: (e: FormEvent) => void;
  setFieldValue: (name: keyof T, value: T[keyof T]) => void;
  setFieldError: (name: keyof T, error: string) => void;
  resetForm: () => void;
  validateField: (name: keyof T) => void;
};

export function useForm<T extends Record<string, any>>({
  initialValues,
  validationSchema,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>
  );
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback(
    (name: keyof T) => {
      if (!validationSchema?.[name]) return;

      const fieldValidation = validateForm(
        { [name]: values[name] },
        { [name]: validationSchema[name] }
      );

      if (fieldValidation.errors[name as string]) {
        setErrors((prev) => ({
          ...prev,
          [name]: fieldValidation.errors[name as string],
        }));
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [values, validationSchema]
  );

  const handleChange = useCallback(
    (name: keyof T) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value =
          e.target.type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value;
        setValues((prev) => ({ ...prev, [name]: value }));

        if (touched[name]) {
          setTimeout(() => validateField(name), 0);
        }
      },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (name: keyof T) => () => {
      setTouched((prev) => ({ ...prev, [name]: true }));
      validateField(name);
    },
    [validateField]
  );

  const setFieldValue = useCallback((name: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: keyof T, error: string) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({} as Record<keyof T, string>);
    setTouched({} as Record<keyof T, boolean>);
    setIsSubmitting(false);
  }, [initialValues]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!onSubmit) return;

      // Validate all fields
      if (validationSchema) {
        const validation = validateForm(values, validationSchema);
        if (!validation.isValid) {
          setErrors(validation.errors as Record<keyof T, string>);
          // Mark all fields as touched
          const allTouched = Object.keys(initialValues).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {} as Record<keyof T, boolean>
          );
          setTouched(allTouched);
          return;
        }
      }

      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validationSchema, onSubmit, initialValues]
  );

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    resetForm,
    validateField,
  };
}
