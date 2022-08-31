import axios from "axios";

const apiUrl = "https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com/";

const post = async (endpoint, payload, tokenNeeded = false) => {
  // 헤더에 토큰이 필요한 경우 post요청 (todoList)
  if (tokenNeeded) {
    let todo = { todo: payload };
    todo = JSON.stringify(todo);
    const { data } = await axios.post(apiUrl + endpoint, todo, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        "Content-Type": "application/json",
      },
    });
    return data;
  }

  const { data } = await axios.post(apiUrl + endpoint, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

const get = async (endpoint) => {
  const { data } = await axios.get(apiUrl + endpoint, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};

const put = async (endpoint, payload) => {
  const todo = JSON.stringify(payload);
  const { data } = await axios.put(apiUrl + endpoint, todo, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};

const del = async (endpoint) => {
  const { data } = await axios.delete(apiUrl + endpoint, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return data;
};

export { get, post, put, del };
