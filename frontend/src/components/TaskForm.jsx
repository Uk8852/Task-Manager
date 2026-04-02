import { useState } from "react";
import API from "../api";

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await API.post("/tasks", { title, description });

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  return (
    <form onSubmit={submit} className="form">
      <input
        className="input"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="btn add">Add Task</button>
    </form>
  );
};

export default TaskForm;