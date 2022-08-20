import { useState } from "react";
import * as Api from "../../api";
import { validateEmail } from "../../utils";
import { useNavigate } from "react-router-dom";
import { HeadBlock, PageBlock } from "../../style/GlobalStyle";
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  LoginBtn,
  RBtnBox,
  RegisterBtn,
} from "../../style/AuthStyle";

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
      if (e.response.data.message === "Unauthorized") {
        alert(`에러 내용: 접근권한 없음. 비밀번호를 다시 확인해주세요.`);
      } else {
        alert(`에러 내용: ${e.response.data.message}`);
      }
    }
  };

  return (
    <PageBlock>
      <HeadBlock>
        <h2>Login</h2>
      </HeadBlock>
      <AuthForm action="/" onSubmit={handleLoginSubmit}>
        <AuthLabel id="email">이메일</AuthLabel>
        <AuthInput
          id="email"
          type="email"
          value={email}
          placeholder="이메일을 입력해주세요."
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthLabel id="pw">비밀번호</AuthLabel>
        <AuthInput
          id="pw"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해주세요."
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <RBtnBox>
          <RegisterBtn type="button" onClick={() => setIsRegisterPage(true)}>
            회원가입
          </RegisterBtn>
        </RBtnBox>
        <LoginBtn
          type="submit"
          disabled={!isLoginFormValid}
          isFormValid={isLoginFormValid}
        >
          로그인
        </LoginBtn>
      </AuthForm>
    </PageBlock>
  );
};

export default LoginForm;
