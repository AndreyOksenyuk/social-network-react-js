import axios from 'axios';
import { musicKey } from '../keyAPI';

//API Music
let instanceMusic = axios.create({
   baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
   headers: {
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      "x-rapidapi-key": musicKey,
      "useQueryString": true
   }
})


export let musicAPI = {

   getSearchMusic(query, limit = 8, index = 0,) {
      return instanceMusic.get(`search?q=${query}&index=${index}&limit=${limit}`)
   },

}
