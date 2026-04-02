import TaskItem from "./TaskItem";

const TaskList = ({ tasks, fetchTasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </div>
  );
};

export default TaskList;