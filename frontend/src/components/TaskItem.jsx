import API from "../api";

const TaskItem = ({ task, fetchTasks }) => {

  const complete = async () => {
    await API.put(`/tasks/${task.id}`);
    fetchTasks();
  };

  const deleteTask = async () => {
    await API.delete(`/tasks/${task.id}`);
    fetchTasks();
  };

  return (
    <div className={`card ${task.completed ? "done" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p className="status">
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <div className="btn-group">
        <button className="btn complete" onClick={complete}>
          Complete
        </button>
        <button className="btn delete" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;