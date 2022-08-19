import { useState } from "react";
import * as Api from "../../api";
import { validateEmail } from "../../utils";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setIsRegisterPage }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 8;
  const isLoginFormValid = isEmailValid && isPasswordValid;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await Api.post("/auth/signin", data);
      const userToken = res.access_token;
      localStorage.setItem("userToken", userToken);
      navigate("/todo");
    } catch (e) {
      alert(`에러 내용: ${e.response.data.message}`);
    }
  };

  return (
    <div>
      <h2>로그인 폼입니다.</h2>
      <form action="/" onSubmit={handleLoginSubmit}>
        <label id="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <label id="pw">비밀번호</label>
        <input
          id="pw"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="submit" disabled={!isLoginFormValid}>
          로그인
        </button>
        <button type="button" onClick={() => setIsRegisterPage(true)}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
