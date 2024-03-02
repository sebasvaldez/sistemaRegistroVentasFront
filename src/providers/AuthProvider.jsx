import { AuthContext } from "../contexts/Authcontext";
import { axiosConnection } from "../config/axiosConnection";
import {useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";


const initialValues = {
  user: {},
  isLogged: false,
  token: "",
  message: "",
};
export const AuthProvider = ({ children }) => {

  const [state, dispatch]= useReducer(AuthReducer, initialValues)

  return <AuthContext.Provider value={{state}}>
    {children}
    </AuthContext.Provider>;
};