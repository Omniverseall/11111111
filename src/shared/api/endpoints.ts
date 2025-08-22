export const API_ENDPOINTS = {
  documents: {
    list: '/api/documents',
    create: '/api/documents',
    update: (id: string) => `/api/documents/${id}`,
    delete: (id: string) => `/api/documents/${id}`,
    sign: (id: string) => `/api/documents/${id}/sign`,
  },
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
  },
  contact: {
    send: '/api/contact',
  },
} as const;
