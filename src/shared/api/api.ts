import axios, { AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig } from "axios";
import { apiBaseUrl, LS_KEYS } from "@shared/config/envVars";

/**
 * Отримує заголовок авторизації з localStorage.
 * Використовується для ініціалізації інстансу.
 */
const getAuthorizationHeader = () => {
  if (typeof window === "undefined") return undefined;
  const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  return accessToken ? `Token ${accessToken}` : undefined;
};

/**
 * Отримує поточну локаль зі сховища.
 */
const getLocale = () => {
  if (typeof window === "undefined") return "uk";
  return localStorage.getItem(LS_KEYS.LOCALE) || "uk";
};

/**
 * Основний інстанс axios для роботи з API.
 * Централізована точка для всіх HTTP-запитів у проєкті.
 */
export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": getLocale(),
    Authorization: getAuthorizationHeader(),
  },
});

/**
 * Перехоплювач запитів (Request Interceptor).
 * Гарантує, що кожен запит має актуальний токен та локаль.
 */
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
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

/**
 * Перехоплювач відповідей (Response Interceptor).
 * Централізована обробка помилок та статусів.
 */
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // 1. Обробка помилки авторизації (401)
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        // Очищаємо застарілі токени при невалідній сесії
        localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
        localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);

        if (!window.location.pathname.includes('/login')) {
          window.location.href = '/login';
        }
      }
    }

    // 2. Формування зрозумілого повідомлення про помилку для UI
    let errorMessage = "Сталася неочікувана помилка. Спробуйте пізніше.";
    
    if (error.response) {
      // Сервер повернув відповідь зі статусом помилки (4xx, 5xx)
      const data = error.response.data as any;
      
      // Спробуємо знайти повідомлення у звичних полях
      const potentialMessage = data?.detail || data?.message || data?.error;
      if (typeof potentialMessage === 'string') {
        errorMessage = potentialMessage;
      } else if (potentialMessage && typeof potentialMessage === 'object' && 'message' in potentialMessage) {
        // Якщо помилка прийшла як об'єкт { message, code }
        errorMessage = String(potentialMessage.message);
      }
      
      // Детальна обробка помилок валідації (наприклад, від Django REST Framework)
      // Перевіряємо як data.errors, так і саму data на наявність полів з помилками
      const errorSource = (data?.errors && typeof data.errors === 'object') ? data.errors : data;
      
      if ((error.response.status === 400 || error.response.status === 409) && errorSource && typeof errorSource === 'object') {
        // Шукаємо першу помилку, ігноруючи вже перевірені загальні поля
        const fieldErrorKey = Object.keys(errorSource).find(key => 
          !['detail', 'message', 'error', 'status'].includes(key)
        );
        
        if (fieldErrorKey) {
          const fieldError = errorSource[fieldErrorKey];
          const message = Array.isArray(fieldError) ? fieldError[0] : fieldError;
          if (typeof message === 'string') {
            errorMessage = message;
          }
        }
      }
    } else if (error.request) {
      // Запит був відправлений, але відповідь не отримана (network error)
      errorMessage = "Сервер не відповідає. Перевірте ваше інтернет-з'єднання.";
    }

    // Розширюємо об'єкт помилки власним повідомленням для зручності
    const enhancedError = {
      ...error,
      friendlyMessage: errorMessage,
    };

    // Логування помилок у консоль в режимі розробки
    if (process.env.NODE_ENV === "development") {
      console.error(`[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`, errorMessage);
    }

    return Promise.reject(enhancedError);
  }
);

export type { AxiosRequestConfig, AxiosError };

