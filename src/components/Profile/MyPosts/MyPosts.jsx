import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id} />)
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;