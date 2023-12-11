import { LoginForm } from "../components/forms/LoginForm";

const LoginPage = () => {

  const loginClick = (user) => {
    console.log(user);
  };




  return <LoginForm loginClick={(user)=>loginClick(user)}/>;
};

export default LoginPage;
