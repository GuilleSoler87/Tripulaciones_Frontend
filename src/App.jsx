import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat/Chat";
import Welcome from "./components/Welcome/Welcome";
import { ChatProvider } from './context/ChatContext/ChatState';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <ChatProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/chat/:_id" element={<Chat />} />
          </Routes>
        </ChatProvider>
      </BrowserRouter>
    </>
  )
}

export default App
