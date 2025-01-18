const TOKEN_KEY = 'access_token';
const USER_ID_KEY = 'userId';
const IS_ADMIN = 'isAdmin';
const USERNAME = 'userName';
const ROLE = 'role';
const SELECTED_DEP = 'selected_department';
const EXPANDED = 'expanded';
const FULLNAME = 'fullName';
const EXPANDEDD = 'expanded_order_type';
const EMICRYPTER_DATA = 'text';

const TokenService = {
  getEmicrypterData() {
    try {
      const data = localStorage.getItem(EMICRYPTER_DATA);
      if (data) {
        return JSON.parse(data); // Only parse if data is not null
      }
      return null;
    } catch (error) {
      return error;
    }
  },
  setFullName(data: never) {
    return localStorage.setItem(FULLNAME, data);
  },
  removeFullName() {
    return localStorage.removeItem(FULLNAME);
  },
  getFullName() {
    return localStorage.getItem(FULLNAME);
  },

  setExpanded2(data: never) {
    return localStorage.setItem(EXPANDEDD, JSON.stringify(data));
  },
  setExpanded(data: never) {
    return localStorage.setItem(EXPANDED, JSON.stringify(data));
  },
  removeSelectedDep() {
    return localStorage.removeItem(SELECTED_DEP);
  },
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },
  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },
  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },
  removeCurrentUserId() {
    localStorage.removeItem(USER_ID_KEY);
  },
  getIsAdmin() {
    return localStorage.getItem(IS_ADMIN);
  },
  removeIsAdmin() {
    localStorage.removeItem(IS_ADMIN);
  },
  saveUserRoles(role: string) {
    localStorage.setItem(ROLE, JSON.stringify(role));
  },
  removeUserRoles() {
    localStorage.removeItem(ROLE);
  },
  setUserName(userName: string) {
    localStorage.setItem(USERNAME, userName);
  },
  getUserName() {
    return localStorage.getItem(USERNAME);
  },
  removeUserName() {
    return localStorage.removeItem(USERNAME);
  },
};

export { TokenService };
