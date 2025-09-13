import React, { useEffect, useRef, useState } from 'react'

const MyUseRef = () => {
    const [name, setName] = useState("")

    const count = useRef(0)
    useEffect(() => {
        count.current = count.current + 1;
    })

    const inputEle = useRef("");
    console.log(inputEle.current) //get Input Element

    const handleClick = () => {
        console.log(inputEle.current) // we get dom element input and we can manipulation
        inputEle.current.style.width = "300px"
        inputEle.current.style.color = "red"
        inputEle.current.focus()
    }

    //?it dont work for one time and infinite loops render
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     setCount(count + 1)
    // }, [count])
    
    return (
        <>
            <h1>MyUseRef</h1>
            <input type="text" ref={inputEle} onChange={(e) => { setName(e.target.value) }} />
            <h3>Name : {name}</h3>
            <h4>Renders: {count.current}</h4>
            <button onClick={handleClick}>Click For Width</button>
        </>
    )
}

export default MyUseRef