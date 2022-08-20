import { useState } from "react";
import * as Api from "../../api";
import {
  AuthForm,
  AuthGuide,
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
  const isBothPasswordValid = password === checkedPassword;
  const isRegisterFormValid =
    isEmailValid && isPasswordValid && isBothPasswordValid;

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    try {
      const res = await Api.post("/auth/signup", data);
      const userToken = res.access_token;
      localStorage.setItem("userToken", userToken);
      alert("회원가입 성공!\n 로그인 페이지로 이동합니다.");
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
          isValid={isEmailValid}
          placeholder="이메일을 입력해주세요."
          autoFocus
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid && <AuthGuide>이메일 형식에 맞지 않습니다.</AuthGuide>}

        <AuthLabel id="pw">비밀번호</AuthLabel>
        <AuthInput
          id="pw"
          type="password"
          value={password}
          isValid={isPasswordValid}
          placeholder="비밀번호를 입력해주세요."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && (
          <AuthGuide>비밀번호를 8자리 이상으로 설정해주세요.</AuthGuide>
        )}

        <AuthLabel id="cpw">비밀번호 확인</AuthLabel>
        <AuthInput
          id="cpw"
          type="password"
          value={checkedPassword}
          isValid={isBothPasswordValid}
          placeholder="비밀번호를 한번더 입력해주세요."
          required
          onChange={(e) => setCheckedPassword(e.target.value)}
        />
        {!isBothPasswordValid && (
          <AuthGuide>위 비밀번호와 동일하게 적어주세요.</AuthGuide>
        )}

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
