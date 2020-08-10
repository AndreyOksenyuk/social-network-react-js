import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const MyNameForm = ({ input, meta, ...props }) => {
   return (
      <>
         <Input placeholder="Basic usage" {...input} {...props}/>
      </>
   );
}

export default MyNameForm;
