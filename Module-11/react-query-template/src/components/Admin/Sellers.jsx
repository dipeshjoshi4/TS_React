import React, { useState } from 'react'
import Loader from '../Common/Loader';
import apiclient from '../../utils/api-client';
import useUsers from '../../hooks/useUsers';

const Sellers = () => {



  const { data: users, error, isLoading } = useUsers()

  const [name, setName] = useState();


  const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    setUsers([newUser, ...users])
  }

  /*


    //ACTUL POST REQUEST to server

    apiClient.post("/users", newUser).then((res) => {
      setUsers([res.data, ...users])
    }).catch((err) => {
      setErrors(err.message);
      setUsers(users)
    })
  }

  //ACTUL Delete REQUEST to server

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id))
    apiClient.delete("/users/${id}").catch((err) => {
      setErrors(err.message);
      setUsers(users)
    })
  }

  //ACTUL PATCH REQUEST TO SERVER

  const updateUser = (user) => {
    const UpdateUser = {
      ...user,
      name: user.name + "   Updated"
    }
    setUsers(users.map((u) => (u.id === user.id ? UpdateUser : u)))
    console.log(users);

    apiClient
      .patch("/users/${user.id}", UpdateUser)
      .catch((err) => {
        setErrors(err.message)
        setUsers(users)
      })
  }

  //ACTUL PUT

  const updateUserPut = (user) => {
    const UpdateUserPut = {
      ...user,
      username: user.username + " Updated",
      phone: user.phone.replace("", "567-")
    };

    // update locally
    setUsers(users.map((u) => (u.id === user.id ? UpdateUserPut : u)));

    // send API call with PUT
    apiClient
      .put(`/users/${user.id}`, UpdateUserPut)
      .catch((err) => {
        setErrors(err.message);
        setUsers(users); // rollback on failure
      });
  };

*/


  return (
    <>
      <h3>Admin Sellers Page</h3>

      <input type='text' onChange={(e) => { setName(e.target.value) }} />

      <button onClick={addUser}>ADD USER</button>

      {isLoading && <Loader />}

      {error && <em>{error.message}</em>}

      <table>
        <tbody>

          {users?.map((user) => (

            <tr key={user.id}>

              <td>
                <p>Name:{user.name}</p>
                <p>UserName:{user.username}</p>
                <p>Phone:{user.phone}</p>
              </td>

              <td>
                <button onClick={() => { deleteUser(user.id) }}>Delete</button>
              </td>

              <td>
                <button onClick={() => { updateUser(user) }}>Update</button>
              </td>

              <td>
                <button onClick={() => { updateUserPut(user) }}>UpdatePUT</button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>



    </>
  )
}

export default Sellers