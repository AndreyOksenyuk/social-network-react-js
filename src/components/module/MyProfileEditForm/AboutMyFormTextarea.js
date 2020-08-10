import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const AboutMyFormTextarea = ({ input, meta, ...props }) => {
   return (
      <>
         <TextArea placeholder="О себе" allowClear {...input} {...props} />
      </>
   );
}

export default AboutMyFormTextarea;