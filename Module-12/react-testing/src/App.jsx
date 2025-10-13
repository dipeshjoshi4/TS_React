
import './App.css'

function App() {
  return (
    <>
      <div>
        <h1 data-testid="heading">Hello Dipesh</h1>
        <button onClick={() => { console.log("i am clicked") }}>
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
