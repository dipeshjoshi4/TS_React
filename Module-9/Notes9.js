//!----------------------------------Module 9: Deep Dive into React Hooks--------------------------


//!116 Lecture-1-Understanding React Lifecycle Methods: Class vs Functional Components

/*
- In this lecture we have covered React lifecycle methods. 
- We’ve explored how they work in class components with good use cases, and also how to achieve the same in functional components.
- React’s lifecycle is really crucial—it's the foundation of how React works. 
- We’ve broken down 
        ?- mounting,
        ?- unmounting,
        ?- re-rendering in detail,
- so you’ll understand exactly how the React lifecycle works in practice. By the end of this lecture, you’ll have full clarity on the topic.

*/

/*

Mount - first time diplay on dom
Re-render - Update or chnage
Unmount - Whatever render or re-redner ,Channge You do in Component You Dismiss that component from dom

?Here we learn how we mountin unmounting or r-rende rhappen in class compo

class Component -> constructor -> render -> componentDidMount -> (onStateChange)Render -> ComponentDidUpdate ->
 (onRemovel)componentWillUnmount

 ?class

 import React, { Component } from 'react'

export default class MyClassComponent extends Component {

    constructor(props) {
        super(props);  //pass this props to this Component Constructor 
        this.state = { count: 0 };
        console.log("1️⃣Constructore:Intial Setup")
    }

    componentDidMount() {
        console.log("3️⃣componentDidMount = Component Added To Dom First Time")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("4️⃣componentDidUpdate: when state/props Chnage", prevProps, prevState)
    }

    componentWillUnmount() {
        console.log("5️⃣componentWillUnmount:componenet remove from DOM ")
    }

    render() {
        console.log("2️⃣Render=UI Render")
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 })
                }}>Add By One</button>
            </div>
        )
    }
}

?Function
import React, { useState, useEffect } from 'react'
const MyFunctionComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEfefct:Component Mount")
    }, [])
    useEffect(() => {
        console.log("useEfefct:Component re-render")
        return () => { console.log("Remove from the DOM") }
    }, [count])
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add By Fn</button>
        </div >
    )
}
export default MyFunctionComponent


?App.jsx
import MyClassComponent from "./ReactLifeCycle/MyClassComponent"
import MyFunctionComponent from "./ReactLifeCycle/MyFunctionComponent"
import { useState } from "react"
function App() {
  const [show, setShow] = useState(true)
  return (
    <>
       <MyClassComponent />
      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <MyFunctionComponent />}
    </>
)
        

? Here for UnmOunt in useEffect  we have just  return () => { console.log("Remove from the DOM") }

  useEffect(() => {
        console.log("useEfefct:Component re-render")
        return () => { console.log("Remove from the DOM") }
    }, [count])

? Runs on when click button then count increase and unmount  comes 
- because when useEffect runs and depdend on count so you have to see unmount from the dom and re-redner both will see in console


?✅ How to log only on true unmount Happen

If you want "Remove from the DOM" to show only when the component actually unmounts, you need to put it inside a useEffect with an empty dependency array []:

import React, { useState, useEffect } from 'react'

const MyFunctionComponent = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("useEffect: Component Mount")

        return () => {
            console.log("Remove from the DOM") // runs only on unmount
        }
    }, [])  // ✅ runs once on mount, cleanup on unmount

    useEffect(() => {
        console.log("useEffect: Component re-render")
    }, [count]) // ✅ runs only when count changes

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add By Fn</button>
        </div>
    )
}
export default MyFunctionComponent



*/

//!117 Lecture-2-useState() Hook : When and How to Use It Effectively

/*
In this lecture, we thoroughly learned about the useState hook.
We covered when you should and shouldn't use useState, and we looked at examples of using it with numbers, strings, booleans, arrays, and objects. 
This is a full tutorial that will give you a lot of confidence on how and when to use useState in various scenarios.
*/

/*
?For String WithouT State
import React from 'react'
const MyStateComponent = () => {
    let a = "Dipesh ";
    function ChnageName() {
        console.log("Clicked!!!")
        a = "Dipesh Joshi";
        return a;
    }
    return (
        <>
            <h1>Hello ,{a}</h1>
            <button onClick={ChnageName}>Click Me</button>
        </>
    )
}
export default MyStateComponent

?Output
- String Clicked in Console show but the name from "Dipesh" to "Dipesh Joshi" Can't Happen in here
- as per state we used

?Some Rules
- console.log(useState(0)); //?object which intial and function | to chnage intial value we have to use Function
- also not use in condition oiperation | if...else.. | in callback or in function

?For String With State

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

?Boolean With State
const MyStateComponent = () => {
    const [name, setName] = useState("Dipesh")
    const [flag, setFlag] = useState(false)
    function ChangeName() {
        return setFlag(!flag);
    }
    return (
        <>
            <h1>Hello ,{flag ? name : ""}</h1>
            <button onClick={ChangeName}>Click Me</button>
        </>
    )
}

?Explanation:-

name state → Holds "Dipesh". (You’re not changing it in this code.)
flag state → Starts as false.
ChangeName function → Flips flag (true ↔ false).
JSX render →
If flag === true, you see: Hello ,Dipesh
If flag === false, you see: Hello ,

?Number

    const [count, setCount] = useState(0)
    function increment() {
        return setCount(count + 1)
    }   
    function decrement() {
        return setCount(count - 1)
    }
    return(
            <>
                <button onClick={increment}>Increment</button>
                    <h2>{count}</h2>
                <button onClick={decrement}>Decrement</button>
            </>
    )

?Explanation

    function increment() {
        console.log(count)           ?it will prove that its async code and it will always one incremeent behind
        return setCount(count + 2)   ?how many state you identify latest will be counted whether its different or same
        setCount((prev) => prev + 1) ?in here prevState Concept in useState use and thats y 2 time increment happen
        setCount((prev) => prev + 1)
    }  

? Array








*/