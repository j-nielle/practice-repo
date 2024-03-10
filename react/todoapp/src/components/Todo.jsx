import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import Completed from "./Completed";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="m-8">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Completed tasks={todoList} />
    </div>
  );
}
