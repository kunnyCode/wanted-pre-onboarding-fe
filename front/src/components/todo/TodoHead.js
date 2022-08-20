import { useContext } from "react";
import { HeadBlock } from "../../style/GlobalStyle";
import { TodoStateContext } from "../../TodoContext";

const TodoHead = () => {
  const state = useContext(TodoStateContext);

  return (
    <HeadBlock>
      <h2>Todo List</h2>
      <div className="total">
        총 개수 {state[0]?.id !== "init" && state.length}
      </div>
      <div className="tasks-left">
        남은 개수{" "}
        {state[0]?.id !== "init" &&
          state.filter((item) => !item.isCompleted).length}
      </div>
      <br></br>
    </HeadBlock>
  );
};

export default TodoHead;
