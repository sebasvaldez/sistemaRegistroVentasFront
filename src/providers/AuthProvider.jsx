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
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkToken = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setUserData({});
      setLoading(false);
      setIsAuthenticated(false);
      return;
    }
    try {
      const { data } = await verifyTokenRequest();
      setLoading(false);
      setIsAuthenticated(true);
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
        setUserData(data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error);
      setUserData({});
      setIsAuthenticated(false);
    }
  };

  const login = async (user) => {
    try {
      const { data } = await loginRequest(user);
      setUserData(data);
      setLoading(false);
      setIsAuthenticated(true);

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

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{ state, login, loading, checkToken, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
