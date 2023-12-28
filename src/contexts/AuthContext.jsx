import { createContext, useState } from "react";
import { registerRequest } from "../config/axiosUsers";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signUp = async (user) => {
    try {
      const { data } = await registerRequest(user);
      setUser(data);
      console.log(data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
