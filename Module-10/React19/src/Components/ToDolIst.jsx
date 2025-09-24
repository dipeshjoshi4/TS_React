import React, { useOptimistic, useState } from 'react'

const ToDolIst = () => {
    const [ToDos, setToDo] = useState([])

    const [optimisticTodo, setOptimisticTodos] = useOptimistic(ToDos, (oldToDos, newTodo) => [
        ...oldToDos, { text: newTodo, pending: true }
    ])

    const handleAddTodo = async (formData) => {
        const newTodo = formData.get("todo")
        setOptimisticTodos(newTodo)
        await new Promise((resolve) => { setTimeout(resolve, 1000) })
        setToDo((currentToDos) =>
            [...currentToDos, { text: newTodo, pending: false }]
        )
    }

    return (
        <div>
            <h1>ToDolIst</h1>
            <form action={handleAddTodo}>
                <input type="text" name="todo" placeholder="Enter the Name" />
                <button type='submit'>AddToDo</button>
            </form>
            {
                optimisticTodo.map((ToDo, index) =>
                    <div key={index}>
                        {ToDo.text}
                        {ToDo.pending && <span> Adding....</span>}
                    </div>
                )
            }
        </div>
    )
}

export default ToDolIst