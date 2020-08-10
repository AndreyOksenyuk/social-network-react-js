import axios from 'axios';
import { newskey } from '../keyAPI'


let instanceNews = axios.create({
   baseURL: 'https://newsapi.org/v2/'
})

export let newsAPI = {

   getNewsSearch(country = 'ua') {
      return instanceNews.get(`top-headlines?country=${country}&apiKey=${newskey}`)
   },
}