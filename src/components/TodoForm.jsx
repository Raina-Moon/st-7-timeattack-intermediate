import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
export default function TodoForm({ todos, setTodos }) {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");
    const dispatch = useDispatch();

    const handleAdd = (e) => {
      e.preventDefault();
      if (todos.trim()) {
        dispatch(addTodo(text));
        setTodos("");
      }
    };
    // TODO: 리덕스의 reducer 로 상태 변경할 수 있게 해주세요.
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title, content, isDone: false },
    ]);

    e.target.reset();
  };
  return (
    <form onSubmit={handleAdd}>
      <label>제목:</label>
      <input name="title" type="text" onChange={handleAdd} />
      <label>내용:</label>
      <input name="content" type="text" />
      <button type="submit">
        추가
      </button>
    </form>
  );
}
