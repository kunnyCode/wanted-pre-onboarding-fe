import React, { useState, useContext } from "react";
import { createItem, TodoDispatchContext } from "../../TodoContext";
import { MdAdd } from "react-icons/md";
import {
  Input,
  InsertFormPostioner,
  InsertFrom,
  CircleButton,
  CreateBtnBlock,
  Btn,
} from "../../style/TodoStyle";

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
        <InsertFormPostioner>
          <InsertFrom action="/" onSubmit={handelCreateItem}>
            <Input
              placeholder="할 일을 입력해주세요"
              autoFocus
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <CreateBtnBlock>
              <Btn
                className="del-btn"
                type="button"
                onClick={() => {
                  setOpen(false);
                  setContent("");
                }}
              >
                취소
              </Btn>
              <Btn type="submit">생성</Btn>
            </CreateBtnBlock>
          </InsertFrom>
        </InsertFormPostioner>
      )}
      <CircleButton
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      >
        {" "}
        <MdAdd />
      </CircleButton>
      <br />
    </>
  );
};

export default React.memo(TodoCreate);
