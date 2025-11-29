import React from 'react'
import { useState, useMemo } from "react";

const UseMemo = () => {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        console.warn("......")
        return counterOne % 2 === 0
    }, [counterOne])



    return (
        <div>
            <button onClick={incrementOne}>CounterOne-{counterOne}</button>
            <span>{isEven ? "Even" : "odd"}</span>
            <button onClick={incrementTwo}>counterTwo-{counterTwo}</button>
        </div>
    )
}

export default UseMemo