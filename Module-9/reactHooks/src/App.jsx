// import MyStateComponent from "./Hooks/State/MyStateComponent"
// import MyClassComponent from "./ReactLifeCycle/MyClassComponent"
// import MyFunctionComponent from "./ReactLifeCycle/MyFunctionComponent"
// import { useState } from "react"
import MyUseEffect from "./Hooks/useEffect/MyUseEffect"
import MyUseRef from "./Hooks/useRef/MyUseRef"


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
      {/* <MyUseEffect /> */}

      {/* 4 */}
      <MyUseRef />


    </>
  )
}

export default App
