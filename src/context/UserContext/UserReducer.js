const users = (state, action) => {
  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
        user: action.payload.user
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        message: action.payload
      };

    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        message: "",
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
        message: "",
      };

    case "LOGOUT_ERROR":
      return {
        ...state,
        message: action.payload
      };

    case "GET_CHATS_FROM_USER":
      return {
        ...state,
        chats: action.payload,
      };


    default:
      return state;
  }
};

export default users;
