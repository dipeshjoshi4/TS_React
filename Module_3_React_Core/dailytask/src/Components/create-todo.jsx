const CreateTodo = () => {

    const task = 8;

    // const countTask = () => {
    //     if (task === 0) {
    //         return "No Task Is Available!!!"
    //     } else {
    //         return `Total Task is ${task}`;
    //     }
    //     return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    // }

    const countTask = () => {
        return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    }

    return (
        <>
            <h1 className="btn">{countTask()}</h1>
            <button>Add Task</button>
        </>
    )
}
export default CreateTodo;