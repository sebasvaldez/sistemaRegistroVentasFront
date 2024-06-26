import { AuthContext } from "../contexts/Authcontext";
import {
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
  registerRequest,
  axiosConnection,
} from "../config/axiosConnection";
import { useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { types } from "../types/types";
import Cookies from "js-cookie";

const initialValues = {
  user: {
    id: "",
    email: "",
    name: "",
    rol: "",
    username: "",
  },
  isLogged: false,
  token: "",
  message: "",
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);
  const [loading, setLoading] = useState(true);

  const login = async (user) => {
    try {
      const { data } = await loginRequest(user);
      setLoading(false);
      console.log(data);
      const objectStorage = {
        user: {
          id: data.id,
          email: data.email,
          name: data.name,
          username: data.username,
          rol: data.rol,
        },
        isLogged: true,
        token: data.token,
      };
      console.log(Cookies);
      Cookies.set("token", data.token);
      dispatch({
        type: types.auth.login,
        payload: objectStorage,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.auth.error,
        payload: error.response.data.message,
      });
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      Cookies.remove("token");
      dispatch({
        type: types.auth.logout,
        payload: initialValues,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkToken = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await verifyTokenRequest(cookies.token);

      if (!data) {
        setLoading(false);
        return;
      }
      setLoading(false);

      const objectStorage = {
        user: {
          id: data.id,
          email: data.email,
          username: data.username,
          rol: data.rol,
        },
        isLogged: true,
        token: cookies.token,
      };
      dispatch({
        type: types.auth.login,
        payload: objectStorage,
      });
      if (data) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ state, login, loading, logout, checkToken }}>
      {children}
    </AuthContext.Provider>
  );
};
