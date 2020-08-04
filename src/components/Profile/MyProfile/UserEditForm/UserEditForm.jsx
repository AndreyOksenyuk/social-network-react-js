import React from 'react';
import { Field, reduxForm } from 'redux-form';
import '../MyProfile.scss'

const UserEditForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <div className="UserInform__data">
            <div className="UserInform__data-inner">
               <b>fullName: </b>
               <Field
                  name='fullName'
                  type='text'
                  component='input'
               />
            </div>
            <div className="UserInform__data-inner">
               <b>lookingForAJob: </b>
               <Field
                  name='lookingForAJob'
                  type='checkbox'
                  component='input'
               />
            </div>
            <div className="UserInform__data-inner">
               <b>lookingForAJobDescription: </b>
               <Field
                  name='lookingForAJobDescription'
                  component='textarea'
               />
            </div>
            <div className="UserInform__data-inner">
               <b>AboutMe: </b>
               <Field
                  name='aboutMe'
                  type='text'
                  component='textarea'
               />
            </div>
         </div>
         <button>{props.disbleBtn ? <i className="fa fa-spinner fa-pulse"></i> : 'Submit'}</button>
         {
            props.isPutData && <p className='UpdateDataSucces'>Данные успешно обновлены</p>
         }
      </form>
   );
}

const UserEditReduxForm = reduxForm({
   form: 'UserEditForm',  
})(UserEditForm)


export default UserEditReduxForm;

