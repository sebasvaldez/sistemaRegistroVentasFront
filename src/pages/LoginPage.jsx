
import { LoginForm } from "../components/forms/LoginForm";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {

  const {signIn, errors}=useAuth();




  const loginClick = (user) => {
    signIn(user);
  };

  return <LoginForm loginClick={loginClick} errors={{errors}} />;
};

export default LoginPage;
