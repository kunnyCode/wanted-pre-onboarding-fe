import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageBlock } from "../../style/GlobalStyle";
import { BottomBtn, Btn } from "../../style/TodoStyle";
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
    if (
      !localStorage.getItem("userToken") ||
      localStorage.getItem("userToken") === "undefined"
    ) {
      navigate("/");
      return;
    }

    getList(dispatch);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <PageBlock>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </PageBlock>
      <BottomBtn>
        <Btn
          className="bot"
          onClick={() => {
            // getList(dispatch);
            alert("리스트를 다시 불러옵니다.");
            navigate("/", { replace: true });
          }}
        >
          리스트 다시 불러오기
        </Btn>
        <Btn className="logoutBtn" onClick={logout}>
          로그아웃
        </Btn>
      </BottomBtn>
    </>
  );
};

export default TodoPage;
