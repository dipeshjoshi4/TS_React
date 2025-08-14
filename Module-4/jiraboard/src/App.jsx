
import React from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/right-check-finale.png"
import { useState } from "react";

//for local storage
const exisitingTask = localStorage.getItem("tasks");
console.log(exisitingTask)

const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((tasks, index) => (index !== taskIndex))
    setTasks(newTask)
  }

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="Ready For Development" tasks={tasks} status="Ready For Development" handleDelete={handleDelete } />
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete} />
        <TaskColumn title="Ready For Test" tasks={tasks} status="Ready For Test" handleDelete={handleDelete} />
        <TaskColumn title="Closed" icon={ClosedIcon} tasks={tasks} status="Closed" handleDelete={handleDelete} />
      </main>
    </div>
  );
};

export default App;