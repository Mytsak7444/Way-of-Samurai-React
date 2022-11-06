import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} posts={store._state.profilePage.posts} newPostText={store._state.profilePage.newPostText}
          newMessageText={store._state.messagePage.newMessageText}
          dialogs={store._state.messagePage.dialogs} messages={store._state.messagePage.messages} friends={store._state.sitebar.friends}
          dispatch={store.dispatch.bind(store)} addMessage={store.addMessage.bind(store)} updateMessage={store.updateMessage.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(store._state);

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
