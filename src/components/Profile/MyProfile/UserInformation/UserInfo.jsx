import React, { useState } from 'react';
import UserStatus from './UserStatus';
import '../MyProfile.scss'
import UserSocial from './UserSocial';
import UserEditReduxForm from '../UserEditForm/UserEditForm';

const UserInfo = React.memo(props => {

   let [openForm, setOpenForm] = useState(false)

   let onToggleForm = () => {
      setOpenForm(openForm = !openForm)
   }

   let onSaveUserData = (value) => {
      props.saveMyDataTC(value, props.user.userId)
   }

   return (
      <div className='UserInform_wrapper'>
         {openForm
            ? <i className='openFormBtn' onClick={onToggleForm}>назад</i>
            : <i className="fa fa-pencil openFormBtn" aria-hidden="true"
               title="Изменить данные"
               onClick={onToggleForm}> &nbsp;Изменить
            </i>
         }

         {openForm
            ? <UserEditReduxForm
               onSubmit={onSaveUserData}
               isPutData={props.isPutData}
               initialValues={props.user}
               disableBtn={props.disableBtn}
            />
            : <div className="UserInform">
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
                     <b>Ищу работу: </b>
                     <p>{props.user.lookingForAJob ? 'ДА' : 'Нет'}</p>
                  </div>
                  <div className="UserInform__data-inner">
                     <b>Умения: </b>
                     <p>{props.user.lookingForAJobDescription ? props.user.lookingForAJobDescription : <i>Нет данных</i>}</p>
                  </div>
                  <div className="UserInform__data-inner">
                     <b>Обо мне:</b>
                     <p>{props.user.aboutMe ? props.user.aboutMe : <i>нет данных</i>}</p>
                  </div>
                  <div className="UserSocial">
                     <strong>Контакты:</strong>
                     {props.user.contacts ? Object.keys(props.user.contacts).map(key => {
                        return <UserSocial key={key} keyContacts={key} valueContacts={props.user.contacts[key]} />
                     })
                        : <i> Загрузка...</i>
                     }
                  </div>
               </div>
            </div>
         }
      </div>

   );
})

export default UserInfo;
