import React from 'react';
import UserCard from './UserCard/UserCard';
import style from './Users.module.scss';
import Preloader from '../module/preloader';
import PaginationAntDesign from '../module/Pagination/Pagination2';


let Users = (props) => {

      return (
         <div className={style.UsersPage}>
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
            <PaginationAntDesign totalUsersCount={props.totalUsersCount} onSetPage={props.onSetPage} />
         </div>
      )
   }

   export default Users;
