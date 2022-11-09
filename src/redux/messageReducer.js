const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const messageReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: '10',
        text: state.newMessageText
      }
      state.messages.push(newMessage)
      state.newMessageText = ''
      return state
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMess
      return state
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" })
export const updateNewMessageTextActionCreator = (text) => ({ type: "UPDATE-MESSAGE-TEXT", newMess: text })

export default messageReducer;