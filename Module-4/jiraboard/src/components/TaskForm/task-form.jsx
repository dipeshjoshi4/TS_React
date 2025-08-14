import "./task-form.css";
import Tag from "../Tag/Tag";
import { useState } from "react";

const TaskForm = ({ setTasks }) => {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "Ready For Development",
        tags: [],
    })

    const checkTag = (tag) => {
        return taskData.tags.some((item) => item === tag);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks((prev) => {
            return [...prev, taskData]
        })
    }

    const selectedTag = (tag) => {
        setTaskData((prev) => {
            const isSelected = prev.tags.includes(tag);
            const tags = isSelected ? prev.tags.filter((item) => item !== tag) : [...prev.tags, tag]
            return { ...prev, tags }
        })
    }

    console.log(taskData);

    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Class Details' className='task_input' name="task" onChange={handleChange} />
                <div className='task_form_bottom'>
                    <div>
                        <Tag tagName="DEV" selectedTag={selectedTag} selected={checkTag("DEV")} />
                        <Tag tagName="QA" selectedTag={selectedTag} selected={checkTag("QA")} />
                        <Tag tagName="Product Owner" selectedTag={selectedTag} selected={checkTag("Product Owner")} />
                    </div>
                    <div>
                        <select className='task_status' onChange={handleChange} name="status">
                            <option value="Ready For Development">Ready For Development</option>
                            <option value="In Progress"> In Progress</option>
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