import React from 'react'

const Display = ({ count }) => {
    const double = count * 2;
    {/* here we chnage the props value without create a state for them thats dervied state */ }

    return (
        <div>
            <h2>count is {count}</h2>
            <h2>double count is {double}</h2>  
        </div>
    )
}

export default Display