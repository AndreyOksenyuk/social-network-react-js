import React from 'react';
import style from './DialogMessage.module.scss'
import img from '../../../../assets/Image/ava.jpg'

const DialogMessage = (props) => {
 
 
   return (
      <div className={style.dialog_inner}>
         {props.message.map(m => {
            return (
               <div className={style.message_item} key={m.id}>
                  <img src={img} alt="avatar" className={style.avatar}/>
                  <p key={m.id}>{m.message}</p>
                  <span className={style.date}>{m.date}</span>
               </div>
            )
         })}
      </div>
      
   )
}

export default DialogMessage;