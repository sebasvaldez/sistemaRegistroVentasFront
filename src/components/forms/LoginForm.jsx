import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { AlertsErrors } from "../ui/AlertsErrors";
import { Link } from "react-router-dom";

export const LoginForm = ({ loginClick, errors }) => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const loginChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form action="" className="register-form ">
      <h3>Login de usuarios</h3>
      {errors.errors.map((error, i) => (
        //<AlertsErrors errors={error} />
        <div key={i}>
          <AlertsErrors errorText={error} />
        </div>
      ))}
      <Form.Control
        type="email"
        placeholder="Correo electrónico"
        onChange={loginChange}
        id="email"
      />

      <Form.Control
        type="password"
        placeholder="Contraseña"
        onChange={loginChange}
        id="password"
      />

      <Button
        className="btn btn-success mt-3"
        onClick={() => loginClick(loginUser)}
      >
        Entrar
      </Button>

      <p className=" pt-5">
        No tienes una cuenta?
        <Link to="/register" className=" text-decoration-none">
          Click aqui
        </Link>
      </p>
    </form>
  );
};
