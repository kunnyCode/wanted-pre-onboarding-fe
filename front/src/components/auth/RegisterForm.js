import { useState } from "react";
import * as Api from "../../api";
import { validateEmail } from "../../utils";

const RegisterForm = ({ setIsRegisterPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.length >= 8;
  const isRegisterFormValid =
    isEmailValid && isPasswordValid && password === checkedPassword;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await Api.post("/auth/signup", data);
      const userToken = res.access_token;
      localStorage.setItem("userToken", userToken);
      alert("회원가입 성공!");
      setIsRegisterPage(false);
    } catch (e) {
      alert(`에러 내용: ${e.response.data.message}`);
    }
  };

  return (
    <div>
      <h2>회원가입 폼입니다.</h2>
      <form action="/" onSubmit={handleRegisterSubmit}>
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
        <label id="cpw">비밀번호 확인</label>
        <input
          id="cpw"
          type="password"
          value={checkedPassword}
          placeholder="비밀번호를 한번더 입력해주세요."
          required
          onChange={(e) => setCheckedPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <button type="button" onClick={() => setIsRegisterPage(false)}>
          뒤로가기
        </button>
        <button type="submit" disabled={!isRegisterFormValid}>
          회원가입하기
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
