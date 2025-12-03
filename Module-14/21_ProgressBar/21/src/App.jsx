import React, { useState, useEffect } from "react"

function App() {
  const [progress, setProgress] = useState(0);
  const [start, setStart] = useState(false)

  useEffect(() => {

    if (!start) return;

    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => prev + 5)
      }, 60);
      return () => clearTimeout(timer)
    }

    else {
      setStart(false) //?EsLint dont undertsnad Logic that why this happen
    }

  }, [start, progress])

  return (
    <>
      <div style={{ padding: 20 }}>
        <div style={{ width: 300, background: "#eee", height: 25 }}>
          <div style={{ width: `${progress}%`, height: "100%", background: "green" }}></div>
        </div>
      </div>
      <button onClick={() => {
        setProgress(0);
        setStart(true)

      }}>Click Me</button >
    </>
  )
}

export default App
