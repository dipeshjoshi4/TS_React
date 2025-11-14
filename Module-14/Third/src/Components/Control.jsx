
import React from "react";

const Control = ({ count, setCount }) => {

    const triple = count * 3;   // 👉 derived state

    return (
        <div>
            <h2>Triple Count: {triple}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Control;