import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import Contacts from './components/Contacts/Contacts';
import Notification from './components/Notification/Notification';
import Password from './components/Password/Password';
import Profile from './components/Profile/Profile';
import Chat from "./components/Chat/Chat";
import ChatList from './components/ChatList/ChatList';
import { ChatProvider } from './context/ChatContext/ChatState';
import { UserProvider } from './context/UserContext/UserState';


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ChatProvider>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/password" element={<Password />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chatlist" element={<ChatList />} />
              <Route path="/chat/:_id" element={<Chat />} />
            </Routes>
          </ChatProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
