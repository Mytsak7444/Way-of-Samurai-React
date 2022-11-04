import s from './FriendItem.module.css'

const FriendItem = (props) => {
  return (
    <div className={s.itemBlock}>
      <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png' className={s.friendImg} />
      <div>
        {props.name}
      </div>
    </div>
  )
}

export default FriendItem;