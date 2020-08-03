import React from 'react';
import UserStatus from './UserStatus';
import '../MyProfile.scss'

const UserInfo = (props) => {
   return (
      <div className="UserInform">
         <h5 className='UserInform__name'>{props.fullName}</h5>
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
            <div className="UserInform__data-phone">
               <p>Семейное положение:</p>

            </div>
            <div className="UserInform__data-phone">
               <p>Робота:</p>

            </div>
            <div className="UserInform__data-phone">
               <p>Образование:</p>

            </div>
         </div>
      </div>
   );
}

export default UserInfo;
