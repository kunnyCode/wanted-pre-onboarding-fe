import { useContext } from "react";
import { TodoStateContext } from "../../TodoContext";

const TodoHead = () => {
  const state = useContext(TodoStateContext);

  return (
    <>
      <div>총 개수 {state.length}</div>
      <div>남은 개수 {state.filter((item) => !item.isCompleted).length}</div>
      <br></br>
    </>
  );
};

export default TodoHead;
