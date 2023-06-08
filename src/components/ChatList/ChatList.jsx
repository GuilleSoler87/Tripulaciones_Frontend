import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChatList.scss";
import { UserContext } from "../../context/UserContext/UserState";

const ChatList = () => {
  const { user, chats, getUser, getChatsFromUser } = useContext(UserContext);
  const navigate = useNavigate();
  // const [receiver, setReceiver] = useState(null);

  useEffect(() => {
    getUser();
    getChatsFromUser();
  }, []);

  // useEffect(() => {
  //   if (chats && chats.length > 0) {
  //     const usersArray = chats[0].users;
  //     const receiver = usersArray.find(x => x.username !== user.username);
  //     setReceiver(receiver);
  //   }
  // }, [chats, user]);
  
  if (!user) {
    return "loading";
  }
  
  const getReceiver = (chat) => {
    const usersArray = chat.users;
    const receiver = usersArray.find(x => x.username !== user.username);
    return receiver;
  }

  const extractFilePathFromImage = (path) => {
    const url = "http://localhost:8080/"; //CHANGE to pertinent URL
    const match = path.match(/uploads[\\\/](.+)/);
    return match ? url + match[1].replace(/\\/g, '/') : null;
  }

  const sender = { ...user };

  const chatList = chats.map((chat, index) => {
    return (
      <div key={index} className="chatItem" onClick={() => navigate(`/chat/${chat._id}`)}>
        <div className="imageDiv">
          <div className="imageContainer">
            <img src={extractFilePathFromImage(getReceiver(chat).img)} width={150} />
          </div>
        </div>
        <div className="chatInfo">
          <p>{getReceiver(chat).username}</p>
          <p>{chat.history[chat.history.length-1].message}</p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>ChatList</h1>
      <p>{sender.username}</p>
      <img src={extractFilePathFromImage(user.img)} width={150} />
      <div className="chatListDiv">
        {chatList}
      </div>
    </>
  );
};

export default ChatList;
