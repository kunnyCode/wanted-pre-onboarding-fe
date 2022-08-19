import React from "react";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <>
      <div>투두 페이지입니다.</div>
      <button onClick={logout}>로그아웃</button>
    </>
  );
};

export default TodoPage;
