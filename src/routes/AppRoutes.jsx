import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { PublicRoutes } from "./PublicRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { AuthContext } from "../contexts/Authcontext";
import { AdminLayout } from "../layouts/AdminLayout";
import { AuthLayout } from "../layouts/AuthLayout";
import { SellerLayout } from "../layouts/SellerLayout";
import { NotFound } from "../components/notFound/NotFound";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = () => {
  const { state } = useContext(AuthContext);

  const isLogged = state.isLogged;
  console.log(isLogged)
  const rol=state.user.rol;

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={<LoginPage />}
      />
      <Route
        path="/dashboard/admin/*"
        element={
          <PrivateRoutes isLogged={isLogged && rol.includes("admin")}>
            <AdminLayout />
          </PrivateRoutes>
        }
      />
      <Route path="/dashboard/seller/*" element={
        <PrivateRoutes isLogged={isLogged && rol.includes("seller")}>
          <SellerLayout />
        </PrivateRoutes>
      } />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
