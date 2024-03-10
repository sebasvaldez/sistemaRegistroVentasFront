import { Route, Routes } from "react-router-dom";
import { DashboardAdminPage } from "../pages/DashboardAdminPage";
import { DashboardSellerPage } from "../pages/DashboardSellerPage.jsx";
import { RegisterPage } from "../pages/RegisterPage";

export const GeneralLayout = ({ rol }) => {
  if (rol == "admin") {
    return (
      <Routes>
        <Route path="/admin" element={<DashboardAdminPage />} />
        <Route path="/admin/register" element={<RegisterPage />} />
      </Routes>
    );
  } else if (rol == "seller") {
    return (
      <Routes>
        <Route path="/seller" element={<DashboardSellerPage />} />
      </Routes>
    );
  }

};
