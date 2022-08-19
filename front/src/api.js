import axios from "axios";

const apiUrl =
  "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/";

const post = async (endpoint, payload, tokenNeeded = false) => {
  // 헤더에 토큰이 필요한 경우 post요청 (todoList)
  if (tokenNeeded) {
    const { data } = await axios.post(apiUrl + endpoint, payload, {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    });
    return data;
  }

  const { data } = await axios.post(apiUrl + endpoint, payload, {
    "Content-Type": "application/json",
  });
  return data;
};

const get = async (endpoint) => {
  const { data } = await axios.get(apiUrl + endpoint, {
    "Content-Type": "application/json",
  });
  return data;
};

const put = async (endpoint, payload) => {
  const { data } = await axios.put(apiUrl + endpoint, payload, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  });
  return data;
};

const del = async (endpoint) => {
  const { data } = await axios.del(apiUrl + endpoint, {
    "Content-Type": "application/json",
  });
  return data;
};

export { get, post, put, del };
