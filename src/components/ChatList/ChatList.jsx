import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ChatList.scss";
import { UserContext } from "../../context/UserContext/UserState";

const ChatList = () => {
  const { user, chats, getUser, getChatsFromUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [receiver, setReceiver] = useState(null);

  useEffect(() => {
    getUser();
    getChatsFromUser();
  }, []);

  useEffect(() => {
    if (chats && chats.length > 0) {
      const usersArray = chats[0].users;
      const receiver = usersArray.find(x => x.username !== user.username);
      setReceiver(receiver);
    }
  }, [chats, user]);

  if (!user || !receiver) {
    return "loading";
  }

  const sender = { ...user };

  const chatList = chats.map((chat) => {
    return (
      <div>
        <p>{chat._id}</p>
        <p>You are talking to {receiver.username}</p>
        <p>{chat.history[chat.history.length-1].message}</p>
      </div>
    );
  });

  return (
    <>
      <h1>ChatList</h1>
      <p>{sender.username}</p>
      {chatList}
    </>
  );
};

export default ChatList;
