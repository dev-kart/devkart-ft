// Application configuration and settings

export const config = {
  // App metadata
  app: {
    name: import.meta.env.VITE_APP_NAME || "My React App",
    description:
      import.meta.env.VITE_APP_DESCRIPTION || "A modern React application",
    url: import.meta.env.VITE_APP_URL || "http://localhost:5173",
    version: import.meta.env.VITE_APP_VERSION || "1.0.0",
  },

  // API configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:3001",
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || "10000"),
    retries: parseInt(import.meta.env.VITE_API_RETRIES || "3"),
  },

  // Authentication
  auth: {
    sessionTimeout: parseInt(import.meta.env.VITE_SESSION_TIMEOUT || "3600000"), // 1 hour
    refreshThreshold: parseInt(
      import.meta.env.VITE_REFRESH_THRESHOLD || "300000"
    ), // 5 minutes
  },

  // UI/UX settings
  ui: {
    theme: {
      defaultTheme: "system" as "light" | "dark" | "system",
      enableThemeToggle: true,
    },
    animation: {
      duration: 200,
      easing: "ease-in-out",
    },
    pagination: {
      defaultPageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
    },
  },

  // Feature flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    enableErrorReporting:
      import.meta.env.VITE_ENABLE_ERROR_REPORTING === "true",
    enableDevTools: import.meta.env.DEV,
    enableExperiments: import.meta.env.VITE_ENABLE_EXPERIMENTS === "true",
  },

  // External services
  services: {
    analytics: {
      googleAnalyticsId: import.meta.env.VITE_GA_ID,
    },
    sentry: {
      dsn: import.meta.env.VITE_SENTRY_DSN,
    },
  },

  // Development settings
  dev: {
    enableDebugLogs: import.meta.env.DEV,
    showPerformanceMetrics: import.meta.env.DEV,
  },

  // Validation rules
  validation: {
    password: {
      minLength: 8,
      requireUppercase: true,
      requireLowercase: true,
      requireNumbers: true,
      requireSpecialChars: false,
    },
    username: {
      minLength: 3,
      maxLength: 20,
      allowedChars: /^[a-zA-Z0-9_-]+$/,
    },
  },
} as const;

export type AppConfig = typeof config;
