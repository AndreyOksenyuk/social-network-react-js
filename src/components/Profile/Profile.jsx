import React from 'react';
import s from './Profile.module.scss'
import User from './User/User';
import Preloader from '../module/preloader';

const Profile = React.memo(props => {
   return (
      <div className={s.profile}>
         <div className={s.topImg}></div>
         {props.isPutData
            ? <Preloader />
            : <User
               {...props.User}
               followedUser={props.followedUser}
               FollowToggle={props.FollowToggle}
               userStatus={props.userStatus}
               authorization={props.authorization}
               user={props.User}
            />
         }
      </div>
   )
});

export default Profile;