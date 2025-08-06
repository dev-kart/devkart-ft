// Application constants

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export const APP_CONFIG = {
  name: "My React App",
  description: "A modern React application with Tailwind CSS and ShadCN UI",
  version: "1.0.0",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
} as const;

export const STORAGE_KEYS = {
  THEME: "theme",
  USER: "user",
  TOKEN: "token",
} as const;
