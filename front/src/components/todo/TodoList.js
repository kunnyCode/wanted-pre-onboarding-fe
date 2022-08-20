import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../../TodoContext";
import { TodoListBlock } from "../../style/TodoStyle";

const TodoList = () => {
  const state = useContext(TodoStateContext);

  return (
    <TodoListBlock>
      <div>
        {state.length === 0 ? (
          <div style={{ display: "flex" }}>
            <div style={{ border: "1px solid red" }}>
              <h3>리스트가 암것도 없습니다.</h3>
            </div>
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
      </div>
    </TodoListBlock>
  );
};

export default TodoList;
