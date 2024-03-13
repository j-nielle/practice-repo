import { TaskType } from "../constants";

interface TaskDoneProps {
  tasksList: TaskType[];
}

const TaskDone = ({ tasksList }: TaskDoneProps) => {
	const completedTasks = tasksList.filter((task) => task.completed).length;
	const totalTasks = tasksList.length;
  return (
    <div>
      <p>Pending</p>
      {completedTasks} / {totalTasks}
    </div>
  );
};

export default TaskDone;
