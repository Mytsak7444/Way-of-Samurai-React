import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts newPostText={props.newPostText} posts={props.posts} addPost={props.addPost} updatePostText={props.updatePostText} />
    </div>
  )
}

export default Profile;