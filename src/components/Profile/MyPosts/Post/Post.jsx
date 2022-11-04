import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWzw8_87ASKSkDuQx7gbTSbjJtcxUQ7aXD9Q&usqp=CAUs" alt="" />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  )
}

export default Post;