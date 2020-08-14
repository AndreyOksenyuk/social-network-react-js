import React from 'react';
import style from './AddMessageForm.module.scss'
import { Input } from 'antd';

const { TextArea } = Input;

const Textarea = ({input, meta, ...props}) => {
   return (
      <div className={style.form}>
         <TextArea {...input} {...props} className={meta.valid ? style.textarea : style.noValid}/>
         {
            !meta.valid &&
             <p>{meta.error}</p>
         }
      </div>
   );
}

export default Textarea;
