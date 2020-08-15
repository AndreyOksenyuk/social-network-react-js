import React from 'react';
import Dialogs from './dialogs/Dialogs'
import style from '../../Message.module.scss'

const ListDialogs = (props) => {
   return (
      <div className={style.dialog_wrapper}>
         {props.dialogs.map(dialog => {
            return <Dialogs dialog={dialog} key={dialog.id}/>
         })}
      </div>
   )
}

export default ListDialogs;