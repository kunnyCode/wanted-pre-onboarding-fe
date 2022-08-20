import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import TodoPage from "./components/todo/TodoPage";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" exact element={<AuthPage />}></Route>
          <Route path="/todo" exact element={<TodoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
