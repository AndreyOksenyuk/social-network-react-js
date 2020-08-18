import React from 'react';
import style from './News.module.scss'
import NewsPost from './NewsPost/NewsPost';
import { Pagination } from 'antd';

const News = (props) => {
   let onChange = (pageNumber) => {
      props.NewsCountryHeadlinesTC(pageNumber)
   }
   return (
      <div className={style.News}>
         <NewsPost news={props.news} />
         <div className={style.pagination}>
            {props.totalResults && <Pagination
               defaultPageSize={20}
               defaultCurrent={1}
               total={props.totalResults}
               onChange={onChange}
            />
         }
         </div>
      </div>
   )
}

export default News;