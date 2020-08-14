import React from 'react';
import style from './Post.module.scss'
import { useDispatch } from 'react-redux';
import { actionCreatorLike, actionCreatorDisLike } from '../../../Redux/profile-reducer';

const Posts = (props) => {
   const dispatch = useDispatch()

   let onLike = () => {
      dispatch(actionCreatorLike(props.index))
   }
   let onDisLike = () => {
      dispatch(actionCreatorDisLike(props.index))
   }

   return (
      <div className={style.Posts}>

         <p>{props.posts.message}</p>

         <div className={style.likeAndDisLike}>
            <div className={props.posts.like.status ? style.likeActive : style.noActiv}
               onClick={onLike}
            >
               <div className="fa fa-thumbs-up" aria-hidden="true">
                  <span>{props.posts.like.count}</span>
               </div>
            </div>

            <div
               className={props.posts.disLike.status ? style.likeActive : style.noActiv}
               onClick={onDisLike}
            >
               <div className="fa fa-thumbs-down" aria-hidden="true">
                  <span>{props.posts.disLike.count}</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Posts;