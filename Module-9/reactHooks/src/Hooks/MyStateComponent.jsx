import React, { useState } from 'react'

const MyStateComponent = () => {
    const [name, setName] = useState("Dipesh")
    function ChangeName() {
        return setName("Dipesh Joshi");
    }
    return (
        <>
            <h1>Hello ,{name}</h1>
            <button onClick={ChangeName}>Click Me</button>
        </>
    )
}
export default MyStateComponent