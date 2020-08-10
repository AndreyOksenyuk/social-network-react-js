import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import style from './Pagination.module.scss'


const PaginationAntDesign = (props) => {
   const onChange = (pageNumber) => {
      props.onSetPage(pageNumber)
   }
   return (
      <div className={style.pagination}>
         <Pagination
            defaultPageSize={6}
            defaultCurrent={1}
            showSizeChanger={false}
            total={props.totalUsersCount}
            onChange={onChange} />
      </div>
   );
}

export default PaginationAntDesign;
