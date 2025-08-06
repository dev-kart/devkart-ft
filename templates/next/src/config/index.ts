// Application configuration and settings

export const config = {
  // App metadata
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "My Next.js App",
    description:
      process.env.NEXT_PUBLIC_APP_DESCRIPTION || "A modern Next.js application",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    version: process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0",
  },

  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001",
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || "10000"),
    retries: parseInt(process.env.NEXT_PUBLIC_API_RETRIES || "3"),
  },

  // Authentication
  auth: {
    sessionTimeout: parseInt(
      process.env.NEXT_PUBLIC_SESSION_TIMEOUT || "3600000"
    ), // 1 hour
    refreshThreshold: parseInt(
      process.env.NEXT_PUBLIC_REFRESH_THRESHOLD || "300000"
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
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
    enableErrorReporting:
      process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === "true",
    enableDevTools: process.env.NODE_ENV === "development",
    enableExperiments: process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTS === "true",
  },

  // External services
  services: {
    analytics: {
      googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    },
    sentry: {
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    },
  },

  // Development settings
  dev: {
    enableDebugLogs: process.env.NODE_ENV === "development",
    showPerformanceMetrics: process.env.NODE_ENV === "development",
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
