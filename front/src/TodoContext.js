import { useReducer, createContext } from "react";
import * as Api from "./api";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.data);
    case "GET":
      state = action.data;
      return state;
    case "PUT":
      return;
    case "DELETE":
      return;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const createItem = async (dispatch, content) => {
  try {
    const res = await Api.post("todos", String(content), true);
    dispatch({ type: "CREATE", data: res });
  } catch (e) {
    alert(`에러 내용: ${e.response.data.message}`);
  }
};

export const getList = async (dispatch) => {
  try {
    const res = await Api.get("todos");
    dispatch({ type: "GET", data: res });
  } catch (e) {
    alert(`에러 내용: ${e.response.data.message}`);
  }
};

export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
