import React, { useContext, useState } from "react";
import { editItem, TodoDispatchContext } from "../../TodoContext";

const TodoItem = ({ id, todo, isCompleted, userId }) => {
  const [openEditFrom, setOpenEidtForm] = useState(false);
  const [todoContent, setTodoContent] = useState(todo);
  const [todoIsCompleted, setTodoIsCompleted] = useState(isCompleted);

  const dispatch = useContext(TodoDispatchContext);

  const handleEditItem = () => {
    const idNum = id;
    const content = { todo: todoContent, isCompleted: todoIsCompleted };
    editItem(dispatch, content, idNum);
  };

  return (
    <>
      {openEditFrom ? (
        <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid red" }}>
            <div>아이디{id}</div>
            <form action="/">
              <input
                type="text"
                value={todoContent}
                onChange={(e) => setTodoContent(e.target.value)}
              />
            </form>
            <div>유저아이디{userId}</div>
            <div>확인여부: {isCompleted ? "완료" : "미완료"}</div>
          </div>
          <div style={{ border: "1px solid red" }}>
            <button
              onClick={() => {
                setOpenEidtForm(false);
                handleEditItem();
              }}
            >
              변경
            </button>
            <button
              onClick={() => {
                setOpenEidtForm((prev) => !prev);
                setTodoContent(todo);
              }}
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid red" }}>
            <button
              onClick={() => {
                setTodoIsCompleted((prev) => !prev);
                handleEditItem();
              }}
            >
              {todoIsCompleted ? "✔︎체크한상태✔︎" : "노체크상태"}
            </button>
            <div>아이디{id}</div>
            <div>내용{todo}</div>
            <div>확인여부: {isCompleted ? "완료" : "미완료"}</div>
            <div>유저아이디{userId}</div>
          </div>
          <div style={{ border: "1px solid red" }}>
            <button onClick={() => setOpenEidtForm((prev) => !prev)}>
              수정
            </button>
            <button>삭제</button>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(TodoItem);
