import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friends={props.friends} />
      <div className='app-wrapper-content'>
        <div>
          <Routes>
            <Route path='profile' element={<Profile posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch} />} />
            <Route path='dialogs' element={<Dialogs dialogs={props.dialogs} messages={props.messages} newMessageText={props.newMessageText} dispatch={props.dispatch} />} />
            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
