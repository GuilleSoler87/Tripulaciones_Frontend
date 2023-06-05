import React, { createContext, useReducer } from "react";
import ChatReducer from "./ChatReducer";
import axios from "axios";

const API_URL = "http://localhost:8080/";

const initialState = {
  chat: null,
  history: [],
};

export const ChatContext = createContext(initialState);

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ChatReducer, initialState);

  const getSingleChat = async (_id) => {
    try {
      const res = await axios.get(API_URL + "chats/getone/" + _id);
      dispatch({
        type: "GET_SINGLE_CHAT",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);      
    }
  };

  const sendMessage = async (chatId, speakerId, message, token) => {
    try {
      const url = API_URL + "chats/update/" + chatId;
      const body = {
        speakerId: speakerId,
        message: message.message, // HTML gives an object: {message: ...}
      };
      // const config = {
      //   headers: {
      //     Authorization: token
      //   }
      // };

      // const res = await axios.put(url, body, config);
      const res = await axios.put(url, body);
      // dispatch({
      //   type: "SEND_MESSAGE",
      //   payload: res.data,
      // });
    } catch (error) {
      console.error(error);      
    }
  };


  return (
    <ChatContext.Provider
      value={{
        chat: state.chat,
        history: state.history,
        getSingleChat,
        sendMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
