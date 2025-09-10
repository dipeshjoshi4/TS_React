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