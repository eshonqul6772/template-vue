import ApiService from "./api.service";

export default {
    getListTeachers(){
        return ApiService.get(`/teachers/get-all-teachers`);
    }
}