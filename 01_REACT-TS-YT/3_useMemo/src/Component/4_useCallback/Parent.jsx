import React from 'react'
import { useState } from "react";
import Child from './Child';
import { useCallback } from 'react';
// import { useEffect } from 'react';

const Parent = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState([]);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }


    const fun = useCallback(() => {
        console.log("Hello Dipesh!!!")
    }, counterTwo)
    // const fun = useEffect(() => {
    //     console.log("Hello Dipesh!!!")
    // }, [counterTwo])

    return (
        <div>
            <Child counterTwo={counterTwo} fun={fun} />
            <button onClick={incrementOne}>CounterOne-{counterOne}</button>
        </div>
    )
}

export default Parent