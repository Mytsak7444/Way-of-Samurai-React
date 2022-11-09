import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messageReducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let messageElements = props.messages.map(m => <Message text={m.text} id={m.id} />)

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messageElements}
        <div className={s.sendMessageBlock}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;