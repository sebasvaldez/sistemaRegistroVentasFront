import { Route, Routes } from "react-router-dom";
import { DashboardAdminPage } from "../pages/DashboardAdminPage";
import { DashboardSellerPage } from "../pages/DashboardSellerPage.jsx";
import { RegisterPage } from "../pages/RegisterPage";

export const GeneralLayout = ({ rol }) => {
  if (rol == "admin") {
    return (
      <Routes>
        <Route path="/dashboard/admin" element={<DashboardAdminPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
      </Routes>
    );
  } else if (rol == "seller") {
    return (
      <Routes>
        <Route path="/dashboard/seller" element={<DashboardSellerPage />} />
      </Routes>
    );
  } else {
    return <h1>Usuario no autorizado, su rol no está definido.</h1>;
  }

  // return (
  //   <Routes>
  //     <Route path="/dashboard/admin" element={<DashboardAdminPage />} />
  //     <Route path="/dashboard/seller" element={<DashboardSellerPage />} />
  //   </Routes>
  // )
};
