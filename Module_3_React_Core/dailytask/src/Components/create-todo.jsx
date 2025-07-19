const CreateTodo = () => {

    let task = 0;

    const handleClick = () => {
        task++;
        console.log("Button Clicked", task)
    }

    const isDisable = false;

    // const style = {
    //     color: "pink",
    //     fontSize: "18px"
    // }
    // // => for apply write in inline = style={style}

    // const countTask = () => {
    //     if (task === 0) {
    //         return "No Task Is Available!!!"
    //     } else {
    //         return `Total Task is ${task}`;
    //     }
    //     return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    // }

    // const countTask = () => {
    //     return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    // }

    return (
        <>
            <h1 style={{ color: "red", fontSize: "80px" }} className="btn" >{task}</h1>
            <button disabled={isDisable} value="add some value" onClick={handleClick}>Add Task</button>
        </>
    )
}
export default CreateTodo;