// Validation utilities

export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  password: (password: string): { isValid: boolean; message?: string } => {
    if (password.length < 8) {
      return {
        isValid: false,
        message: "Password must be at least 8 characters",
      };
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one lowercase letter",
      };
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one uppercase letter",
      };
    }
    if (!/(?=.*\d)/.test(password)) {
      return {
        isValid: false,
        message: "Password must contain at least one number",
      };
    }
    return { isValid: true };
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  },

  required: (value: any): boolean => {
    if (typeof value === "string") {
      return value.trim().length > 0;
    }
    return value !== null && value !== undefined;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  numeric: (value: string): boolean => {
    return /^\d+$/.test(value);
  },

  alphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value);
  },
};

export type ValidationRule = {
  validator: (value: any) => boolean | { isValid: boolean; message?: string };
  message?: string;
};

export function validateField(
  value: any,
  rules: ValidationRule[]
): { isValid: boolean; message?: string } {
  for (const rule of rules) {
    const result = rule.validator(value);
    if (typeof result === "boolean") {
      if (!result) {
        return { isValid: false, message: rule.message || "Validation failed" };
      }
    } else {
      if (!result.isValid) {
        return {
          isValid: false,
          message: result.message || rule.message || "Validation failed",
        };
      }
    }
  }
  return { isValid: true };
}

export function validateForm(
  data: Record<string, any>,
  schema: Record<string, ValidationRule[]>
): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  let isValid = true;

  for (const [field, rules] of Object.entries(schema)) {
    const result = validateField(data[field], rules);
    if (!result.isValid) {
      errors[field] = result.message!;
      isValid = false;
    }
  }

  return { isValid, errors };
}
