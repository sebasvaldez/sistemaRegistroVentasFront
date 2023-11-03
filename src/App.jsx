import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Sistema ventas Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/sales" element={<h1>Listado de ventas</h1>} />
        <Route path="/add-sale" element={<h1>Agregar nueva venta</h1>} />
        <Route path="/sales/:id" element={<h1>detalle de 1 venta</h1>} />
        <Route path="profile" element={<h1>perfil del usuario</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
