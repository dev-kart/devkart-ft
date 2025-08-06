// Application constants

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export const APP_CONFIG = {
  name: "My Next.js App",
  description: "A modern Next.js application with Tailwind CSS and ShadCN UI",
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
