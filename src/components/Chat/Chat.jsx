import React, { useContext, useEffect, useState, useRef } from "react";
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
  }, [history]);

  // const sender = chat.users[0]._id;
  // const receiver = chat.users[1]._id;
  const sender = "647b38a970447a0d33b3188b";
  const receiver = "647a9c3b85940b5bc2e37356";

  const formatTime = (utcDate) => {
    let date = new Date(utcDate);
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    return `${hours}:${minutes}`;
  };

  const formatDate = (utcDate) => {
    const date = new Date(utcDate);
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[date.getUTCMonth()];
    return `${day} ${month} ${year}`;
  };

  const threadDiv = history.map((item, index) => {
    const isNewDay = index === 0 || formatDate(history[index - 1].date) !== formatDate(item.date);
    const speakerId = item.speakerId === sender ? "sender" : "receiver";
    return (
      <>
        {isNewDay && (
          <div key={index} className="dateDisplay">
            <span>{formatDate(item.date)}</span>
          </div>
        )}
        <div key={item.date} className="messageLine" id={`${speakerId}`}>
          <span className="textMessage">{item.message}</span>
          <span className="textTime">{formatTime(item.date)}</span>
        </div>
      </>
    );
  });

  if (loading) {
    return <div> </div>;
  }

  return (
    <>
      <div className="chatContainer">
        <div className="singleChatHeader">
          <div className="backArrow">
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="receiverImage">
            <span className="material-symbols-outlined">image</span>
          </div>
          <div className="receiverUsername">
            <span>Username</span>
          </div>
        </div>
        <div className="chatThread">{threadDiv}</div>
        <div className="sendMessage"></div>
      </div>
    </>
  );
};

export default Chat;
