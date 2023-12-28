import { useEffect } from "react";
import { RegisterForm } from "../components/forms/RegisterForm";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const { signUp, isAuthenticated } = useAuth();

  const navigate= useNavigate();

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/users");
    }
  },[isAuthenticated])


  const registerClick = async (newUser) => {
    signUp(newUser);
    
    // console.log(data);
  };


 
  return <RegisterForm registerClick={(value) => registerClick(value)} />;
};

export default RegisterPage;
