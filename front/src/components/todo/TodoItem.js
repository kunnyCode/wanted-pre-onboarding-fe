import React, { useContext, useState } from "react";
import {
  CheckCircle,
  Remove,
  Edit,
  Text,
  TodoItemBlock,
  EditForm,
  EditInput,
  EditBlock,
  EditBtn,
  EditCancel,
} from "../../style/TodoStyle";
import {
  MdDone,
  MdDelete,
  MdEdit,
  MdCheckCircle,
  MdCancel,
} from "react-icons/md";
import { deleteItem, editItem, TodoDispatchContext } from "../../TodoContext";

const TodoItem = ({ id, todo, isCompleted, userId }) => {
  const [openEditFrom, setOpenEidtForm] = useState(false);
  const [todoContent, setTodoContent] = useState(todo);

  const dispatch = useContext(TodoDispatchContext);

  const handleEditCheck = () => {
    const content = { todo: todoContent, isCompleted: !isCompleted };
    handleEditItem(content);
  };

  const handleEditForm = () => {
    const content = { todo: todoContent, isCompleted: isCompleted };
    handleEditItem(content);
  };

  const handleEditItem = (content) => {
    const idNum = id;
    editItem(dispatch, content, idNum);
  };

  const handleDeleteItem = () => {
    const idNum = id;
    deleteItem(dispatch, idNum);
  };

  return (
    <TodoItemBlock>
      {openEditFrom ? (
        <>
          <EditForm action="/">
            <EditInput
              type="text"
              value={todoContent}
              onChange={(e) => setTodoContent(e.target.value)}
            />
          </EditForm>
          <EditBtn
            onClick={() => {
              setOpenEidtForm(false);
              handleEditForm();
            }}
          >
            <MdCheckCircle />
          </EditBtn>
          <EditCancel
            onClick={() => {
              setOpenEidtForm((prev) => !prev);
              setTodoContent(todo);
            }}
          >
            <MdCancel />
          </EditCancel>
        </>
      ) : (
        <>
          <CheckCircle onClick={handleEditCheck} done={isCompleted}>
            {isCompleted && <MdDone />}
          </CheckCircle>
          <Text done={isCompleted}>{todo}</Text>
          {isCompleted || (
            <Edit
              done={isCompleted}
              onClick={() => setOpenEidtForm((prev) => !prev)}
            >
              <MdEdit />
            </Edit>
          )}
          <Remove onClick={handleDeleteItem}>
            <MdDelete />
          </Remove>
        </>
      )}
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
