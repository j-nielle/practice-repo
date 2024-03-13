import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskDone from "./TaskDone";
import { useState } from "react";
import { TaskType } from "../constants";


const Task = () => {
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  return (
		<div>
			<TaskForm tasksList={tasksList} setTasksList={setTasksList} />
			<TaskList tasksList={tasksList} setTasksList={setTasksList} />
			<TaskDone tasksList={tasksList} />
		</div>
	);
}

export default Task;
