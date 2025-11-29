
import React from 'react';
import { useState } from 'react';


const StateTutorial = () => {
    const [input, SetInput] = useState("Ajay");
    console.log(input)

    const onChange = (e) => {
        SetInput(e.target.value)
    }
    return (
        <div>
            <h1>{input}</h1>
            <input type='text' placeholder='Type Something....' value={input} onChange={onChange}></input>
        </div>
    )
}

export default StateTutorial



// state is mutable it can change
// you can particular thing will be chnage if you want and that thing only chnage that make react more faster | not refresh | good Ui