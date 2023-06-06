import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Login from './components/Login/Login';
import Chat from "./components/Chat/Chat";
import { ChatProvider } from './context/ChatContext/ChatState';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat/:_id" element={<Chat />} />
          </Routes>
        </ChatProvider>
      </BrowserRouter>
    </>
  )
}

export default App
