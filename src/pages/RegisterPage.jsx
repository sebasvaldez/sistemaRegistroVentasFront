import { RegisterForm } from "../components/forms/RegisterForm";

const RegisterPage = () => {
  const registerClick = (newUser) => {
    console.log(newUser);
  };

  return <RegisterForm registerClick={(value) => registerClick(value)} />;
};

export default RegisterPage;
