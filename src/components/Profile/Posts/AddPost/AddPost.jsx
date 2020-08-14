import React from 'react';
import s from './AddPost.module.scss'
import AddPostForm from './AddPostForm';
import { useSelector } from 'react-redux';

const AddPost = (props) => {  
   const avatar = useSelector(state => state.auth.myAvatar)
   const name = useSelector(state => state.auth.login)
   
let onAddPost = (value) => {
   props.addPost(value.post, avatar, name)
}

   return (
      <div className = {s.addPost}>
         <AddPostForm 
            postsLength={props.postsLength}
            onSubmit={onAddPost}
         />
      </div>
   )
}

export default AddPost;

