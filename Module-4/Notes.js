
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

//?60 Lecture-3-Building the Header Layout – JSX and Component Basics

//- we make structure of header jsx
//- make task form and put all the structure then import task form component into App.jsx
//?our folder structure
//is for every componentent there will be component folder and there we have componenet specific CSS file too

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

//?task-form.jsx
/*
import "./task-form.css";
const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input type='text' placeholder='Enter Class Details' className='task_input' />

                <div className=''>
                    <button className='tag'>DEV</button>
                    <button className='tag'>QA</button>
                    <button className='tag'>Product Owner</button>
                </div>

                <select className='task_status'>
                    <option value="Ready For Development">Ready For Development</option>
                    <option value="Task In Progress">Task In Progress</option>
                    <option value="Ready For Test">Ready For Test</option>
                    <option value="Closed">Closed</option>
                </select>

                <button type='submit' className='task_submit'>+Add</button>
            </form>

        </header>
    )
}
export default TaskForm
*/

//?61 Lecture-4-Header Structure & Styling – Step by Step CSS Guide

//Just ADD TASK-FORM.CSS all styling part of header part

//?62 Lecture-5-Tag Component & Props Implementation
//find oprtunity what can reuse and we find button are reuse in card
// so make a seprate component of "Tag.jsx" with special Tag.css

//?Tag.jsx
/*
import React from 'react'
import "./Tag.css"
const Tag = (props) => {
    const { tagName } = props
    return (
        <>
            <button className='tag'>{tagName}</button>
        </>
    )
}
export default Tag;
*/

//?Tag.css
/*
.tag{
    background-color: #f9f9f9;
    color:#000;
    font-size: 14px;
    font-weight: 500;
    border: 1px solid #dfe3e6;
    border-radius: 5px;
    padding:2px 10px;
}
*/


//? 63 Lecture-6-Implementing a Reusable Tag Component Using Props
//put props as tagName passing from "task-form.jsx" to "Tag.jsx"

//?task-form.jsx
/*
 <div>
      <Tag tagName="DEV"/>
      <Tag tagName="QA" />
      <Tag tagName="Product Owner" />
  </div>
*/

//?64 Lecture-7- Creating a Column Component with Styling

//- whenevr we see the some texture or style repeat it will be seprate compon

//- here we will see the box section and selection section have repeat so we can make new componenet for them

//for selection ->task-column
//for box ->

//How we gave path in image otherwise it dont work
//- so when you aplication go on the bundle and deployment that time only static file will be gone
//-  your all file path will be at one place
//- for that time image will be work fine and react understand or webpack we have to given path

//?App.jsx
/*
import TaskColumn from "./components/TaskColumn/task-column";
import ClosedIcon from "./assets/right-check-finale.png"

const App = () => {
  return (
    <div className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm />
      <main className="app_main">
        <TaskColumn title="Ready For Development" />
        <TaskColumn title="In Progress" />
        <TaskColumn title="Ready For Test" />
        <TaskColumn title="Closed" icon={ClosedIcon} />
      </main>
*/

//?task-column.jsx
/*
import React from 'react'
import "./task-column.css"
const TaskColumn = (props) => {
    return (
        <div>
            <section className="task_Column">
                <h2 className='task_column_heading'>
                    <img src={props.icon} alt='' className='task_column_icon'></img>
                    {props.title}</h2>
            </section>
        </div>
    )
}
export default TaskColumn;
*/

//?task-column.css
/*
.task_Column{
  margin: 20px;
}

.task_column_heading{
  display: flex;
  align - items: center;
}

.task_column_icon{
  width: 15px;
  margin - right: 5px;

}
  */

//?65 Lecture-8-
