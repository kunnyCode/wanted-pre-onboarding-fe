import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoDispatchContext, getList } from "../../TodoContext";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";

const TodoPage = () => {
  const navigate = useNavigate();
  const dispatch = useContext(TodoDispatchContext);

  const logout = () => {
    localStorage.removeItem("userToken");
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  useEffect(() => {
    getList(dispatch);
  }, []);

  return (
    <>
      <h2>투두 페이지입니다.</h2>
      <TodoHead />
      <TodoList />
      <TodoCreate />
      <button onClick={logout}>로그아웃</button>
      <button onClick={() => getList(dispatch)}>리스트 다시 불러오기</button>
    </>
  );
};

export default TodoPage;
