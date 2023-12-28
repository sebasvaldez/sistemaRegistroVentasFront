import { Form, Button } from "react-bootstrap";

export const LoginForm = ({loginClick}) => {
  const loginChange = () => {
    console.log("loginChange");
  };

  
  return (
    <form action="" className="register-form ">
      <h3>Login de usuarios</h3>

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

      <Button className="btn btn-success mt-3" onClick={loginClick()}>Entrar</Button>
    </form>
  );
};
