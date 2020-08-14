import React from 'react';
import Posts from '../Posts.jsx';
import style from '../Post.module.scss';
import img from '../../../../assets/Image/ava.jpg'
import DeletePost from '../DeletePostProfile';
import { EditFilled } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setEditMessagePostAC, setEditPostAC } from '../../../../Redux/profile-reducer.js';

const { TextArea } = Input;

const MapPost = (props) => {
   const dispatch = useDispatch()
   const posts = useSelector(state => state.profilePage.posts)

   const onChangeEditPost = (e) => {
      const id = +e.target.getAttribute('data-id')

      dispatch(setEditMessagePostAC(id, e.target.value))
   }

   const onOpenEditForm = (id) => {
      dispatch(setEditPostAC(true, id))
   }
   const onSaveEditForm = (id) => {
      dispatch(setEditPostAC(false, id))
   }

   return (
      <div className={style.MapPosts}>
         {
            posts.map((post, index) => {
               return <React.Fragment key={post.id}>
                  <div className={style.post}>
                     <div className={style.post_inner}>
                        <img src={post.avatar ? post.avatar : img} alt="ava" />
                        <i>{post.user}</i>
                     </div>
                     <EditFilled 
                        className={style.EditIcon} 
                        title="Изменить пост" 
                        onClick={() => onOpenEditForm(post.id)}
                     />
                     <DeletePost id={post.id} />
                  </div>
                  {post.edit
                     ? <form>
                        <TextArea
                           data-id={post.id}
                           name={`mess${post.id}`}
                           value={post.message}
                           onChange={onChangeEditPost}
                        />
                        <Button type="primary" onClick={() => onSaveEditForm(post.id)} style={{marginTop: '10px'}}>Сохранить</Button>
                     </form>
                     : <Posts
                        posts={post}
                        setLike={props.setLike}
                        setDisLike={props.setDisLike}
                        index={index}
                     />
                  }
               </React.Fragment>
            })
         }
      </div>
   )
}

export default MapPost;