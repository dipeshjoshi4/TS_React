import React, { useState } from 'react'

const MyStateComponent = () => {
    const [name, setName] = useState("Dipesh")
    const [flag, setFlag] = useState(false)
    const [count, setCount] = useState(0)
    const [names, setNames] = useState([])

    function ChangeName() {
        return setFlag(!flag);
    }

    function ChangeNameOnClick() {
        return setName("Dipesh H Joshi ")
    }

    function increment() {
        return setCount(count + 1)
    }
    function decrement() {
        return setCount(count - 1)
    }

    function addNames(e) {
        e.preventDefault();
        // setNames(names.push({ id: name.length, name })) //it will give count .it will not give new array while adding element
        setNames([...names, { id: name.length, name }])
    }
    console.log(names)

    return (
        <>
            <hr></hr>
            <h1>Hello ,{name}</h1>
            <button onClick={ChangeNameOnClick}>Click Me Change</button>
            <hr></hr>

            <h1>Hello ,{flag ? name : ""}</h1>
            <button onClick={ChangeName}>Click Me Flag</button>
            <hr></hr>

            <button onClick={increment}>Increment</button>
            <h2>{count}</h2>
            <button onClick={decrement}>Decrement</button>
            <hr></hr>

            <form onSubmit={addNames}>
                <input type="text"
                    placeholder='Enter Your Name'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }} />
                <button>Submit</button>
            </form>
            <ul>
                {
                    names.map((item,index) => (
                        <li key={index}>{item.name}</li>
                    ))
                
                    //?if same names  you add then unique.id issue cames
                    // names.map((item) => (
                    //     <li key={item.id}>{item.name}</li>
                    // ))
                }
            </ul>


        </>
    )
}
export default MyStateComponent