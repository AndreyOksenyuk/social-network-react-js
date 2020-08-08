import React from 'react';
import s from './User.module.scss'
import img from '../../../assets/Image/ava.jpg'
import SubscribeBtnContainer from '../../module/SubscribeButton/SubscribeBtnContainer'

const User = (props) => {
   console.log(props);

   let avatar = props.photos !== undefined && props.photos.small

   return (
      <div className={s.user}>
         <div className={s.user__inner}>
            <img
               src={avatar || img}
               alt="avatar"
               className={s.avatar}
            />

            <div className={s.followedBtn} onClick={() => props.FollowToggle()} >
               <SubscribeBtnContainer
                  id={props.userId}
                  userFollowed={props.followedUser}
               />
            </div>

            <h2>{props.fullName}</h2>

            {props.userStatus 
               ? <i>{props.userStatus}</i>
               : <i>без статуса</i>
            }

         </div>
      </div>
   )
}

export default User;