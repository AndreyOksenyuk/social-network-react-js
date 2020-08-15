import axios from 'axios';
import { newskey } from '../keyAPI'


let instanceNews = axios.create({
   baseURL: 'https://newsapi.org/v2/'
})

export let newsAPI = {
   getNewsSearch(page = 1, country = 'ua') {
      return instanceNews.get(`top-headlines?country=${country}&page=${page}&apiKey=${newskey}`)
   },
}