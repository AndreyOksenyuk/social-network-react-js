import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const MyScillsFormTextarea = ({ input, meta, ...props }) => {
   return (
      <>
         <TextArea placeholder="Профессиональные умения и навыки" allowClear {...input} {...props} />
      </>
   );
}

export default MyScillsFormTextarea;
