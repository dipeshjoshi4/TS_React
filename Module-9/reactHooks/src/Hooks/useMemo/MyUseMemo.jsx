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