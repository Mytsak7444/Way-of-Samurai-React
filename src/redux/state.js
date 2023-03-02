import messageReducer from "./messageReducer"
import profileReducer from "./profileReducer"
import sitebarReducer from "./sitebarReducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: 'Hi, how are you?', likeCount: '21', id: '1' },
        { message: 'It\'s my first post', likeCount: '22', id: '2' },
        { message: 'China', likeCount: '11', id: '3' },
        { message: 'Chizaz', likeCount: '434', id: '4' },
      ],
      newPostText: ' '
    },
    messagePage: {
      dialogs: [
        { name: 'Bohdan', id: '1', },
        { name: 'Peter', id: '2' },
        { name: 'Jack', id: '3' },
        { name: 'Max', id: '4' },
        { name: 'Artem', id: '5' },
        { name: 'Andrey', id: '6' },
      ],
      messages: [
        { text: 'Hi', id: '1' },
        { text: 'Woow your course is cool', id: '2' },
        { text: 'Thanks', id: '3' },
        { text: 'Bye', id: '4' },
      ],
      newMessageText: ' '
    },
    sitebar: {
      friends: [
        { name: 'Ihor' },
        { name: 'Peter' },
        { name: 'Nazar' },
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagePage = messageReducer(this._state.messagePage, action)

    this._callSubscriber(this._state)
  }
}


export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" })
export const updateNewMessageTextActionCreator = (text) => ({ type: "UPDATE-MESSAGE-TEXT", newMess: text })

export default store;