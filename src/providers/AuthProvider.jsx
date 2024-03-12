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
  },
  isLogged: false,
  token: "",
  message: "",
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialValues);
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setLoading(false);
      return;
    }
    try {
      const { data } = await verifyTokenRequest();
      setLoading(false);
      axiosConnection.interceptors.request.use((config) => {
        config.headers = {
          ...config.headers,
          token: cookies.token,
        };
        return config;
      });
      const objectStorage = {
        user: {
          id: data.id,
          email: data.email,
          name: data.username,
          rol: data.rol,
        },
        isLogged: true,
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

  const login = async (user) => {
    try {
      const { data } = await loginRequest(user);
      setLoading(false);

      const objectStorage = {
        user: {
          id: data.id,
          email: data.email,
          name: data.username,
          rol: data.rol,
        },
        isLogged: true,
      };

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

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ state, login, loading, checkToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
