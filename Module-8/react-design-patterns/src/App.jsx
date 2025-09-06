import UserContainers from "./containers/UserContainers"

import useWindowSize from "./hooks/useWindowSize"

function App() {

  const { width, height } = useWindowSize()

  return (
    <>
      <h1>Conatiner Presentation Design Pattern</h1>
      <UserContainers />
      <div>
        window Size : {height} * {width};
      </div>
    </>
  )
}

export default App
