import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos, isDone }) {
  // TODO: 비즈니스로직 부분을 커스텀훅으로 변경해 보세요. src/hooks/useTodo.js 준비되어 있습니다.

  const filteredTodos = todos.filter((todo) => todo.isDone === isDone);
  const toggleTodoItem = (id) => {
    // TODO: 리덕스 reducer 로 상태변경 해보세요.
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodoItem = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h2>{isDone ? "Done" : "Wokring..."}</h2>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodoItem={toggleTodoItem}//todoSlice 'toggleTodo' => dispatch(toggleTodo(todo.id))
            deleteTodoItem={deleteTodoItem}//todoSlice 'deleteTodo' => dispatch(deleteTodo(todo.id)) => button
          />
        ))}
      </ul>
    </>
  );
}
