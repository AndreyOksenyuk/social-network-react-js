import React from 'react';
import './MyProfile.scss';
import AddPostContainer from '../Posts/AddPost/AddPostContainer';
import MapPostContainer from '../Posts/MapPosts/MapPostContainer';
import img from '../../../assets/Image/ava.jpg'
import UserStatus from './UserStatus';
import AddAvatarSVG from '../../module/SVG/AddAvatar';

const MyProfile = (props) => {

   let onMyPhoto = (e) => {
      props.saveMyPhotoTC(e.target.files[0])
   }

   return (
      <div className="MyProfile">
         <div className="MyProfile__user">
            <div className='MyPhotoWrapper'>
               {
                  !{ ...props.user.photos }.small
                     ? <img src={img} alt="avatar" className="MyAvatar" />
                     : <img src={{ ...props.user.photos }.large} alt="avatar" className="MyAvatar" />
               }
               <input type="file" id="inputPhoto" onChange={onMyPhoto} />
               <label htmlFor="inputPhoto"><AddAvatarSVG /></label>

            </div>
            <div className="UserInform">
               <h5 className='UserInform__name'>{props.user.fullName}</h5>
               <div className="UserInform__status">
                  <UserStatus
                     myStatus={props.myStatus}
                     setMyStatus={props.setMyStatus}
                     changeValueMyStatus={props.changeValueMyStatus}
                  />
               </div>
               <div className="UserInform__data">
                  <div className="UserInform__data-email">
                     <p>Email:</p>
                     <a href={`mailto:${props.email}`}>{props.email}</a>
                  </div>
                  <div className="UserInform__data-phone">
                     <p>Телефон:</p>
                     <a href='tel:+380123456789'>+380123456789</a>
                  </div>
               </div>
            </div>
         </div>

         <div className="MyProfile__posts" >
            <AddPostContainer />
            <MapPostContainer />
         </div>
      </div>
   );
}

export default MyProfile;
