export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
  },
  USER: {
    ME: '/api/users/me',
    BY_ID: (id: string | number) => `/api/users/${id}`,
  },
  REQUESTS: {
    BASE: '/api/requests',
    BY_ID: (id: string | number) => `/api/requests/${id}`,
  },
  PROPOSALS: {
    BASE: '/api/proposals',
    BY_ID: (id: string | number) => `/api/proposals/${id}`,
    BY_REQUEST_ID: (requestId: string | number) => `/api/proposals/requests/${requestId}`,
    CAN_PROPOSE: (requestId: string | number) => `/api/proposals/can-propose/${requestId}`,
  },
  REVIEWS: {
    BASE: '/api/reviews',
  },
  BLOG: {
    BASE: '/api/blog',
    BY_ID: (id: string | number) => `/api/blog/${id}`,
  },
  CATEGORIES: {
    BASE: '/api/categories',
    BY_ID: (id: string) => `/api/categories/${id}`,
  },
  LOCATIONS: {
    CITIES: '/api/locations/cities',
  },
  UPLOAD: {
    /** POST multipart/form-data with field "file". UploadType.POST. */
    POST_IMAGE: '/api/upload/post',
  },
} as const;
