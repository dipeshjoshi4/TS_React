import React from "react"
import { memo } from 'react'

const Child = ({ counterTwo, fun }) => {
    console.log("Child Component render")
    // console.log(counterTwo)
    // console.log(fun)
    return (
        <div>
            <h1>Hello Child</h1>
        </div>
    )
}

// export default Child
export default memo(Child)