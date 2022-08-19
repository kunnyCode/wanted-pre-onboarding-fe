import React from "react";

const TodoItem = ({ id, todo, isCompleted, userId }) => {
  return (
    <>
      <div style={{ border: "1px solid red" }}>
        <div>아이디{id}</div>
        <div>내용{todo}</div>
        <div>확인여부{isCompleted}</div>
        <div>유저아이디{userId}</div>
      </div>
    </>
  );
};

export default TodoItem;
