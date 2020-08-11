import axios from 'axios';
import { networkKey } from '../keyAPI';

let instance = axios.create({
   withCredentials: true,

   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      'API-KEY': networkKey,
   }
})
export let followedAPI = {
   getFollow(userId) {
      return instance.get(`follow/${userId}`).then(response => {
         return response.data
      })
   },

   deleteFollow(userId) {
      return instance.delete(`follow/${userId}`).then(response => {
         return response.data
      })
   },

   postFollow(userId) {
      return instance.post(`follow/${userId}`).then(response => {
         return response.data
      })
   },
};

export let userAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data
      })
   },
   getUsers(numberOfPages, numberOfUsers, friend='all', term = '') {
      return instance.get(`users?page=${numberOfPages}&count=${numberOfUsers}&friend=${friend}&term=${term}`)
      .then(response => {
         return response.data
      })
   },
   getUserStatus(userId) {
      return instance.get(`profile/status/${userId}`).then(response => {
         return response.data
      })
   },

}

export const updateProfileApi = {
   putMyStatus(status) {
      return instance.put(`profile/status`, status)
   },
   putMyPhoto(photo) {
      const formData = new FormData()
      formData.append("image", photo)
      return instance.put(`profile/photo`, formData, {}).then(response => {
         return response.data
      })
   },
   putMyData(data) {
      return instance.put(`profile`, data)
   },
}

export const authAPI = {
   getAuthMe() {
      return instance.get(`auth/me`).then(response => {
         return response.data
      });
   },
   postLogin(email, password, rememberMe, captcha) {
      return instance.post(`auth/login`, { email, password, rememberMe, captcha })
   },
   deleteLogin() {
      return instance.delete(`auth/login`)
   },
   getCaptchaURL() {
      return instance.get(`security/get-captcha-url`)
   },
}




