import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoListWrapper from "./components/TodoListWrapper";
import { useSelector } from "react-redux";

function App() {
const a= useSelector((state) => state.a)
  // TODO: useState 로 되어 있는 부분을 redux 전역상태관리로 리팩터링 해보세요.
  // initialState 에 있는 더미 데이터는 제거하셔도 좋습니다.
  const [todos, setTodos] = useState([
    { id: 1, title: "제목1", content: "내용1", isDone: false },
    { id: 2, title: "제목2", content: "내용2", isDone: false },
    { id: 3, title: "제목3", content: "내용3", isDone: true },
    { id: 4, title: "제목4", content: "내용4", isDone: true },
    { id: 5, title: "제목5", content: "내용5", isDone: true },
  ]);
  return (
    <div className="App">
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} />
      <TodoListWrapper todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
