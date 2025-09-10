import React, { useState, useEffect } from 'react'

const MyFunctionComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEfefct:Component Mount")
        return () => { console.log("Remove from the DOM") }

    }, [])

    useEffect(() => {
        console.log("useEfefct:Component re-render")
    }, [count])
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add By Fn</button>
        </div >
    )
}

export default MyFunctionComponent