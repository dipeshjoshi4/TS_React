
//!126 Lec11-useMemo() – Performance Optimization

//In this lecture, we talked about how to use the useMemo hook in React.
//We explained how you can memoize a value so that expensive calculations don’t slow down other state updates.
//We used a clear example to show how useMemo helps in preventing unnecessary recalculations. We also discussed the difference between useMemo and useEffect, and when to use each one.

// its a technique for improving the performance of the code
// its useful to avoid expensive calculation on every render when the return value is not chnaged

//?Example

//?Problem
//when my number chnages then my rendering comes .there is no relation of toggle with number.so its expensive function first of all delay the output and also calling rendering on toggle too.....

//?solution
//- i wnat to stop the redenring console => while toggle how to do it and then comes Memoization in picture
//- also want to delay

//?useEffect vs useMemo
// - useEffect Hook Cant return and cant store on any varible
// - where useMemo used

//?CODE -MyUseMemo.jsx

import React, { useMemo, useState } from 'react'


function expensiveFunction(number) {
    console.log("Calculating....");
    for (let i = 0; i < 1000000; i++) {
        return number * 3
    }
}

const MyUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }
    const MemoCalculation = useMemo(() => {
        return expensiveFunction(number)
    }, [number])

    // const calculation = expensiveFunction(number) //?Chnage

    return (
        <div style={cssStyle}>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.valueAsNumber) }} />
            <h3>Calculation Output :{MemoCalculation}</h3>
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}

export default MyUseMemo