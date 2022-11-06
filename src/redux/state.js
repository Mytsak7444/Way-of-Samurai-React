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
  addPost() {
    
    let newPost = {
      id: '5',
      message: this._state.profilePage.newPostText,
      likeCount: 7
    }

    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  addMessage() {
    let newMessage = {
      id: '10',
      text: this._state.messagePage.newMessageText
    }

    this._state.messagePage.messages.push(newMessage)
    this._state.messagePage.newMessageText = ''
    this._callSubscriber(this._state)
  },
  updatePostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  updateMessage(newMess) {
    this._state.messagePage.newMessageText = newMess
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  }

}

export default store;