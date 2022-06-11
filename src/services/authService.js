import httpClient from '../api/httpClient';

class AuthService {
  login({ name, password }) {
    return httpClient.post('auth/login', { name, password }).then((res) => res);
  }

  registration({ name, password }) {
    return httpClient.post('auth/registration', { name, password }).then((res) => res);
  }

  getCurrentUser() {
    return httpClient.get('auth/user').then((res) => res);
  }
}

export const authService = new AuthService();
