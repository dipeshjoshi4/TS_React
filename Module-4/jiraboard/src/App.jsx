
import React from "react";
import "./app.css";
import TaskForm from "./components/TaskForm/task-form";
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/right-check-finale.png"
import { useState } from "react";


const App = () => {
  const [tasks, setTasks] = useState([]);
  console.log(tasks)
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="Ready For Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready For Test" />
        <TaskColumn title="Closed" icon={ClosedIcon} />
      </main>
    </div>
  );
};

export default App;