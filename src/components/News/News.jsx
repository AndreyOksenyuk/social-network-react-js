import React from 'react';
import style from './News.module.scss'
import NewsPost from './NewsPost/NewsPost';
import { Pagination } from 'antd';
import { newsState } from '../../NewsState'

const News = (props) => {
   let onChange = (pageNumber) => {
      props.NewsCountryHeadlinesTC(pageNumber)
   }
   return (
      <div className={style.News}>
         <NewsPost news={props.news} />
         <div className={style.pagination}>
            <Pagination
               defaultPageSize={20}
               defaultCurrent={1}
               total={props.totalResults || newsState.articles.length}
               onChange={onChange}
            />
         </div>
      </div>
   )
}

export default News;