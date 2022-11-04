import s from './../Dialogs.module.css'
import { Link, NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = 'dialog/' + props.id;

  return (
    <div className={s.dialogBlock}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4X-UKegvFJk9xQtCqkjcj7m1Wr-cUWk4P0Q&usqp=CAU' className={s.dialogImg} />
      <Link to={path} className={s.dialog}>{props.name}</Link>
    </div>
  )
}

export default DialogItem;