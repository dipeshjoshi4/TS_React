import React, { Suspense, useState } from 'react'

const ChildComp = React.memo(({ count }) => {
  console.log("Child Component");
  return <h2>Value is {count}</h2>
})

//Code Spliting with React.lazy and Dynamic Import
const About = React.lazy(() => import("./Components/About"))
const Contact = React.lazy(() => import("./Components/Contact"))


function App() {

  //1
  console.log("Parent Component")
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const [showAbout, setAbout] = useState(false)
  const [showContact, setContact] = useState(false)

  //2


  return (
    <>
      <h2>1-Unnecessary Component Re-render or call solve using React.memo()</h2>
      <div>
        <ChildComp count={count} />
        <button onClick={() => { setCount(count + 1) }}>Click Me</button>
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
      </div>
      <h2>2-Code Spliting with React.lazy and Dynamic Import</h2>
      <button onClick={() => { setAbout(true) }}>Load About Component</button>
      <button onClick={() => { setContact(true) }}>Load Contact Component</button>
      <Suspense fallback={<p>Loading Components....</p>}>
        {showAbout && <About />}
        {showContact && <Contact />}
      </Suspense>
    </>
  )
}

export default App
