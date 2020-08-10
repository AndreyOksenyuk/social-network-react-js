import React from 'react';
import style from './AddMessageForm.module.scss'
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const TextareaPost = ({input, meta, ...props}) => {
   return (
      <div className={style.form}>
         <p className={style.textError} style={meta.valid ? { opacity: '0' } : { opacity: '1' }}>Добавить запись &#9998;</p>        
         <TextArea {...input} {...props} />
      </div>
   );
}

export default TextareaPost;
