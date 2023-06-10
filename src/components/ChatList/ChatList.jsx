import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatList.scss";
import { UserContext } from "../../context/UserContext/UserState";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ChatList = () => {
  const { user, chats, getUser, getChatsFromUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [receiver, setReceiver] = useState(null);

  const API_URL = "http://localhost:8080/"

  useEffect(() => {
    getUser();
    getChatsFromUser();
  }, []);
  
  if (!user) {
    return "loading";
  }
  
  const getReceiver = (chat) => {
    const usersArray = chat.users;
    const receiver = usersArray.find(x => x.username !== user.username);
    return receiver;
  }

  const extractFilePathFromImage = (path) => {
    // const url = "https://desafio-backend-production.up.railway.app"; //CHANGE to pertinent URL
    const url = "http://localhost:8080/"; //CHANGE to pertinent URL
    try {
      const match = path.match(/uploads[\\\/](.+)/);
      return match ? url + match[1].replace(/\\/g, '/') : null;
    } catch {
      return "../../src/images/no_pic.png";
    }
  }

  const formatTime = (utcDate) => {
    let date = new Date(utcDate);
    date.setHours(date.getHours() - 0);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return date.toTimeString().slice(0, 5);
    }

    let yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
        return "Ayer";
    }

    var lastMonday = new Date();
    lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
    if (date > lastMonday) {
        return ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'][date.getDay() - 1];
    }

    return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
  };

  const formatLastMessage = (message) => {
    const maxLength = 25;
    if (message.length > maxLength) {
      return message.slice(0, maxLength) + "...";
    }
    return message;
  }

  const sender = { ...user };

  const chatList = chats.map((chat, index) => {
    return (
      <div key={index} className="chatItem" onClick={() => navigate(`/chat/${chat._id}`)}>
        <div className="imageDiv">
          <div className="imageContainer">
            <img src={extractFilePathFromImage(getReceiver(chat).img) ? extractFilePathFromImage(getReceiver(chat).img) : "/uploads/users/no_pic.png"} width={150} />
          </div>
        </div>
        <div className="chatInfo">
          <div className="namePlusDate">
            <p className="leftUsername">{getReceiver(chat).username}</p>
            <p className="rightTime">{formatTime(chat.history[chat.history.length-1].date)}</p>
          </div>
          <div className="firstRowOfMessage">
            <p>{formatLastMessage(chat.history[chat.history.length-1].message)}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <Header />
      <div className="chatListTitleContainer">
        <h1>Chat</h1>
      </div>
      <div className="chatListDiv">
        {chatList}
      </div>
      <Footer />
    </>
  );
};

export default ChatList;
