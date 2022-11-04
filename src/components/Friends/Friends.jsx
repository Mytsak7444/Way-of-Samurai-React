import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css'


const Friends = (props) => {

  let dialogsElements = props.friends.map(f => <FriendItem name={f.name} />)

  return (<div className={s.friendsBlock}>
    <div className={s.friendsTitle}>Friends</div>
    <div className={s.friendsElements}>
      {dialogsElements}
    </div>
  </div>
  )
}

export default Friends;