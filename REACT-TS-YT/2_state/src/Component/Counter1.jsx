import React, { useEffect } from 'react'

const Counter1 = ({ number }) => {

    useEffect(() => {
        console.log("Function Component Mounting:the first time load and render")
    })

    // useEffect(() => {
    //     console.log("Function Compount Update:Value chnage and Component updated")
    // }, [number])


    // useEffect(() => {
    //     return (() => {
    //         console.log("Function Component Will Remove : Removed")
    //     })
    // })




    return (
        <div><h1>{number}</h1></div>
    )
}

export default Counter1