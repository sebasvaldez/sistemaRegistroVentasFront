import {  Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { AuthContext } from "../contexts/Authcontext";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AppRoutes = () => {
  const { state } = useContext(AuthContext);

  const isLogged = state.isLogged;
const rol= state.user.rol;

  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />

      <Route
      path="*"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <GeneralLayout rol={rol}/>
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};
