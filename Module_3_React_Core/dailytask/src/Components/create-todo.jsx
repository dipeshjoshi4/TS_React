import { useState } from "react";

const CreateTodo = () => {

    const [count, setCount] = useState(0);

    const [input, setInput] = useState("");

    const tasks = ["Task1", "Task2", "Task3", "Task4", "Task5"]

    const handleClick = () => {
        setCount(count + 1);
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <h1 className="btn">With State : {count}</h1>
            <input type="text" onChange={handleChange} />
            <button onClick={handleClick}>Add Task</button>
            <h2>{input}</h2>
            <ul>
                {
                    tasks.map((task) => <li key={task}>{task}</li>)
                }
            </ul>
        </>
    )
}
export default CreateTodo;