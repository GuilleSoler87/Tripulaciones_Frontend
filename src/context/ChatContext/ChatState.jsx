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


  return (
    <ChatContext.Provider
      value={{
        chat: state.chat,
        history: state.history,
        getSingleChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
