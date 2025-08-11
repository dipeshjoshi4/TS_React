
//! Module-5

//!-In module-5 we will go for the logic part how dynamic we change the data Notes only code will be still in Module -4 Folder structure

//?66 lecture-01-Integrating Functionality: Understanding Requirements and Application Behavior.


//!67 Lecture-1-Handling Form Submissions Efficiently
//- talks about all the requirement menas drop and and drags the functionality ,delete CRUD
//- We just make a our different functionality in in array of object and make Map function and iterate and given all info. while user interact
//- this is in short wee will do in this whole Module

//?Overview How Logic Build FOr this
//- making onn e array of Object and iterate through map make dynmic data with use of props too

//?CODE
/*
[
    {
        task: "first task",
        tags: ["DEV", "QA"],
        status: "Ready For Dev",
    },
    {
        task: "Second Task",
        tags: ["DEV", "PO"],
        status: "closed",
    },
]

*/

//?//?task-form.jsx[CODE]

//?Older version
/*
import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";
const TaskForm = () => {
    const [task, setTask] = useState("");
    console.log(task);
    return (
        <header className="app_header">
            <input type='text' placeholder='Enter Class Details' className='task_input' onChange={(e)=>{setTask(e.target.value)}} />
        </header>
    )
}
export default TaskForm
*/

//?New Version

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
        </header>
    )
}
export default TaskForm

*/

//- here for the input filed we have different state and for the status chnage we have different status's state
//- so for every chnage we have to make different state thats not fisible so we can optimize this thing in Next Lecture


//!68 Lecture-2-Pro Tip: Shortcut for Handling Complex Forms

//- There were many times we have complex forms. to handle we can messure many things
//- First of all change we cann't do the same state.
//- because then for many complex forms have 5-6 chnages and for that we have to maintain 5-6 state completely injustice to react first rule  reusebility of as much as you can

//?CODE

//?task-form.jsx
/*
import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "Ready For Development",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
    }

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Class Details' className='task_input' name="task" onChange={handleChange} />
                <div className='task_form_bottom'>
                    <div>
                        <Tag tagName="DEV"/>
                        <Tag tagName="QA" />
                        <Tag tagName="Product Owner" />
                    </div>
                    <div>
                        <select className='task_status' onChange={handleChange} name="status">
                            <option value="Ready For Development">Ready For Development</option>
                            <option value="Task In Progress">Task In Progress</option>
                            <option value="Ready For Test">Ready For Test</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <button type='submit' className='task_submit'>+Add</button>
                    </div>
                </div>
            </form>

        </header>
    )
}

export default TaskForm


*/

//?Expalnation of whole code Step by Step

//?1
//- here in state "task indicate-> input value " & "status indicate -> drop down value"
//- for both field we put by default value we put

//?2
//- by doing this below code we can get target element whatever its dropdown or input filed we can get it
//?CODE
/*
    const handleChange = (e) => {
         console.log(e.target)
     }
*/
// - now we can get actual value from this and our main objective is that whatever the value iin intial value we can chnage dynamically

//?3
// - for dynamically present the value in target element or tag we have to pass something unique on that so then we can get it
// - so we pass name attribute in both input field and dropdown menu
//?CODE
/*
<input type='text' placeholder='Enter Class Details' name="task" className='task_input' onChange={handleTask} />
<select className='task_status' onChange={handleChange} name="status">
*/

//?4
/*
const handleChange = (e) => {
    const { name, value } = e.target
    console.log(name, value)
}
*/

//?5
//- last we have to submit the form with <form onSubmit={handleSubmit}>
//- on Submit bt default behaviour is refresh the page so to stop that
//?CODE
/*
 const handleSubmit = (e) => {
        e.preventDefault();
        console.log(taskData);
}
*/

//! 69 Lecture-3-Understanding & Using React Strict Mode

//! 70 Lecture-4-Understanding and Implementing Tag Selection Logic

//! 71 Lecture-5-Dynamically Displaying Selected Tags with Applied Colors

//! 72 Lecture-6-Code Optimization: Removing Duplicates and Organizing Constants

//! 73 Lecture-7-Selecting the Data Structure & Implementing Card Display Logic

//! 74 Lecture-8-Implementing Delete Functionality

//! 75 Lecture-9-Making Task Data Persistent with Local Storage.




