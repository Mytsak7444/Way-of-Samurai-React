import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addMessage, addPost, subscribe, updateMessage, updatePostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} newMessageText={state.messagePage.newMessageText} dialogs={state.messagePage.dialogs} messages={state.messagePage.messages} friends={state.sitebar.friends}
          addPost={addPost} updatePostText={updatePostText} addMessage={addMessage} updateMessage={updateMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
