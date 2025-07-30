
//! Module-4-Hands-on Project - Learn By Building

//!56 Lecture-1-Introduction: Project Overview, Planning, and the Developer Mindset

//?Developer who built application 2 things is Must

//? 1.Mindset
//- thinking comes from project planning
//- p.p comes from first thing which is requirement
//- first work of developer is html structure
//- layout and design comes from UX
//- after adding implementation/functionality

//? 2.React Components
//- decide where and how much depends on requirement

//?company most time follow Agile Method Not waterfall method
//?Agile is like
// - real time feedback
// - sprint wise work
// - real time suggestions
// - Real requirement seen by client or product owner

//!57 Lecture-2-Design Breakdown: Header + Main with Styling

// just make normal structure and give little bit style for look like structure

//?App.jsx
/*

import React from "react";
import "./app.css";

const App = () => {
  return (
    <div className="app">
      <header className="app_header">Jira Board</header>
      <main className="app_main">
        <section className="task_Column">Section-1</section>
        <section className="task_Column">Section-1</section>
        <section className="task_Column">Section-1</section>
        <section className="task_Column">Section-1</section>
      </main>
    </div>
  );
};
export default App;
*/

//?App.css
/*
.app{
  display:grid;
  grid-template-rows: 150px auto;
}
.app_main{
  display: flex;
  justify-content: space-evenly;
  padding:20px 8%;
}
.task_Column{
  width:30%;
  background-color: red;
  margin:20px;
}
*/

//?

//?App.jsx
/*
const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
    </div>
  );
};
*/