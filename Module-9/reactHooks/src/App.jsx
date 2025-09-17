// import MyStateComponent from "./Hooks/State/MyStateComponent"
// import MyClassComponent from "./ReactLifeCycle/MyClassComponent"
// import MyFunctionComponent from "./ReactLifeCycle/MyFunctionComponent"
// import { useState } from "react"
import MyUseEffect from "./Hooks/useEffect/MyUseEffect"
import MyUseRef from "./Hooks/useRef/MyUseRef"
import Parent from "./Hooks/useRef/Parent"
import { UserContext, UserContextProvider } from "./Context/UserContext"
import Counter from "./Hooks/useReducer/Counter"



function App() {

  // 1
  // const [show, setShow] = useState(true)

  //7-8
  // const [name, setName] = useState("Ajay")

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
      {/* <MyUseRef /> */}

      {/* 4-5-6 forwardref */}
      {/* <Parent/> */}

      {/* 7-Context API */}
      {/* <UserContext.Provider value={{ name, setName }}>
        <Parent />
      </UserContext.Provider> */}

      {/* 8- Modernize code and with Custom Hook */}
      {/* <UserContextProvider userDetails={{ name, setName }}>
        <Parent />
      </UserContextProvider> */}

      {/* 9 */}
      <Counter />





    </>
  )
}

export default App
