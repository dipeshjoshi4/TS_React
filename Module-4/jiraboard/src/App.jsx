
import React from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/right-check-finale.png"
import { useState, useEffect } from "react";

//?for local storage
const exisitingTask = localStorage.getItem("tasks");


const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(exisitingTask) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const [activeCard, setActiveCard] = useState(null);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((tasks, index) => (index !== taskIndex))
    setTasks(newTask)
  }

  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="Ready For Development" tasks={tasks} status="Ready For Development" handleDelete={handleDelete} setActiveCard={setActiveCard} />
        <TaskColumn title="In Progress" tasks={tasks} status="In Progress" handleDelete={handleDelete} setActiveCard={setActiveCard} />
        <TaskColumn title="Ready For Test" tasks={tasks} status="Ready For Test" handleDelete={handleDelete} setActiveCard={setActiveCard} />
        <TaskColumn title="Closed" icon={ClosedIcon} tasks={tasks} status="Closed" handleDelete={handleDelete} setActiveCard={setActiveCard} />
      </main>
      <h2>ActiveCard  {activeCard}</h2>
    </div>
  );
};

export default App;