import { createContext, useState, useEffect } from "react";
import { registerRequest, loginRequest } from "../config/axiosUsers";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const { data } = await registerRequest(user);
      setUser(data);
      console.log(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      if (error) {
        setErrors(error.response.data);
      }
    }
  };

  const signIn = async (user) => {
    try {
      const { data } = await loginRequest(user);
      setUser(data);
      setIsAuthenticated(true);
      console.log(data);
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [errors]);

  //console.log(errors)

  return (
    <AuthContext.Provider
      value={{ user, signUp, signIn, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};
