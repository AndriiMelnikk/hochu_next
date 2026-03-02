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
    FEED: (id: string | number) => `/api/requests/feed/${id}`,
    PROPOSALS: (profileId: string) => `/api/requests/proposals/${profileId}`,
  },
  PROPOSALS: {
    BASE: '/api/proposals',
    BY_ID: (id: string | number) => `/api/proposals/${id}`,
    BY_REQUEST_ID: (requestId: string | number) => `/api/proposals/requests/${requestId}`,
    CAN_PROPOSE: (requestId: string | number) => `/api/proposals/can-propose/${requestId}`,
    WITHDRAW: (proposalId: string | number) => `/api/proposals/${proposalId}/withdraw`,
    REJECT: (proposalId: string | number) => `/api/proposals/${proposalId}/reject`,
    ACCEPT: (proposalId: string | number) => `/api/proposals/${proposalId}/accept`,
    COMPLETE: (proposalId: string | number) => `/api/proposals/${proposalId}/complete`,
    CANCEL: (proposalId: string | number) => `/api/proposals/${proposalId}/cancel`,
  },
  REVIEWS: {
    BASE: '/api/reviews',
    STATS: (profileId: string) => `/api/reviews/stats/${profileId}`,
    BY_PROFILE_ID: (profileId: string) => `/api/reviews/profiles/${profileId}`,
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
    /** DELETE with query param "url". */
    DELETE_FILE: '/api/upload',
  },
} as const;
