import { useState } from "react";
import { TaskType } from "../constants";

// define props
interface TaskFormProps {
  tasksList: TaskType[]; // array of TaskType objects
  setTasksList: (tasksList: TaskType[]) => void;
}

const TaskForm = ({ setTasksList, tasksList }: TaskFormProps) => {
  // initialization
  const [task, setTask] = useState<TaskType>({
    task: "",
    completed: false,
  });

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") return;
    setTask({
      task: e.target.value,
      completed: false,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.task === "") return;
    setTasksList([...tasksList, task]);

    // back to its initial state
    setTask({
      task: "",
      completed: false,
    });
  };

  return (
    <div className="flex flex-col mx-4 justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleText}
          className="p-4  rounded border border-1 border-slate-900 bg-slate-800 text-white"
          type="text"
          placeholder="Add new task"
          value={task.task}
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded ">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
