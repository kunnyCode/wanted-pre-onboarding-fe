import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../../TodoContext";
import {
  TodoListBlock,
  TodoListText,
  TodoListTitle,
} from "../../style/TodoStyle";

const TodoList = () => {
  const state = useContext(TodoStateContext);

  if (state[0].id === "init") {
    return <div style={{ margin: "auto", fontSize: "48px" }}>로딩중...</div>;
  }

  return (
    <TodoListBlock>
      {state.length === 0 ? (
        <div style={{ margin: "auto" }}>
          <img alt="empty" src="/empty.jpg" />
          <TodoListTitle>리스트가 비어있습니다.</TodoListTitle>
          <TodoListText style={{ textAlign: "center" }}>
            리스트를 채워주세요!
          </TodoListText>
          <TodoListText>👇👇👇👇👇</TodoListText>
        </div>
      ) : (
        state.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
          />
        ))
      )}
    </TodoListBlock>
  );
};

export default TodoList;
