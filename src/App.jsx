import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UsersPage from "./pages/UsersPage";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<h1>Listado de ventas</h1>} />
          <Route path="/add-sale" element={<h1>Agregar nueva venta</h1>} />
          <Route path="/sales/:id" element={<h1>Actualiza una venta</h1>} />
          <Route path="profile" element={<h1>Perfil del usuario</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
