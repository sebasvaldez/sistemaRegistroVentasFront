import { Route, Routes } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AuthContext } from "../contexts/Authcontext";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";

export const AppRoutes = () => {
  const { state } = useContext(AuthContext);
  const isLogged = state.isLogged;
  //   const isLogged= true;
  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoutes isLogged={isLogged}>
            <AuthLayout />
          </PublicRoutes>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <GeneralLayout />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
