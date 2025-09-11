import MyStateComponent from "./Hooks/MyStateComponent"
import MyClassComponent from "./ReactLifeCycle/MyClassComponent"
import MyFunctionComponent from "./ReactLifeCycle/MyFunctionComponent"
import { useState } from "react"

function App() {

  const [show, setShow] = useState(true)

  return (
    <>

      <button onClick={() => { setShow(!show) }}>Toggle</button>
      {show && <MyFunctionComponent />}
      {/* {show && <MyClassComponent />} */}

      <MyStateComponent />

    </>
  )
}

export default App
