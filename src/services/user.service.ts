import ApiService from './api.service.js';
import { TokenService } from './storage.service.js';

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns access_token
   * @throws AuthenticationError
   **/

  login: async function (userData) {
    ApiService.mount401Interceptor();

    const requestData = {
      method: 'post',
      url: '/auth/login',
      data: {
        username: userData.username,
        password: userData.password,
      },
    };

    try {
      const { data } = await ApiService.customRequest(
        requestData,
        import.meta.env.VITE_ENCRYPT === 'on'
      );

      console.log(data);

      await TokenService.saveToken(data.data.accessToken);
      await localStorage.setItem('userId', data.id);
      await TokenService.setUserName(data.username);
      await TokenService.setFullName(data.fullName);
      await TokenService.saveUserRoles(data.role);
      await TokenService.setExpanded([]);
      await TokenService.setExpanded2([]);
      await localStorage.setItem('language', 'uz');

      ApiService.setHeader();
      console.log('token', data);
      return data;
    } catch (error) {
      throw new AuthenticationError(
        error.response.status,
        error.response.data.detail
      );
    }
  },

  me: async function (req, res, next) {
    const userId = TokenService.getCurrentUserId();
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const response = await ApiService.get(`/users/${userId}`);
      res.json(response.data);
    } catch (error) {
      next(error);
    }
  },

  logout() {
    TokenService.removeFullName();
    TokenService.removeToken();
    TokenService.removeCurrentUserId();
    TokenService.removeIsAdmin();
    TokenService.removeUserName();
    TokenService.removeUserRoles();
    TokenService.removeSelectedDep();
    ApiService.removeHeader();
    ApiService.unmount401Interceptor();
  },
};

export { UserService, AuthenticationError };
