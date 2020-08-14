import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;


const UsersSelector = React.memo(props => {
   let onChange = async (value) => {
      await props.setTermSearch('')
      await props.setIsFriend(value)
      props.onSetPage(1)
   }

   let onSearch = async (val) => {
      if (val) {
         await props.setTermSearch(val)
         props.onSetPage(1) 
      }
   }
   return (
      <div>
         <Select
            showSearch
            style={{ width: 200, boxShadow: '7px 6px 12px 4px rgba(0,0,0,0.3)' }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
               option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
         >
            <Option value="all">Все</Option>
            <Option value="true">Подписан</Option>
            <Option value="false">Не подписан</Option>
         </Select>
      </div>
   );
})

export default UsersSelector;
