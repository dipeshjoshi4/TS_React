import React, { useEffect, useState } from 'react'


const MyUseEffect = () => {
    console.log("rendering...")

    const [width, setWidth] = useState(300)

    useEffect(() => {
        console.log("Hello UseEffect", width)
        setWidth(600)
    }, [width])

    return (
        <div style={{
            width: `${width}px`,
            backgroundColor: "blue",
            height: "100px",
            transition: "width 1s",
        }}>
            MyUseEffect
            <hr></hr>

        </div>
    )
}

export default MyUseEffect

