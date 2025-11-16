import axios, { AxiosRequestConfig, AxiosError } from "axios";
import { apiBaseUrl, LS_KEYS } from "@shared/config/envVars";
import { setupMockInterceptor } from "./mock/mockServer";

const getAuthorizationHeader = () => {
  // localStorage доступний тільки на клієнті
  if (typeof window === "undefined") return undefined;
  const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  return accessToken ? `Token ${accessToken}` : undefined;
};

const getLocale = () => {
  if (typeof window === "undefined") return "uk";
  return localStorage.getItem(LS_KEYS.LOCALE) || "uk";
};

export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Accept-Language": getLocale(),
    Authorization: getAuthorizationHeader(),
  },
});

// Setup mock interceptor for development
if (typeof window !== "undefined") {
  setupMockInterceptor(api);
}

api.interceptors.request.use((config) => {
  // localStorage доступний тільки на клієнті
  if (typeof window !== "undefined") {
    const token = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    const locale = localStorage.getItem(LS_KEYS.LOCALE) || "uk";
    config.headers["Accept-Language"] = locale;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Автоматичний logout буде оброблятись через auth context
      localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
      localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);
    }
    return Promise.reject(error);
  }
);

export type { AxiosRequestConfig, AxiosError };

