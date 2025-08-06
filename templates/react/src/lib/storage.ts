// Local storage utilities with type safety

export function getFromStorage<T>(key: string, defaultValue?: T): T | null {
  try {
    if (typeof window === "undefined") return defaultValue || null;

    const item = window.localStorage.getItem(key);
    if (!item) return defaultValue || null;

    return JSON.parse(item);
  } catch (error) {
    console.warn(`Error reading from localStorage key "${key}":`, error);
    return defaultValue || null;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  try {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving to localStorage key "${key}":`, error);
  }
}

export function removeFromStorage(key: string): void {
  try {
    if (typeof window === "undefined") return;

    window.localStorage.removeItem(key);
  } catch (error) {
    console.warn(`Error removing from localStorage key "${key}":`, error);
  }
}

export function clearStorage(): void {
  try {
    if (typeof window === "undefined") return;

    window.localStorage.clear();
  } catch (error) {
    console.warn("Error clearing localStorage:", error);
  }
}
