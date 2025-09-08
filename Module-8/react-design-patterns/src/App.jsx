import Dashboard from "./Components/Dashboard";
import UserProfile from "./Components/UserProfile";
import UserContainers from "./containers/UserContainers"
import UserAuth from "./hoc/UserAuth";

import useWindowSize from "./hooks/useWindowSize"

import { Routes, Route } from "react-router-dom";

function App() {

  const { size } = useWindowSize()

  const CheckUserProfile = UserAuth(UserProfile);
  const CheckDashboard = UserAuth(Dashboard);

  return (
    <>
      <h1>Conatiner Presentation Design Pattern</h1>
      <UserContainers />
      <div>
        window Size : {size.height} * {size.width};
      </div>
      <hr></hr>
      <Routes>
        <Route path="/userprofile" element={<CheckUserProfile />} />
        <Route path="/dashboard" element={<CheckDashboard name="Ajay" />} />
        <Route path="/" element={<div> HOC Page And Welcomne To Login Page</div>} />
      </Routes>

    </>
  )
}

export default App
