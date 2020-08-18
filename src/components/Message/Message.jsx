import React from 'react';
import style from './Message.module.scss';
import ContainerAddMessage from './AddMessage/ContainerAddMessage';
import ListDialogsContainer from './Dialog/ListDialogs/ListDialogsContainer';
import DialogMessageContainer from './Dialog/DialogMessage/DialogMessageContainer';

const Message = (props) => {
   return(
      <div className={style.messages}>
      <ListDialogsContainer />
         <div className={style.dialog}>
            <DialogMessageContainer />
            <ContainerAddMessage />
         </div>
      </div>
   )   
}
export default Message;