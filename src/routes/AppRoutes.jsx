import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { AuthContext } from "../contexts/Authcontext";
import { AuthLayout } from "../layouts/AuthLayout";
import { GeneralLayout } from "../layouts/GeneralLayout";
import { NotFound } from "../components/notFound/NotFound";

export const AppRoutes = () => {
  const { state } = useContext(AuthContext);

  const isLogged = state.isLogged;
  const rol = state.user.rol;

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoutes>
            <AuthLayout />
          </PublicRoutes>
        }
      />
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoutes isLogged={isLogged}>
            <GeneralLayout rol={rol} />
          </PrivateRoutes>
        }
      />
      <Route
      path="*" element={<NotFound />}
      />
    </Routes>
  );
};
