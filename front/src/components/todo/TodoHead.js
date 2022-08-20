import { useContext } from "react";
import { HeadBlock } from "../../style/GlobalStyle";
import { TodoStateContext } from "../../TodoContext";

const TodoHead = () => {
  const state = useContext(TodoStateContext);

  return (
    <HeadBlock>
      <h2>Todo List</h2>
      <div className="total">총 개수 {state.length}</div>
      <div className="tasks-left">
        남은 개수 {state.filter((item) => !item.isCompleted).length}
      </div>
      <br></br>
    </HeadBlock>
  );
};

export default TodoHead;
