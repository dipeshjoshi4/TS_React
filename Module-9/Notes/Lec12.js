//!127 Lec-12-useCallback() – Memoizing Functions for Better Performance

//?CODE WILL BE IN useMemo.jsx

/*
- In this lecture, we covered the useCallback hook.
- If u want to memoize an entire function—especially if that function is doing some time-consuming calculation—useCallback is the way to go. 
- We explained it with a straightforward example, similar to useMemo, but here you’re memoizing the function instead of just a value.
- This helps ensure that the function doesn’t run unnecessarily and doesn't affect other state changes.
- We also talked about how it differs from useMemo and when you should use it.

- usecallback is used return a memoized function
- it also used for preventing a function from being recreated or re-rendering
- it means that it basically prevent the function from being called again and again during re-renders
- in other words its stops the function from being recreated every time 

*/


//?in useMemo we have one value which is taking time consuming  so we get 
    const MemoCalculation = useMemo(() => {
        return expensiveFunction(number)
    }, [number])

//?its time whole function is taking time consuming so use useCallback
    const calculateTables = useCallback(() => {
        return [number * 1, number * 2, number * 3, number * 4]
    }, [number])

    // const calculateTables = () => {
    //     return [number * 1, number * 2, number * 3, number * 4]
// }
    
//?useMemo.jsx
/*

const calculateTables = useCallback(() => {
    return [number * 1, number * 2, number * 3, number * 4]
}, [number])
// const calculateTables = () => {
//     return [number * 1, number * 2, number * 3, number * 4]
// }


return (
    <div style={cssStyle}>
        <input type="number" value={number} onChange={(e) => { setNumber(e.target.valueAsNumber) }} />
        <h3>Calculation Output :{MemoCalculation}</h3>
        <PrintTable calculateTables={calculateTables} />
        <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>
)
}
*/

//?PrintTable.jsx
/*
import React, { useEffect, useState } from 'react'
const PrintTable = ({ calculateTables }) => {
    const [rows, setRows] = useState([])
    useEffect(() => {
        console.log("Print Tables")
        setRows(calculateTables()) // for getting an array
    }, [calculateTables])
    return (
        rows.map((row, index) =>
            (<p key={index}>{row}</p>)
        )

    )
}
export default PrintTable
*/