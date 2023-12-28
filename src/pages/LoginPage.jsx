import { useEffect } from "react";
import { LoginForm } from "../components/forms/LoginForm";
import { axiosUsers } from "../config/axiosUsers";

const LoginPage = () => {



  useEffect(() => {
    getUsers();
  }, [])
  



 const getUsers= async ()=>{
    const resp=await axiosUsers.get("/sales");
    console.log(resp);
  }



  const loginClick = (user) => {
    console.log(user);
  };

  return <LoginForm loginClick={(user) => loginClick(user)} />;
};

export default LoginPage;
