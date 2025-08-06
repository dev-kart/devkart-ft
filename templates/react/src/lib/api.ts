// API utilities and helpers

import { API_BASE_URL } from "@/constants";

export interface FetchOptions extends RequestInit {
  timeout?: number;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public statusText: string,
    message?: string
  ) {
    super(message || statusText);
    this.name = "ApiError";
  }
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { timeout = 10000, ...fetchOptions } = options;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Helper methods
export const api = {
  get: <T = any>(endpoint: string, options?: FetchOptions) =>
    apiRequest<T>(endpoint, { ...options, method: "GET" }),

  post: <T = any>(endpoint: string, data?: any, options?: FetchOptions) =>
    apiRequest<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: <T = any>(endpoint: string, data?: any, options?: FetchOptions) =>
    apiRequest<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  delete: <T = any>(endpoint: string, options?: FetchOptions) =>
    apiRequest<T>(endpoint, { ...options, method: "DELETE" }),
};
