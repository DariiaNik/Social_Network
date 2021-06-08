import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '69e05ccb-e8c8-4b08-b04d-f970d0ae34e8'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    followPost(id) {
        return  instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followDelete(id) {
        return  instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
}

 export const authAPI = {
     authMe() {
         return instance.get(`auth/me`)
             .then(response => {
                 return response.data
             });
     },
}

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/`+ userId)
            .then(response => {
                return response.data
            });
    },
}






