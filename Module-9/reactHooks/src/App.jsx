// import MyStateComponent from "./Hooks/MyStateComponent"
// import MyClassComponent from "./ReactLifeCycle/MyClassComponent"
// import MyFunctionComponent from "./ReactLifeCycle/MyFunctionComponent"
// import { useState } from "react"
import MyUseEffect from "./Hooks/MyUseEffect"


function App() {

  // 1
  // const [show, setShow] = useState(true)

  return (
    <>

      <h1>App Component </h1>

      {/* 1 */}
      {/* <button onClick={() => { setShow(!show) }}>Toggle</button> */}
      {/* {show && <MyFunctionComponent />} */}
      {/* {show && <MyClassComponent />} */}

      {/* 2 */}
      {/* <MyStateComponent /> */}

      {/* 3 */}
      <MyUseEffect />


    </>
  )
}

export default App
