export default function TodoItem({ item, todoList, setTodoList }) {
  const itemClass =
    "flex mx-4 my-2 p-5 bg-gray-200 rounded flex-row justify-between items-center outline-1 outline-blue-600 outlinew";
  const deleteClass =
    "py-2 px-4 font-bold bg-red-500 text-white rounded drop-shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-200";
  const completedClass = item.completed
    ? "line-through italic text-gray-500"
    : "";

  function handleCompleted(item) {
    // map through the todoList and change the completed value
    // of the item that matches the clicked item
    setTodoList(
      todoList.map((todo) =>
        todo === item ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(item, e) {
    e.stopPropagation();
    setTodoList(todoList.filter((todo) => todo !== item));
  }

  return (
    <div onClick={() => handleCompleted(item)} className={itemClass}>
      <p className={completedClass}>{item.task}</p>
      <button onClick={(e) => handleDelete(item, e)} className={deleteClass}>
        X
      </button>
    </div>
  );
}
