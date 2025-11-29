import React, { useEffect } from 'react'

const CounterFun = ({ number }) => {


    // useEffect(() => {
    //     console.log("Functional Component : Component Will Mount")
    // })

    // useEffect(() => {
    //     console.log("Functional Component : Component Will Update")
    // }, [number])

    useEffect(() => {
        return (() => {
                console.log("functional Component : removed")
        })

    }, [number])

  




return (
    <div>
        <h1>{number}</h1>
    </div>
)
}

export default CounterFun