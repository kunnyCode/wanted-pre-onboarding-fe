import React, { useState, useContext } from "react";
import { createItem, TodoDispatchContext } from "../../TodoContext";

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const dispatch = useContext(TodoDispatchContext);

  const handelCreateItem = (e) => {
    e.preventDefault();
    if (content.length <= 0) return alert("할 일을 입력해주세요!");
    createItem(dispatch, content);
    setContent("");
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div>
          <form action="/" onSubmit={handelCreateItem}>
            <input
              placeholder="할 일을 입력해주세요"
              autoFocus
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button type="button" onClick={() => setOpen(false)}>
              취소
            </button>
            <button type="submit">생성</button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen(true)}>할일생성</button>
      <br />
    </>
  );
};

export default TodoCreate;
