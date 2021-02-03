export function getLocalStorageValue(key: string) {
  const value = window && localStorage.getItem(key);
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
}

export function setLocalStorage(key: string, value: any) {
  window && localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageValue(key: string) {
  window && localStorage.removeItem(key);
}
