import React, { useState, useEffect } from 'react';
import UserStatus from './UserStatus';
import '../MyProfile.scss'
import UserSocial from './UserSocial';
import UserEditReduxForm from '../UserEditForm/UserEditForm';

const UserInfo = React.memo(props => {
   let [openForm, setOpenForm] = useState(true)
   let [disbleBtn, setDisableBtb] = useState(false)

   useEffect(() => {
      setDisableBtb(false)
   }, [props.isPutData])

   let onToggleForm = () => {
      setOpenForm(openForm = !openForm)
      props.setIsPutData(false)
   }

   let onSaveUserData = (value) => {
      props.saveMyDataTC(value, props.user.userId)
      setDisableBtb(true)
   }

   return (
      <div className='UserInform_wrapper'>
         <i className="fa fa-pencil" aria-hidden="true" 
            title="Изменить данные"
            onClick={onToggleForm}
         ></i>
         {openForm 
         ?  <div className="UserInform">
            <h5 className='UserInform__name'>{props.user.fullName}</h5>
            <div className="UserInform__status">
               <UserStatus
                  myStatus={props.myStatus}
                  changeValueMyStatus={props.changeValueMyStatus}
               />
            </div>
            <div className="UserInform__data">
               <div className="UserInform__data-inner">
                  <b>Email:</b>
                  <a href={`mailto:${props.email}`}>{props.email}</a>
               </div>

               <div className="UserInform__data-inner">
                  <b>lookingForAJob: </b>
                  <p>{props.user.lookingForAJob ? 'ДА' : 'Нет'}</p>
               </div>
               <div className="UserInform__data-inner">
                  <b>lookingForAJobDescription: </b>
                  <p>{props.user.lookingForAJobDescription ? props.user.lookingForAJobDescription : <i>Нет данных</i>}</p>
               </div>               
               <div className="UserInform__data-inner">
                  <b>AboutMe:</b>
                  <p>{props.user.aboutMe ? props.user.aboutMe : <i>нет данных</i>}</p>
               </div>
               <div className="UserSocial">
                  <strong>Contacts:</strong>
                  {props.user.contacts ? Object.keys(props.user.contacts).map(key => {
                     return <UserSocial key={key} keyContacts={key} valueContacts={props.user.contacts[key]} />
                  })
                     : <i> Загрузка...</i>
                  }
               </div>
            </div>
         </div>
            : <UserEditReduxForm 
                  onSubmit={onSaveUserData} 
                  isPutData={props.isPutData}
                  initialValues={props.user}
                  disbleBtn={disbleBtn}
               />
         }
      </div>
   
   );
})

export default UserInfo;
