import React, { Suspense } from "react";
import Login from "./Components/Login";
import ToDolIst from "./Components/ToDolIst";
import Posts from "./Components/Posts";
function App() {
  return (
    <>
        <Suspense fallback={<div>Loading.....</div>}>
          <h1>App Componenet</h1>
          {/* <Login /> */}
          <hr></hr>
          {/* <ToDolIst /> */}
          <hr></hr>
          <Posts />
        </Suspense>
    </>
  );
}

export default App;
