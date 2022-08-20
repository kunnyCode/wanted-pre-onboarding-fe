import { useState } from "react";
import * as Api from "../../api";
import {
  AuthForm,
  AuthInput,
  AuthLabel,
  LoginBtn,
  RBtnBox,
  RegisterBtn,
} from "../../style/AuthStyle";
import { HeadBlock, PageBlock } from "../../style/GlobalStyle";
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
    <PageBlock>
      <HeadBlock>
        <h2>Register</h2>
      </HeadBlock>
      <AuthForm action="/" onSubmit={handleRegisterSubmit}>
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

        <AuthLabel id="cpw">비밀번호 확인</AuthLabel>
        <AuthInput
          id="cpw"
          type="password"
          value={checkedPassword}
          placeholder="비밀번호를 한번더 입력해주세요."
          required
          onChange={(e) => setCheckedPassword(e.target.value)}
        />

        <RBtnBox>
          <RegisterBtn type="button" onClick={() => setIsRegisterPage(false)}>
            뒤로가기
          </RegisterBtn>
        </RBtnBox>
        <LoginBtn
          type="submit"
          disabled={!isRegisterFormValid}
          isFormValid={isRegisterFormValid}
        >
          회원가입하기
        </LoginBtn>
      </AuthForm>
    </PageBlock>
  );
};

export default RegisterForm;
