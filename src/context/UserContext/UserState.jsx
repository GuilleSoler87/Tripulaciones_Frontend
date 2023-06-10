import axios from "axios";
import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: token ? token : null,
  user: user ? user : null,
  users: [],
  chats: [],
  message: "",
  logoutMessage: ""
};

// const API_URL = "https://desafio-backend-production.up.railway.app";
const API_URL = "http://localhost:8080";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user, captchaValidate) => {
    try {
      const res = await axios.post(API_URL + "/users/login", user);

      // Guardamos el token en el estado
      dispatch({
        type: "LOGIN",
        payload: res.data
      });

      // Guardamos el token en el localStorage si captchaValidate es verdadero
      if (captchaValidate && res.data && res.data.token) {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
      if (captchaValidate && res.data && res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response.data.message
      });
    }
  };

  const getUser = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.get(API_URL + "/users/getUser", {
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "GET_USER_INFO",
        payload: res.data
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "GET_USER_INFO_ERROR",
        payload: "Error al obtener la información del usuario."
      });
    }
  };


  const logout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const res = await axios.delete(API_URL + "/users/logout", {
        headers: {
          Authorization: token
        }
      });
      dispatch({
        type: "LOGOUT",
        payload: res.data
      });
      if (res.data) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("_grecaptcha");
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: "LOGOUT_ERROR",
        payload: "Error al cerrar sesión."
      });
    }
  };

  const getChatsFromUser = async (chatIdArray) => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(API_URL + "chats/getchatsfromuser");
    const res = await axios.get(API_URL + "/chats/getchatsfromuser", {
      headers: {
        Authorization: token,
      },
    });
    dispatch({
      type: "GET_CHATS_FROM_USER",
      payload: res.data,
    });
   
  };
  
  const turnOffMessage = () => {
    dispatch({
      type: "TURN_OFF_MESSAGE",
    })
  };

  const recoverPassword = async (email) => {
    try {
      const res = await axios.get(API_URL + `/users/recoverPassword/${email}`);
      dispatch({
        type: "RECOVER_PASSWORD_SUCCESS",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: "RECOVER_PASSWORD_ERROR",
        payload: error.response.data.message,
      });
    }
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



  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        message: state.message,
        logoutMessage: state.logoutMessage,
        chats: state.chats,
        login,
        getUser,
        getChatsFromUser,
        logout,
        turnOffMessage,
        recoverPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
