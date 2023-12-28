import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export const RegisterForm = ({ registerClick }) => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    rol: "",
    picture: "",
    password: "",
  });

  const registerChange = (e) => {
    setNewUser({
      ...newUser, 
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="container-register-form">
      <form action="" className="register-form ">
        <h3>Registro de vendedores</h3>

        <Form.Control
          type="text"
          placeholder="Nombre de usuario"
          onChange={registerChange}
          id="username"
        />

        <Form.Control
          type="email"
          placeholder="Correo electrónico"
          onChange={registerChange}
          id="email"
        />

        <Form.Control
          type="text"
          placeholder="Rol de usuario"
          onChange={registerChange}
          id="rol"
        />

        <Form.Control
          type="text"
          placeholder="Subir una imagen"
          onChange={registerChange}
          id="picture"
        />

        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={registerChange}
          id="password"
        />

        <Button
          className="btn btn-success mt-3 p-1"
          onClick={() => registerClick(newUser)}
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};
