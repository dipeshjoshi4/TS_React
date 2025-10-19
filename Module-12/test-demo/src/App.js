import React, { useState, useEffect } from 'react';
import { getUserData } from './UserData';  // Assuming getUserData is imported from the UserData file

const App = () => {
  const [users, setUsers] = useState([]);  // Initialize as an empty array to handle multiple users

  useEffect(() => {
    getUserData('https://reqres.in/api/users')  // Fetch user data from API
      .then(data => setUsers(data))  // Assuming data is an array of users
      .catch(error => console.error(error));
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;  // Show loading state if users array is empty
  }

  console.log(users.data)

  return (
    <div style={{ textAlign: "center" }}>
      {users?.data?.map((user) => (
        <div key={user.id}>
          <h1>{user.first_name} {user.last_name}</h1>  {/* Display user's full name */}
          <p>{user.email}</p>  {/* Display user's email */}
        </div>
      ))}
    </div>
  );
};

export default App;  // Ensure this is a default export
