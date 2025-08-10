
//! Module-5

//!-In module-5 we will go for the logic part how dynamic we change the data Notes only code will be still in Module -4 Folder structure

//?66 lecture-01-Integrating Functionality: Understanding Requirements and Application Behavior.


//?67 Lecture-1-Handling Form Submissions Efficiently
//- talks about all the requirement menas drop and and drags the functionality ,delete CRUD
//- We just make a our different functionality in in array of object and make Map function and iterate and given all info. while user interact
//- this is in short wee will do in this whole Module

//?task-form.jsx
/*

import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
    const [task, setTask] = useState("");
    const handleTask = (e) => {
        setTask(e.target.value)
    };
    console.log(task)
    const [status, setStatus] = useState("");
    const handleStatus = (e) => {
        setStatus(e.target.value)
    };
    console.log(status)
    return (
        <header className="app_header">
                <input type='text' placeholder='Enter Class Details' className='task_input' onChange={handleTask} />
                        <select className='task_status' onChange={handleStatus}>
                            <option value="Ready For Development">Ready For Development</option>
                            <option value="Task In Progress">Task In Progress</option>
                            <option value="Ready For Test">Ready For Test</option>
                            <option value="Closed">Closed</option>
                        </select>
        </header>
    )
}
export default TaskForm

*/

// - here for the input filed we have different state and for the status chnage we have different state
// - we can optimize this thing

//?68 Lecture-2-Pro Tip: Shortcut for Handling Complex Forms

//-there were many times we have complex forms. to handle we can messure many things

//-first of all chnage we can not do the same state then for many complex forms have 5-6 chnages and thast we have to maintain 5-6 state completely injustice to react first rule -- reuse

//-


//?69 Lecture-3-Understanding & Using React Strict Mode

//? 70

//?71
