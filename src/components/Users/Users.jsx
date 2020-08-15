import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import Preloader from '../module/preloader';
import PaginationAntDesign from '../module/Pagination/Pagination2';
import UsersSelector from './UsersSelector/UsersSelector';


let Users = (props) => {
   const onChange = (pageNumber) => {
      props.onSetPage(pageNumber)
   }

   return (
      <div className={style.UsersPage}>
         <UsersSelector
            setIsFriend={props.setIsFriend}
            onSetPage={props.onSetPage}
            setTermSearch={props.setTermSearch}
         />
         {props.fetching
            ? <Preloader />
            : <UserCard
               users={props.users}
               follow={props.follow}
               unfollow={props.unfollow}
               disableSubscribeBtn={props.disableSubscribeBtn}
               disableBtn={props.disableBtn}

            />
         }
         <PaginationAntDesign
            totalCount={props.totalUsersCount}
            defaultPageSize={6}
            defaultCurrent={1}
            onChange={onChange}
         />
      </div>
   )
}

export default Users;
