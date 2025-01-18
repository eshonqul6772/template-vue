import axios from 'axios';
import { TokenService } from './storage.service.js';
import store from '../store/store';
// import { bus } from "@/main";
import { decoder, encoder } from '@/components/emicrypter/en-de-cryption.js';

const ApiService = {
  // Stores the 401 interceptor position so that it can be later ejected when needed'
  _401interceptor: null,
  i: 0,

  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common['Authorization'] =
      `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },
  get(resource, config = {}) {
    return axios.get(resource, config);
  },
  post(resource, data, isEncode = import.meta.env.VITE_ENCRYPT === 'on') {
    if (data && isEncode) {
      data = encoder(data);
    }
    return axios.post(resource, data);
  },

  put(resource, data, isEncode = import.meta.env.VITE_ENCRYPT === 'on') {
    if (data && isEncode) {
      data = encoder(data);
    }

    return axios.put(resource, data);
  },
  delete(resource) {
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data, isEncode = import.meta.env.VITE_ENCRYPT === 'on') {
    const isFormData = data?.data?.constructor === FormData;
    if (
      !isFormData &&
      data?.data &&
      isEncode &&
      (data?.method?.toUpperCase() === 'POST' ||
        data?.method?.toUpperCase() === 'PUT')
    ) {
      data.data = encoder(data.data);
    }

    return axios(data);
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        if (response?.data?.hex) {
          response.data = JSON.parse(decoder(response.data.hex));
        }

        return response;
      },
      async (error) => {
        this.i++;
        if (this.i === 1) {
          if (
            error.response?.config?.url?.indexOf('user-enter-exit/exit') >= 0
          ) {
            throw error;
          }
          // || !TokenService.getEmicrypterData()
          if (error.request.status === 403 || error.request.status === 401) {
            // await bus.$showMsgError(i18n.t('warning.tokenExpired'))
            await store.dispatch('auth/logout');
            throw error;
          } else {
            if (error.request.status !== 200 && error.request.status !== 417) {
              if (
                error.response?.data?.message ||
                error.response?.data?.details
              ) {
                if (error.response?.data?.details) {
                  // bus.$showMsgErrorWithDetails(
                  //   `${error.response?.data?.message}`,
                  //   `${error.response?.data?.details}`
                  // );
                } else {
                  // await bus.$showMsgError(`${error.response.data?.message}`);
                }
              } else {
                if (error.response?.data?.error) {
                  // bus.$showMsgError(error.response?.data?.error);
                } else {
                  // await bus.$showMsgError(`Tizimdagi xatolik!`);
                }
              }
              throw error;
            }
          }
        }
        this.i = 0;
        // If error was not 401 just reject as is
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
