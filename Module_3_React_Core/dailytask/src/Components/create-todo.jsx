import { useState } from "react";
const CreateTodo = () => {
    const [count, setCount] = useState(0); // => countArr is gives use array [0,f()]
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1 className="btn">With State : {count}</h1>
            <button onClick={handleClick}>Add Task</button>
        </>
    )
}
export default CreateTodo;