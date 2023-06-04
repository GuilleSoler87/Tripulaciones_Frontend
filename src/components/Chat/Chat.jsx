import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.scss";
import { ChatContext } from "../../context/ChatContext/ChatState";
// import { UserContext } from "../../context/UserContext/UserState";

const Chat = () => {
  const { chat, history, getSingleChat } = useContext(ChatContext);
  const { _id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleChat(_id).then(() => setLoading(false));
  }, []);

  const sender = chat.users[0]._id;
  const receiver = chat.users[1]._id;

  const formatTime = (utcDate) => {
    let date = new Date(utcDate);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    return `${hours}:${minutes}`;
  }

  const chatDiv = history.map(item => {
    if (item.speakerId === sender) {
      return (
        <div key={item.date} className="messageLine sender">
        <span className="textMessage">{item.message}</span>
        <span className="textTime">{formatTime(item.date)}</span>
      </div>
      )
    }

    if (item.speakerId === receiver) {
      return (
        <div key={item.date} className="messageLine receiver">
        <span className="textMessage">{item.message}</span>
        <span className="textTime">{formatTime(item.date)}</span>
      </div>
      )
    }
  })

  if (loading) {
    return <div> </div>;
  }


  return (
    <>
      <h1>SingleChat</h1>
      <div className="singleChatHeader">

      </div>
      {chatDiv}
    </>
  );
};

export default Chat;
