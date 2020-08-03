import React from 'react';
import './MyProfile.scss';
import AddPostContainer from '../Posts/AddPost/AddPostContainer';
import MapPostContainer from '../Posts/MapPosts/MapPostContainer';

import UserInfo from './UserInformation/UserInfo';
import UserAvatar from './UserInformation/UserAvatar';

const MyProfile = (props) => {

   return (
      <div className="MyProfile">
         <div className="MyProfile__user">
            <UserAvatar 
               photoLarge={{ ...props.user.photos }.large}
               saveMyPhotoTC={props.saveMyPhotoTC}
            />
            <UserInfo                      
               myStatus={props.myStatus}
               setMyStatus={props.setMyStatus}
               changeValueMyStatus={props.changeValueMyStatus}
               fullName={props.user.fullName}
               email={props.email}
            />
         </div>

         <div className="MyProfile__posts" >
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   );
}

export default MyProfile;
