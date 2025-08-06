/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_APP_URL: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_API_TIMEOUT: string;
  readonly VITE_API_RETRIES: string;
  readonly VITE_SESSION_TIMEOUT: string;
  readonly VITE_REFRESH_THRESHOLD: string;
  readonly VITE_ENABLE_ANALYTICS: string;
  readonly VITE_ENABLE_ERROR_REPORTING: string;
  readonly VITE_ENABLE_EXPERIMENTS: string;
  readonly VITE_GA_ID: string;
  readonly VITE_SENTRY_DSN: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
  // Add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
