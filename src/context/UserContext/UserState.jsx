import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: null,
  token: token ? token : "",
  chats: [],
};

const API_URL = "http://localhost:8080/";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (data) => {
    const res = await axios.post(API_URL + "users/login", data);
    if (res.data.token) {
      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const getUser = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "users/getuser", {
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: "GET_USER",
      payload: res.data,
    });
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "users/logout", {
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const getChatsFromUser = async (chatIdArray) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "chats/getchatsfromuser", {
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: "GET_CHATS_FROM_USER",
      payload: res.data,
    });
  };

  // const register = async (data) => {
  //   try {
  //     const res = await axios.post(API_URL + "users/create", data);
  //     dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  //   } catch (error) {
  //     if (error.res) {
  //       dispatch({ type: "REGISTER_FAIL", payload: error.res.data });
  //     } else if (error.request) {
  //       dispatch({ type: "REGISTER_FAIL", payload: "Email address already in use" });
  //     } else {
  //       dispatch({ type: "REGISTER_FAIL", payload: error.message });
  //     }
  //   }
  // };

  const clearState = () => {
    dispatch({
      type: "CLEAR_STATE",
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        chats: state.chats,
        login,
        getUser,
        getChatsFromUser,
        logout,
        // clearState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
