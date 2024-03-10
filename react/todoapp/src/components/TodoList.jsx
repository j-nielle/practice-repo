import TodoItem from "./TodoItem";

export default function TodoList({ todoList, setTodoList }) {
  const sortCompleted = todoList
    .slice()
    .sort((a, b) => Number(a.completed) - Number(b.completed));

  // sort the todoList by completed status
  // so the completed items will be at the bottom
  // and the uncompleted items will be at the top
  return (
    <div>
      {sortCompleted.map((item) => (
        <TodoItem
          setTodoList={setTodoList}
          todoList={sortCompleted}
          key={item.task}
          item={item}
        />
      ))}
    </div>
  );
}
