export const apiBaseUrl = (() => {
  const value = import.meta.env.VITE_API_BASE_URL;
  if (typeof value !== "string") {
    return "/api";
  }
  return value;
})();

export const LS_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  LOCALE: "locale",
} as const;

