const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: '5',
        message: state.newPostText,
        likeCount: 7
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: "ADD-POST" })
export const updateNewPostTextActionCreator = (text) => ({ type: "UPDATE-NEW-POST-TEXT", newText: text })

export default profileReducer;