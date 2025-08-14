
//! Module-5

//!-In module-5 we will go for the logic part how dynamic we change the data Notes only code will be still in Module -4 Folder structure

//!67 lecture-01-Integrating Functionality: Understanding Requirements and Application Behavior.


//!68 Lecture-1-Handling Form Submissions Efficiently
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


//!69 Lecture-2-Pro Tip: Shortcut for Handling Complex Forms

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
}
*/

//! 70 Lecture-3-Understanding & Using React Strict Mode

//- in our app new updates and all dependecy chnage and deprecated by the time
//- as developer we dont remember all the things so when you use the old depricated thing strict mode indciated warning
// - in main.jsx our app in ------> <StrictMode><App /></StrictMode >,

//React Strict Mode is tool provided by React that Helps developer write better quality Code by Highlighting potential problems during developement
//- it may not support deprectaed React API and Components
//- it helps catch unsafe state updates
//- it highlights potential unnecessary re-renders


//! 71 Lecture-4-Understanding and Implementing Tag Selection

// here we seen how tags multiple select and get data at that moment

//- if we see without adding any logic and click on button our default taskdata comes .but ideally it comes from the "+Add" button!
//- so the things is button bydefault type is type ="Submit" so we have to chnage type="button"
// <button type="button" className='tag'>{tagName}</button>

//?What we want
//- so we want our tag when we click and it appers .it can multiple tags too. so we can make array and put in our default state
//- we make sure duplicate dont include in array

//?1
//- we want this with one state so first add tags default value
//?CODE
//  const [taskData, setTaskData] = useState({
//         task: "",
//         status: "Ready For Development",
//         tags:[],
//     })

//?2
// - we use prop,driling and pass our in tag component so that when we click our function runs and we get value
//?task-form.jsx
/*
const selectedTag = (tag) => {
    console.log(tag)
}
return (
    <Tag tagName="DEV" selectedTag={selectedTag} />
    <Tag tagName="QA" selectedTag={selectedTag} />
    <Tag tagName="Product Owner" selectedTag={selectedTag} />
)
*/
//?Tag.jsx
//?First Vesion
// <button type="button" className='tag' onClick={selectedTag(tagName)}>{tagName}</button>
//- here we seen the tagname in argument so that we know and our function knows the tag name
//- but as per syntax it run only once and get error and we cant select multiple
//- Error - selectTag is Not A Function
//- so we change like whenever we click its runs every time so we make there arrow function
//?Updated Version
// <button type="button" className='tag' onClick={() => { selectedTag(tagName) }}>{tagName}</button>

//?3
//- now we make we dont want duplicate in array  and it comes when form submit with our state answer
//?CODE
/*
const selectedTag = (tag) => {
    if (taskData.tags.some((item) => (item === tag))) {
        const filterTags = taskData.tags.filter((item) => item !== tag);
        setTaskData((prev) => {
            return { ...prev, tags: filterTags }
        })
    } else {
        setTaskData((prev) => {
            return { ...prev, tags: [...prev.tags, tag] }
        })
    }
}
console.log(taskData);
*/

//?Hindi
//- jo tag aa raha hai wo humcheck karte with some method isme hai to wo tag se match karte all the click of user and then filter kardenge
//- agar fresh tags ke liye else loop chal hi raha hai
//- bas duplicasy na aaye isliye hum filter wali method use kar rhe hai

//?English
//- so here we understand one by one all the line
//- we go taskdata.tags.some (which is array method who check what is in the array)
//- so we check if statement for whatever is in the array are not include and we add filter out
//- so we check by arrow function item === tag
//- then filter what are not in item !== tag are goes into array with setTaskData
//- to get in array we do same as we do for input and dropdown menu

//?CODE
/*
setTaskData((prev) => {
        return { ...prev, tags: filterTags }
    }
)
*/
// here prev have old data and we have put new data with tags:filterTags
// for else...
//- we do same but difference else is first time use when old data is completley empty
//- on slight chnage happen when multiple tags select to have multiple tag selected we have
//?CODE
/*
setTaskData((prev) => {
    return{...prev,tags:[...prev.tags,tag]}
})
*/
//- here old tags will be same so tags:[...prev.tags] and also new tag which we select [,tag]

//! 72 Lecture-5-Dynamically Displaying Selected Tags with Applied Colors

// - so here we above see that our data dynimically chnage and our app run perfect
// - all though we optimized our tag if...else condition in next lecture too...

//?in mutliple tag slection if we select the old tag again then its remove from the our tags[]

//- so in tags if..else condition we mention "whatever tag is not in the array are going into filterTags"
//- we somehow now find if this "tag" selected then we get to know
//- now pass this checkTag as props in Tag as selected={checkTag("Product Owner")

//?task-form.jsx
/*
const checkTag = (tag) => {
    return taskData.tags.some((item)=>{item === tag})
}
<div>
    <Tag tagName="DEV" selectedTag={selectedTag} selected={checkTag("DEV")} />
    <Tag tagName="QA" selectedTag={selectedTag} selected={checkTag("QA")} />
    <Tag tagName="Product Owner" selectedTag={selectedTag} selected={checkTag("Product Owner")} />
</div>
*/

//?Tag.jsx
/*
const { tagName, selectedTag, selected } = props
const TagStyle = {
    DEV: { backgroundColor: "#04Caff" },
    QA: { backgroundColor: "#ff2e04" },
    PO: { backgroundColor: "#04ff2a" }
}
const tagKeyMap = {
    DEV: "DEV",
    QA: "QA",
    "Product Owner": "PO"
}
const key = tagKeyMap[tagName]
return (
    <>
        <button type="button"
            style={selected ? TagStyle[key] : {}} className='tag' onClick={() => { selectedTag(tagName) }}>{tagName}
        </button>
    </>
)
*/

//- for key we dont have to pass the  space in key => "Product Owner"
//- so for that we map ->  tagkeymap
//- then make const key = tagKeyMap[tagName]

//?Both Are Same
// selected ? tagStyle[tagKeyMap[tagName]]
// selected ? tagStyle[key]

//! 73 Lecture-6-Code Optimization: Removing Duplicates and Organizing Constants
// - if.....else duplicast of setTaskData(()=>{})

//? Optimize this code
// const selectedTag = (tag) => {
//     if (taskData.tags.some((item) => (item === tag))) {
//         const filterTags = taskData.tags.filter((item) => item !== tag);
//         setTaskData((prev) => {
//             return { ...prev, tags: filterTags }
//         })
//     } else {
//         setTaskData((prev) => {
//             return { ...prev, tags: [...prev.tags, tag] }
//         })
//     }
// }
// console.log(taskData);

//?explain
// - what above code do if the array has value then check and then that value are not match with selected tag
// - which we select then goes into array
// - and for the fresh data we add prev and prev.tags

//?Updated code
// const selectedTag = (tag) => {
//     setTaskData((prev) => {
//         const isSelected = prev.tags.includes(tag);
//         const tags = isSelected ? prev.tags.filter((item) => item !== tag) : [...prev.tags, tag]
//         return { ...prev, tags }
//     })

//?Explain in Hindi
//- we see jo bhi tag aa raha hai check karte hai direct with includes method kya wo tags array main
//- isSelected main hai then hum purane tag ko filter karke dallenge if nahi hai then fresh item hum daal hi rahe hai
//- return main hum purange tags jo array main hai wo and tag we capture kiya wo copy kar denge


//! 74 Lecture-7-Selecting the Data Structure & Implementing Card Display Logic
/*

What is the Agenda?
- if my data is this then goes to card in ready for development section
- if my data is that it goes to card in closed
- means whole card component render if this or that condition work

DATA
- so first we have to make our data and we alredy know data iterate we have to use map and for that we need array
- so our data is kind of like this
const data = [
{
  task: "this for DEV",
  status: "Ready For Development",
  tags: [DEV],
},
{
  task: "this for QA",
  status: "Ready For Development",
  tags: [QA],
},
{
  task:"this for Product Owner",
  status: "Ready For Development",
  tags: [Product Owner],
},
]

How WE gET ?

- first we useState and make the useState default value empty array
* why empty array ?
  because our target is to iterate for map and for that we need array
  //?CODE APP.JSX
            const App = () => {
            const [tasks, setTasks] = useState([]);
            console.log(tasks)
            return (
                <TaskForm setTasks={setTasks} />
                </div>
            );


- then we have pass seTasks as props to taskForm so can we get value
//?CODE task-form.jsx
       const TaskForm = ({ setTasks }) => {
            const handleSubmit = (e) => {
            e.preventDefault();
            setTasks((prev) => {
                  return [...prev, taskData]
             })
        }

- then we where our taskSubmit at that point we print ...prev data and then taskData
* why Prev Data?
- because 1st time its empty as default then and we add data and its become previous data so when print second task the first and second both task array comes  means our proper card will be show in console

# T.S. -> 06:30

- our aim is to make a data where we get array and running a map so we get it
- we can pass data now by running a map and also conditioning status its match or not

//?How We Do It
- so we remove console.log(tasks) and pass as props {TaskColumn}
- also we pass the status="Ready For Development".... All in each individual so that we can apply condition

//?App.jsx
const App = () => {
  const [tasks, setTasks] = useState([]);
  // console.log(tasks)
  return (
    < className="app">
      <h1 style={{ textAlign: "center", margin: "50px" }}>Jira Board</h1>
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn title="Ready For Development" tasks={tasks} status="Ready For Development"/>
        <TaskColumn title="In Progress" tasks={tasks} status="Ready For Development" />
        <TaskColumn title="Ready For Test" tasks={tasks} status="Ready For Development" />
        <TaskColumn title="Closed" icon={ClosedIcon} tasks={tasks} status="Ready For Development" />
      </main>

* task-coumn.jsx
- so we direct pass as props and in task-column
- then we make condition of taskcard after passing condition we display taskcard

* CODE
{
tasks.map((task,index)=>(<TaskCard key={index}/>))
}
- here we map the array which comes from tasks and pass the index and task which user write and our card shows on by one
- but we have to check status and then as per status task comes so we
{
tasks.map((task,index)=>task.status === status && <TaskCard key={index} title={task.title} tags={task.tags}/>)
}

* CODE task-column.jsx
const TaskColumn = ({ title, tasks, status, icon }) => {
    return (
        <div>
            <section className="task_Column">
                <h2 className='task_column_heading'>
                    <img src={icon} alt='' className='task_column_icon'></img>
                    {title}
                </h2>
                {
                  tasks.map((task, index) => task.status === status && (<TaskCard key={index} title={task.task} tags={task.tags} />))
                }

            </section>
        </div>
    )
}

* CODE TaskCard.jsx

const TaskCard = ({ title, tags }) => {
    return (
        <article className='taskcard'>
            <p className='task_text'>{title}</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {
                        tags.map((tag, index) => (<Tag key={index} tagName={tag} selected />))
                    }
                </div>
                <div className='task_delete'>
                    <img src={deleteIcon} alt="" className='deleteIcon' />
                </div>
            </div>

        </article>
    )
}

- here selected for the tags colors in below card section where no condition only color apply we need

*/

//! 75 Lecture-8-Implementing Delete Functionality
/*

- In this lecture, we talked about how we’ll achieve the delete functionality. We wrote the code in a very simple way and tried to understand how the logic will work.

* Agenda-1
- we see one bug that once your card enter you will see the text in inpur field or status or tags are same not goes in his default value
- so we have to do this for betterment of project

* Solution

- form where the form submit after that you have to mentioned your intial state

* CODE task-form.jsx

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "Ready For Development",
            tags: [],
        })
    }

    <input type='text' placeholder='Enter Class Details' className='task_input' name="task" value={taskData.task} onChange={handleChange} />
    <Tag tagName="DEV" selectedTag={selectedTag} selected={checkTag("DEV")} />
    <select className='task_status' onChange={handleChange} name="status" value={taskData.status}>

    - we alson have to given value from taskData.status and taskData.task => so its chnage by react

    * t.s.-3:45

    * Agenda-2- Apply delete Functionality
     - for that you have delete function which is working on index and pass as props till delete button


    * App.jsx
        const handleDelete = (taskIndex) => {
            const newTask = tasks.filter((tasks, index) => (index !== taskIndex))
            setTasks(newTask)
        }
        <TaskColumn title="Ready For Development" tasks={tasks} status="Ready For Development" handleDelete={handleDelete } />

    - here we  filter out with id => normal index !== when delete button click id |  are not in array => is remaining task new tasks


    * task-column.jsx
    <TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index={index} />
    - pass index too

    * TaskCard.jsx
    <div className='task_delete' onClick={() => { handleDelete(index) }}>
            <img src={deleteIcon} alt="" className='deleteIcon' />
    </div>
    - take index as props and applied function onClick

*/

//! 76 Lecture-9-Making Task Data Persistent with Local Storage.

/*
* Agenda-So we’ve talked about what local storage is, when to use it, and how we can store data in it.

- So in this lecture, we’ve learned that we’re currently storing our task data in state variables, and if we refresh the page, that data will be lost. That’s because after a page refresh, any data stored in state variables gets cleaned up.
- To make the data persistent, we can use a database like MongoDB or simply use local storage. So we’ve talked about what local storage is, when to use it, and how we can store data in it.



*/




