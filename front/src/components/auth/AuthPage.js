import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isRegisterPage, setIsRegisterPage] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("userToken") &&
      localStorage.getItem("userToken") !== "undefined"
    ) {
      navigate("/todo");
      return;
    }
  }, []);

  return (
    <>
      {isRegisterPage ? (
        <RegisterForm setIsRegisterPage={setIsRegisterPage} />
      ) : (
        <LoginForm setIsRegisterPage={setIsRegisterPage} />
      )}
    </>
  );
};

export default AuthPage;
