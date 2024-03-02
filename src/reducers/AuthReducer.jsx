import { types } from "../types/types.js";

export const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case types.auth.Login:
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        token: action.payload.action,
      };
    case types.auth.Logout:
      return {
        ...state,
        user: null,
        isLogged: false,
        token: action.payload.action,
      };
    case types.auth.errorMsg:
      return {
        ...state,
        message: action.payload.msg,
      };

    default:
      return state;
  }
};
