//!119 Lecture-4-useRef() in React – DOM Access & References & Avoiding Re-renders

//- The main purpose of useRef is to directly access DOM elements and to create mutable variables that don't cause a component to re-render.
//- We discussed how useRef can be an alternative to state variable without Re-renders the component.

// const first = useRef(second)


//?Ex-1-infinite
// useEffect(() => {
//         setCount(count + 1)
// })

//?Ex-2-infinite Time - because count++ happen , then again count chnage useEffect run count ++ happen
// useEffect(() => {
//         setCount(count + 1)
// },[count])

// //?Ex-3 - One Time
// useEffect(() => {
//         setCount(count + 1)
// }, [])

//? the main aim is we have to see many time render happen while writing on input so we use useEffect but it cant solve our problem
//- UseRef allows us to direct access DOM Elements
//- for Creating mutable variables which  will not re-render the component => count.


//?Why We Dont Use NAME DEPENDENCY ON count of re-renders
// useEffect(() => {
//         setCount(count + 1)
// }, [name])

//?Using useState
// When name changes, effect runs.
// setCount(count + 1) updates state → re - render.
// After re - render, you see the updated count.

//?Pros:
//It works.
//React automatically re - renders to show the updated count.

//?Cons:
//Every increment of count causes an extra re - render that you don’t really need.
//This can slow things down if you’re only trying to measure renders, not use the value for UI logic.
//You can’t count renders that happen for reasons other than name changing(like parent re - renders).

//?App.jsx

< MyUseRef />

//?MyUseRef.jsx
/*
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

*/

