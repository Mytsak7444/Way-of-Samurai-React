let rerenderEntireTree = () => {

}

let state = {
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
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: '5',
    message: state.profilePage.newPostText,
    likeCount: 7
  }

  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

//--------------------------------------------------

export const addMessage = () => {
  // debugger
  let newMessage = {
    id: '10',
    text: state.messagePage.newMessageText
  }

  state.messagePage.messages.push(newMessage)
  state.messagePage.newMessageText = ''
  rerenderEntireTree(state)
}

export const updateMessage = (newMess) => {
  state.messagePage.newMessageText = newMess
  rerenderEntireTree(state)
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer
}

export default state;