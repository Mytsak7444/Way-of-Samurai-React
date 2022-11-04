import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
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