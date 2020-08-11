import React from 'react';
import style from './LoginForm.module.scss'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const styleInput = { 
   width: '275px', 
   paddingTop: '0px', 
   paddingBottom: '0px', 
   paddingRigth: '40px', 
}

const Password = ({ input, meta, ...props }) => {
   const dirty = !meta.dirty && meta.touched;
   const error = meta.error && meta.touched;
   return (
      <div className={error || dirty ? style.emailError : style.email}>
         <Input.Password 
            placeholder="input password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={styleInput} {...input} {...props} 

         />
         {error &&
            <p className={style.messageError}>Пароль должен быть не менее 4 символов</p>
         }
         {dirty &&
            <p className={style.messageError}>Поле password не должно быть пустым</p>
         }
      </div>
   );
}

export default Password;
