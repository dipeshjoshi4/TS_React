

// //?Code

// //?App.js
// import { useState } from "react"
// import Display from "./Components/Display"
// import Control from "./Components/Control"

// function App() {
//     const [count, setCount] = useState(2) //Uplift the state => we pass the state variable  as props in component child from parent
//     return (
//         <>
//             <Display count={count} />
//             <Control setCount={setCount}  />
//         </>
//     )
// }

// export default App


// //?Display.js

// import React from 'react'

// const Display = ({ count }) => {
//     const double = count * 2;
//     {/* here we chnage the props value without create a state for them thats dervied state */ }

//     return (
//         <div>
//             <h2>count is {count}</h2>
//             <h2>double count is {double}</h2>
//         </div>
//     )
// }

// export default Display

// //?Control.jsx

// import React from 'react'

// const Control = ({ setCount }) => {
//     return (
//         <div>
// <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
//
//         </div>
//     )
// }

// export default Control


/*
function Display({count}) {
return (
        <div>
            <h2>count is {count}</h2>
            <h2>double count is {double}</h2>  
        </div>
    ) 
}

function Controls({setCount}) { 
return (
        <div>
            <button onClick={() => setCount((c) = count + 1)}>Increment</button>
        </div>
    )
}

const MyComponent = () => {
  const [count, setCount] = useState(2);

  return (
    <div>
      <Display count={count} />     //count IS PASSED HERE ✔
      <Controls setCount={setCount} />
    </div>
  );
};


*/