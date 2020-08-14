import React from 'react';
import Dialogs from './dialogs/Dialogs'

const ListDialogs = (props) => {
   return (
      <>
         {props.dialogs.map(dialog => {
            return <Dialogs dialog={dialog} key={dialog.id}/>
         })}
      </>
   )
}

export default ListDialogs;