import React, { useState } from 'react'

const ChildComp = React.memo(({ count }) => {

  console.log("Child Component");

  return <h2>Value is {count}</h2>
})


function App() {

  console.log("Parent Component")

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  return (
    <>
      <div>
        <ChildComp count={count} />
        <button onClick={() => { setCount(count + 1) }}>Click Me</button>
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      </div>
    </>
  )
}

export default App
