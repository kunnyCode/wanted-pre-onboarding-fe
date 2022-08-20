import styled, { css } from "styled-components";

export const AuthForm = styled.form`
  width: 100%;
  padding: 32px;
  padding-bottom: 124px;
  margin: auto;
`;

export const AuthLabel = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 10px;
`;

export const AuthInput = styled.input`
  padding: 12px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

export const RBtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterBtn = styled.div`
  color: #030001;
  padding-right: 8px;
  margin-bottom: 22px;

  &:hover {
    color: #c92052;
  }
  &:active {
    color: #e60346;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  border: 0;
  outline: 0;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #20c997;
  color: #20c997;
  background-color: #fff;

  ${(props) =>
    props.isFormValid &&
    css`
      &:hover {
        /* background: #7edec5; */
        border: 2px solid #0fda9e;
        color: #158765;
      }
      &:active {
        background: #1cb386;
        border: 2px solid #1cb386;
        color: #fff;
      }
    `}

  &:disabled {
    border: 1px solid #dee2e6;
    color: #dee2e6;
  }
`;
