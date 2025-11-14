import { useState } from "react"
import Display from "./Components/Display"
import Control from "./Components/Control"

function App() {
  const [count, setCount] = useState(2) //Uplift the state => we pass the state variable  as props in component child from parent
  return (
    <>
      <Display count={count} />
      <Control setCount={setCount} count={count} />
    </>
  )
}

export default App
