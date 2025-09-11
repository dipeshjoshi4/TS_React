
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

  function addNames(e) {
        e.preventDefault();
        ? setNames(names.push({ id: name.length, name })) ?it will give count .it will not give new array while adding element
        setNames([...names, { id: name.length, name }])
    }
    console.log(names
return(
<>
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
        }
    </ul>
</>
)

? Note : Old Way To Chnage in Array
? setNames(names.push({ id: name.length, name })) ?it will give count .it will not give new array while adding element

?issues
setNames(names.push({ id: name.length, name }))

?Explain
.push() mutates the original array → it directly changes names, which React doesn’t detect as a state change (bad practice).
.push() returns the new length of the array → so you’re actually calling setNames(3) (if array length becomes 3), not passing a new array.

*/
