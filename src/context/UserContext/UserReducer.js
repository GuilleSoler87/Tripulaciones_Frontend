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

    case "GET_USER_INFO":
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
        _grecaptcha: null,
        message: "",
      };

    case "LOGOUT_ERROR":
      return {
        ...state,
        message: action.payload
      };

    case "GET_CHATS_FROM_USER":
      const sortedChats = action.payload.sort((a, b) =>
        a.updatedAt < b.updatedAt ? 1 : -1
      );
      return {
        ...state,
        chats: sortedChats,
      };


    default:
      return state;
  }
};

export default users;
