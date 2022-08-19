import axios from "axios";
import React from "react";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = JSON.stringify(email);
    const response = await axios.post(
      "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/auth/signup",
      { email, password },
      {
        "Content-Type": "application/json",
      }
    );

    const userInfo = response.data;
    console.log(userInfo);
  };

  return (
    <>
      <h2>로그인 폼입니다.</h2>
      <form action="/" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>로그인</button>
      </form>
    </>
  );
};

export default LoginForm;
