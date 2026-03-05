import axios, { AxiosRequestConfig, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { apiBaseUrl, LS_KEYS } from '@shared/config/envVars';

/**
 * Отримує заголовок авторизації з localStorage.
 * Використовується для ініціалізації інстансу.
 */
const getAuthorizationHeader = () => {
  if (typeof window === 'undefined') return undefined;
  const accessToken = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
  return accessToken ? `Bearer ${accessToken}` : undefined;
};

/**
 * Отримує поточну локаль зі сховища.
 */
const getLocale = () => {
  if (typeof window === 'undefined') return 'uk';
  return localStorage.getItem(LS_KEYS.LOCALE) || 'uk';
};

/**
 * Основний інстанс axios для роботи з API.
 * Централізована точка для всіх HTTP-запитів у проєкті.
 */
export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': getLocale(),
    Authorization: getAuthorizationHeader(),
  },
});

/**
 * Перехоплювач запитів (Request Interceptor).
 * Гарантує, що кожен запит має актуальний токен та локаль.
 */
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem(LS_KEYS.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    const locale = localStorage.getItem(LS_KEYS.LOCALE) || 'uk';
    config.headers['Accept-Language'] = locale;
  }
  return config;
});

/**
 * Перехоплювач відповідей (Response Interceptor).
 * Централізована обробка помилок та статусів.
 */
let isRefreshing = false;
let failedQueue: {
  resolve: (value: string | PromiseLike<string>) => void;
  reject: (reason?: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // 1. Обробка помилки авторизації (401)
    const isAuthRequest =
      originalRequest.url?.includes('/auth/login') ||
      originalRequest.url?.includes('/auth/register') ||
      originalRequest.url?.includes('/auth/logout');

    if (error.response?.status === 401 && !originalRequest._retry && !isAuthRequest) {
      if (typeof window !== 'undefined') {
        const refreshToken = localStorage.getItem(LS_KEYS.REFRESH_TOKEN);

        if (refreshToken) {
          if (isRefreshing) {
            return new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                return api(originalRequest);
              })
              .catch((err) => {
                return Promise.reject(err);
              });
          }

          originalRequest._retry = true;
          isRefreshing = true;

          try {
            const response = await axios.post(`${apiBaseUrl}/api/auth/refresh`, {
              refresh_token: refreshToken,
            });

            const { access_token, refresh_token: new_refresh_token } = response.data;

            localStorage.setItem(LS_KEYS.ACCESS_TOKEN, access_token);
            localStorage.setItem(LS_KEYS.REFRESH_TOKEN, new_refresh_token);

            api.defaults.headers.Authorization = `Bearer ${access_token}`;
            originalRequest.headers.Authorization = `Bearer ${access_token}`;

            processQueue(null, access_token);
            return api(originalRequest);
          } catch (refreshError) {
            processQueue(refreshError, null);
            localStorage.removeItem(LS_KEYS.ACCESS_TOKEN);
            localStorage.removeItem(LS_KEYS.REFRESH_TOKEN);
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }
      }
    }

    // 2. Формування зрозумілого повідомлення про помилку для UI
    let errorMessage = 'Сталася неочікувана помилка. Спробуйте пізніше.';

    if (error.response) {
      // Сервер повернув відповідь зі статусом помилки (4xx, 5xx)
      const data = error.response.data as {
        detail?: string;
        message?: string | { message: string };
        error?: string;
        errors?: Record<string, string[] | { message: string }>;
      };

      // Спробуємо знайти повідомлення у звичних полях
      const potentialMessage = data?.detail || data?.message || data?.error;
      if (typeof potentialMessage === 'string') {
        errorMessage = potentialMessage;
      } else if (
        potentialMessage &&
        typeof potentialMessage === 'object' &&
        'message' in potentialMessage
      ) {
        // Якщо помилка прийшла як об'єкт { message, code }
        errorMessage = String(potentialMessage.message);
      }

      // Детальна обробка помилок валідації (наприклад, від Django REST Framework)
      // Перевіряємо як data.errors, так і саму data на наявність полів з помилками
      const errorSource = data?.errors && typeof data.errors === 'object' ? data.errors : data;

      if (
        (error.response.status === 400 || error.response.status === 409) &&
        errorSource &&
        typeof errorSource === 'object'
      ) {
        // Шукаємо першу помилку, ігноруючи вже перевірені загальні поля
        const fieldErrorKey = Object.keys(errorSource).find(
          (key) => !['detail', 'message', 'error', 'status'].includes(key),
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
    (error as unknown as { friendlyMessage: string }).friendlyMessage = errorMessage;

    // Логування помилок у консоль в режимі розробки
    if (process.env.NODE_ENV === 'development') {
      console.error(
        `[API Error] ${error.config?.method?.toUpperCase()} ${error.config?.url}:`,
        errorMessage,
      );
    }

    return Promise.reject(error);
  },
);

export type { AxiosRequestConfig, AxiosError };
