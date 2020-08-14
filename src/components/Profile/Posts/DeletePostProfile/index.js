import React from 'react';
import 'antd/dist/antd.css';
import { Popover } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deletePostProfileAC } from '../../../../Redux/profile-reducer';
import { useState } from 'react';
import s from '../Post.module.scss'


const DeletePost = ({id}) => {
   let dispatch = useDispatch()
   let [visible, setVisible] = useState(false)

   const onNoDelete = () => {
      setVisible(false);
   };

   const handleVisibleChange = visible => {
      setVisible(visible);
   };

   let onDeletePost = () => {
      dispatch(deletePostProfileAC(id))
   }

   return (
      <>
         <Popover
            content={
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <b style={{ color: 'red', cursor: 'pointer' }} onClick={onDeletePost}>Да</b>
                  <b style={{ color: 'green', cursor: 'pointer' }} onClick={onNoDelete}>Нет</b>
               </div>

            }
            title="Удалить пост?"
            trigger="click"
            visible={visible}
            onVisibleChange={handleVisibleChange}
         >
            <button className={s.deleteSVG} title="Удалить пост"><DeleteOutlined /></button>
         </Popover>
      </>
   );
}

export default DeletePost;
