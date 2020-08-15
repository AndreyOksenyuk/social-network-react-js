import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
import style from './Pagination.module.scss'


const PaginationAntDesign = (props) => {
   return (
      <div className={style.pagination}>
         <Pagination
            defaultPageSize={props.defaultPageSize}
            defaultCurrent={props.defaultCurrent}
            showSizeChanger={false}
            total={props.totalCount}
            onChange={props.onChange} />
      </div>
   );
}

export default PaginationAntDesign;
