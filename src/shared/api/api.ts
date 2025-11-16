import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Mock API base URL - в production це буде реальний API
const apiBaseUrl =
  typeof window !== "undefined"
    ? process.env.NEXT_PUBLIC_API_BASE_URL || "/api"
    : "http://localhost:3000/api";

const getAuthorizationHeader = () => {
  if (typeof window === "undefined") return undefined;
  const accessToken = localStorage.getItem("access_token");
  return accessToken ? `Token ${accessToken}` : undefined;
};

export const api: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language":
      (typeof window !== "undefined" &&
        localStorage.getItem("locale")) ||
      "uk",
  },
});

// Request interceptor для додавання токену
api.interceptors.request.use(
  (config) => {
    const token = getAuthorizationHeader();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor для обробки помилок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Обробка 401 помилок
      if (typeof window !== "undefined") {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default api;

