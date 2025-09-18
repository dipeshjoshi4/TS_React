import React, { useCallback, useMemo, useState, useTransition } from 'react'
import PrintTable from './PrintTable';


function expensiveFunction(number) {
    console.log("Calculating....");
    for (let i = 0; i < 100000000; i++) {
        return number * 3
    }
}


const MyUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const [pending, startTransition] = useTransition()
    const cssStyle = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
    }
    //?Memo
    const MemoCalculation = useMemo(() => {
        return expensiveFunction(number)
    }, [number])
    // const calculation = expensiveFunction(number) //?Chnage

    //?UseCalllback
    const calculateTables = useCallback(() => {
        return [number * 1, number * 2, number * 3, number * 4]
    }, [number])

    // const calculateTables = () => {
    //     return [number * 1, number * 2, number * 3, number * 4]
    // }


    return (
        <div style={cssStyle}>
            <input type="number" value={number}
                onChange={(e) => {
                    startTransition(() => {
                        setNumber(e.target.valueAsNumber)
                    })
                }
                } />
            {pending ? (<h1>Making Data</h1>) : `CalculationOutput :${MemoCalculation}`}
            {/* <h3>Calculation Output :{MemoCalculation}</h3> */}
            <PrintTable calculateTables={calculateTables} />
            <button onClick={() => setDark(!dark)}>Toggle</button>
        </div>
    )
}

export default MyUseMemo