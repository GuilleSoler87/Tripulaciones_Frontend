import React, { useContext, useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom";
import "./Chat.scss";
import { ChatContext } from "../../context/ChatContext/ChatState";
import { UserContext } from "../../context/UserContext/UserState";

let socket;

const Chat = () => {
  const { chat, history, getSingleChat, sendMessage } = useContext(ChatContext);
  const { user, getUser } = useContext(UserContext);
  const { _id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    message: "",
  });
  const messagesEndRef = useRef(null);

  useEffect(() => {
    getUser();
    getSingleChat(_id).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView();
  }, [history]);

  useEffect(() => {
    // socket = io("https://desafio-backend-production.up.railway.app/"); // CHANGE this with your server URL
    socket = io("http://localhost:8080/"); // CHANGE this with your server URL
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [_id]);

  useEffect(() => {
    const handler = () => {
      console.log("HANDLED!!!!!!!!!!!!!!!!!");
      getSingleChat(_id);
    };
    socket.on("chat update", handler);
    // console.log(socket);
    // socket.on("connect_error", (err) => {
    //   console.log(`connect_error due to ${err.message}`);
    // });
    socket.on("connect", () => {
      console.log(socket);
    });
    return () => {
      socket.on("chat update", handler);
    };
  }, []);

  if (loading) {
    return <div> </div>;
  }

  const getUserID = (chat) => {
    const usersArray = chat.users;
    const sender = usersArray.find(x => x.username === user.username);
    return sender._id;
  }
  const getReceiver = (chat) => {
    const usersArray = chat.users;
    const receiver = usersArray.find(x => x.username !== user.username);
    return receiver;
  }

  const sender = getUserID(chat)
  const receiver = getReceiver(chat)._id;

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

  const extractFilePathFromImage = (path) => {
    // const url = "https://desafio-backend-production.up.railway.app/"; //CHANGE to pertinent URL
    const url = "http://localhost:8080/"; //CHANGE to pertinent URL
    const match = path.match(/uploads[\\\/](.+)/);
    return match ? url + match[1].replace(/\\/g, '/') : null;
  }

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.message) {
      return null;
    }
    sendMessage(chat._id, sender, data);
    socket.emit("chat update", { chatId: chat._id });
    setData({
      message: "",
    });
  };

  const threadDiv = history.map((item, index) => {
    const isNewDay =
      index === 0 ||
      formatDate(history[index - 1].date) !== formatDate(item.date);
    const speakerId = item.speakerId === sender ? "sender" : "receiver";
    return (
      <>
        <React.Fragment key={index}>
          {isNewDay && (
            <div className="dateDisplay">
              <span>{formatDate(item.date)}</span>
            </div>
          )}
          <div className="messageLine" id={`${speakerId}`}>
            <span className="textMessage">{item.message}</span>
            <span className="textTime">{formatTime(item.date)}</span>
          </div>
        </React.Fragment>
      </>
    );
  });

  return (
    <>
      <div className="chatContainer">
        <div className="singleChatHeader">
          <div className="backArrow" onClick={() => navigate("/chatlist")}>
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <div className="receiverImage">
            {/* <img src={extractFilePathFromImage(user.img)} width={50} /> */}
          </div>
          <div className="receiverUsername">
            <span>{getReceiver(chat).username}</span>
          </div>
        </div>
        <div className="chatThread">{threadDiv}</div>
        <div ref={messagesEndRef} /> {/* Add this line */}
        <div className="sendMessage">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Message"
              value={data.message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              name="message"
            />
            <button type="submit" className="submitLR">
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
