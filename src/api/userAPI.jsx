import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '69e05ccb-e8c8-4b08-b04d-f970d0ae34e8'
    }
})

export const userAPI = {
    getUsersAPI(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followPostAPI(id) {
        return  instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followDeleteAPI(id) {
        return  instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/'+ userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/'+ userId);
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status});
    }
}

 export const authAPI = {
     authMe() {
         return instance.get(`auth/me`);
     }

}








