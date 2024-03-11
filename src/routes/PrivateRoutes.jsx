import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Authcontext";

export const PrivateRoutes = ({ children, isLogged }) => {
  const { loading } = useContext(AuthContext);


  if (loading) {
    return <h1>Cargando...</h1>;
  }


  if (!isLogged && !loading) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!isLogged) {
    return <Navigate to="/auth/login" replace />;
  } else {
    return children;
  }
};
