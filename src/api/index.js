import axios from 'axios';

let instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
      headers: {
         'API-KEY': '994c0563-a343-4b38-a674-54b0f1bd315c'
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
   getUserProfile (userId) {
      return instance.get(`profile/${userId}`).then(response => {
         return response.data
   })},
   getUsers (numberOfPages, numberOfUsers) {
      return instance.get(`users?page=${numberOfPages}&count=${numberOfUsers}`).then(response => {
         return response.data
   })},
   getUserStatus (userId) {
      return instance.get(`profile/status/${userId}`).then(response => {
         return response.data
   })},
   putMyStatus (status) {
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

export let getAuthMe = () => {
   return instance.get(`auth/me`).then(response => {
      return response.data 
   });
}

export let postLogin = (email, password, rememberMe) => {
   return instance.post(`auth/login`, {email, password, rememberMe}) 
}
export let deleteLogin = () => {
   return instance.delete(`auth/login`) 
}

//API News
const newskey = 'deca95af7ec24bd7881b9d59143b9780';
let instanceNews = axios.create({ 
   baseURL: 'https://newsapi.org/v2/'
})

export let newsAPI = {

   getNewsSearch(country = 'ua'){
      return  instanceNews.get(`top-headlines?country=${country}&apiKey=${newskey}`)
   },
}



