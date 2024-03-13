import { TaskType } from "../constants";

interface TaskItemProps {
  task: TaskType;
  tasksList: TaskType[];
  setTasksList: (tasksList: TaskType[]) => void;
}

const TaskItem = ({ task, setTasksList, tasksList }: TaskItemProps) => {
  const completedText = task.completed
    ? "line-through italic text-gray-500"
    : "";

  const completedItem = !task.completed ? "bg-white border border-1 border-slate-900 drop-shadow rounded-sm px-8 py-3 mx-10 flex justify-between items-center" : "bg-white border-0 drop-shadow rounded-sm px-8 py-3 mx-10 flex justify-between items-center"

  const handleStatus = (task: TaskType) => {
    setTasksList(
      tasksList.map((item) =>
        item === task ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const updatedTasksList = tasksList.filter((t) => t.task !== task.task);
    setTasksList(updatedTasksList);
  };

  return (
    <div className={completedItem} onClick={() => handleStatus(task)}>
      <p className={completedText}>{task.task}</p>
      <button
        onClick={handleRemove}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        X
      </button>
    </div>
  );
};

export default TaskItem;
