const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
      };
 
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "GET_CHATS_FROM_USER":
      return {
        ...state,
        chats: action.payload,
      };
      
      
    case "REGISTER_SUCCESS":
      console.log("Success!!!");
      return {
        ...state,
        message: action.payload.message,
      };
    case "REGISTER_FAIL":
      console.log("this is the error", action.payload);
      return {
        ...state,
        message: action.payload,
      };
    case "CLEAR_STATE":
      return {
        token: "",
        user: null,
        message: "",
        orders: [],
      };
    default:
      return state;
  }
};

export default users;
