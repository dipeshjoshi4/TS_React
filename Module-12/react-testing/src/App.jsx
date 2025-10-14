
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  return (
    <>
      <div>
        <h1 data-testid="heading">Hello Dipesh</h1>
        <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} />
        <button onClick={() => { console.log("i am clicked") }}>
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
