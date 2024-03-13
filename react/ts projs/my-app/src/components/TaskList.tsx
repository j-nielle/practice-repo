import TaskItem from "./TaskItem";
import { TaskType } from "../constants";

interface TaskListProps {
  tasksList: TaskType[];
  setTasksList: (tasksList: TaskType[]) => void;
}

const TaskList = ({ tasksList, setTasksList }: TaskListProps) => {
  return (
    <div className="space-y-2">
      {tasksList.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          setTasksList={setTasksList}
          tasksList={tasksList}
        />
      ))}
    </div>
  );
};

export default TaskList;
