export default function Completed({ tasks }){
	const completedTasks = tasks.filter((task) => task.completed).length;
	const totalTasks = tasks.length;
	return totalTasks > 0 ? (
		<div className="flex justify-between items-center mx-4 mt-4">
			<p className="text-lg text-green-600 font-medium">
				Completed: {completedTasks} / {totalTasks}
			</p>
			<p className="text-lg text-gray-600 font-medium">
				Total tasks: {totalTasks}
			</p>
		</div>
	) : null;
}