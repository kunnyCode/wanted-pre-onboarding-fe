import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoStateContext } from "../../TodoContext";

const TodoList = () => {
  const state = useContext(TodoStateContext);

  return (
    <>
      <div>투두 리스트</div>
      <div>
        {state.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            todo={item.todo}
            isCompleted={item.isCompleted}
            userId={item.userId}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
