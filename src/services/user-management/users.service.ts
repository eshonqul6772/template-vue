import ApiService from '../api.service.js';
const main = '/user';

export default {
  getList: async function (data, name) {
    return ApiService.post(`${main}/list?name=${name}`, data);
  },
  getById: async function (id) {
    return ApiService.get(`${main}/get-by-id/${id}`);
  },
  delete: async function (id) {
    return ApiService.delete(`${main}/delete/${id}`);
  },
  update: async function (data) {
    return ApiService.post(`${main}/update`, data);
  },
  create: async function (data) {
    return ApiService.post(`${main}/create`, data);
  },
  updateUserPassword: async function (data) {
    return ApiService.put('/user/changePass', data);
  },
  permissionLawyer(user) {
    return ApiService.get(
      `/directoryDepartment/permission-lawyer?username=${user.username}&yurist=${!user.yurist} `
    );
  },
};
