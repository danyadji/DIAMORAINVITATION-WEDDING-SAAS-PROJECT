import api from './api';

export const authService = {
  requestMagicLink: async (email) => {
    const response = await api.post('/auth/request-link', { email });
    return response.data;
  },

  verifyMagicLink: async (token) => {
    const response = await api.get(`/auth/magic-login?token=${token}`);
    return response.data;
  },

  getUser: async () => {
    const response = await api.get('/user');
    return response.data;
  },

  logout: async () => {
    const response = await api.post('/auth/logout');
    localStorage.removeItem('auth_token');
    return response.data;
  },
};

export default authService;
