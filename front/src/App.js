import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import TodoPage from "./components/todo/TodoPage";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>투두 리스트 헤더입니다.</h1>
        </header>
        <Routes>
          <Route path="/" exact element={<AuthPage />}></Route>
          <Route path="/todo" exact element={<TodoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
