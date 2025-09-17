import React, { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, actions) {
  switch (actions.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decreemnt":
      return { count: state.count - 1 }
    case "reset":
      return { count: 0 }
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Counter is {state.count}</h1>
      <button onClick={() => { dispatch({ type: "increment" }) }}>+</button>
      <button onClick={() => { dispatch({ type: "decreemnt" }) }}>-</button>
      <button onClick={() => { dispatch({ type: "reset" }) }}>Reset</button>
    </div>
  )
}

export default Counter