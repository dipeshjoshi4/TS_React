import React, { useReducer } from 'react'

const intialState = { name: "", email: "", age: "" }

function reducer(state, action) {

    switch (action.type) {
        case "updateField":
            return {
                ...state,
                [action.field]: action.value,
            }
        case "reset":
            return intialState;
        default:
            return state;
    }
}

const User = () => {
    const [state, dispatch] = useReducer(reducer, intialState)
    const handleChange = (e) => {
        dispatch({
            type: "updateField",
            field: e.target.name,
            value: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data", state)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={state.name} placeholder='Enter The Name' onChange={handleChange} />
            <input type="email" name="email" value={state.email} placeholder='Enter The email' onChange={handleChange} />
            <input type="number" name="age" value={state.age} placeholder='Enter The age' onChange={handleChange} />
            <button>Submit</button>
            <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>

        </form>
    )
}

export default User