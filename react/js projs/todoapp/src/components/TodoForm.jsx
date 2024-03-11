import { useState } from "react";

export default function TodoForm({ todoList, setTodoList }) {
  const formClass =
    "flex flex-row justify-between items-center mb-7 mx-4 px-3 py-2 border rounded border-gray-400";
  const submitBtn =
    "px-4 py-2 hover:bg-purple-800  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-gray-200 bg-purple-600 text-white font-bold rounded drop-shadow";

  const [todo, setTodo] = useState({
    task: "",
    completed: false,
  });

  // function to handle form submission
  // it will add the todo to the todoList
  // and reset the todo state
  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task == "") return;
    setTodoList([...todoList, todo]);
    setTodo({ task: "", completed: false });
  }

  return (
    <>
      <form className={formClass}>
        <input
          className="focus:outline-none w-full"
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
          type="text"
          value={todo.task}
          placeholder="Add a todo..."
        />
        <button className={submitBtn} onClick={handleSubmit} type="submit">
          ADD
        </button>
      </form>
    </>
  );
}
