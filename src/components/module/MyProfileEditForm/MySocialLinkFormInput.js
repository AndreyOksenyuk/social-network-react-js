import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const MySocialLinkFormInput = ({ input, meta, ...props }) => {
   return (
      <>
         <Input placeholder="https://url.com" {...input} {...props}/>
      </>
   );
}

export default MySocialLinkFormInput;
