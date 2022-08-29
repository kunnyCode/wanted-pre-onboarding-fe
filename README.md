# wanted-pre-onboarding-fe

<br/>

## ✔︎선발완료✔︎

<br/><br/>

## 프로젝트의 실행 방법

```bash
git clone https://github.com/kunnyCode/wanted-pre-onboarding-fe.git
cd front
yarn insall
yarn start
```

<br/><br/><br/>

## 데모 영상

<br/>

### Assignment1

![1](https://user-images.githubusercontent.com/77873651/185752013-4952bc4e-4066-4c8f-bf73-f4efadc11d4a.gif)
<br/><br/>

### Assignment2

![2](https://user-images.githubusercontent.com/77873651/185750636-ecc75628-0479-4275-b97a-86f692a75b3b.gif)
<br/><br/>

### Assignment3

![3](https://user-images.githubusercontent.com/77873651/185750629-6f326fa1-2a66-4fc3-a755-acb88c8a9193.gif)
<br/><br/>

### Assignment4

![4](https://user-images.githubusercontent.com/77873651/185750624-97490940-9af0-44ba-ba42-980aa76b38c7.gif)
<br/><br/>

### Assignment5

![5](https://user-images.githubusercontent.com/77873651/185752067-f7b7254d-9db3-4ac5-a36f-cff18853d972.gif)
<br/><br/>

<br/><br/><br/><br/>

## 과제 수행

---

### :: 1. 로그인 / 회원가입

- `/` 경로에 로그인 / 회원가입 기능을 개발해주세요 <U><span style="color:yellow">**_[ 완료 ✔ ]_**</span></U>
  - 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다. <U><span style="color:yellow">**_분리하지 않음 ✔︎_**</span></U>

#### Assignment1

- 이메일과 비밀번호의 유효성 검사기능을 구현해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 이메일 조건: `@` 포함 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 비밀번호 조건: 8자 이상 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 보안 상 실제 사용하고 계신 이메일과 패스워드말고 테스트용 이메일, 패스워드 사용을 권장드립니다. <U><span style="color:yellow">**_넵!!_**</span></U>

#### Assignment2

- 로그인 API를 호출하고, 올바른 응답을 받았을 때 `/todo` 경로로 이동해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다. <U><span style="color:yellow">**_확인했습니다 ✔︎_**</span></U>
  - 응답받은 JWT는 로컬 스토리지에 저장해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>

#### Assignment3

- 로그인 여부에 따른 리다이렉트 처리를 구현해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 로컬 스토리지에 토큰이 있는 상태로 `/` 페이지에 접속한다면 `/todo` 경로로 리다이렉트 시켜주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 로컬 스토리지에 토큰이 없는 상태로 `/todo`페이지에 접속한다면 `/` 경로로 리다이렉트 시켜주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>

### :: 2. 투두 리스트

#### Assignment4

- `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
- 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다. <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
- 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>

#### Assignment5

- 투두 리스트의 수정, 삭제 기능을 구현해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
  - 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요 <U><span style="color:yellow">**_완료 ✔︎_**</span></U>
