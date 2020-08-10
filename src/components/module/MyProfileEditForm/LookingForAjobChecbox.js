import React from 'react';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

const LookingForAjobChecbox = ({ input, meta, ...props }) => {
   return (
      <>
         <Switch checkedChildren="Да" unCheckedChildren="Нет" defaultChecked {...input} {...props}/>
      </>
   );
}

export default LookingForAjobChecbox;
