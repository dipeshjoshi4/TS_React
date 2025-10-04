import React, { useState } from 'react'
import Loader from '../Common/Loader';
import apiClient from '../../utils/api-client';
import useUsers from '../../hooks/useUsers';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';

const Sellers = () => {
  const { data: users, error, isLoading } = useUsers()
  const [name, setName] = useState("");
  const QueryClient = useQueryClient()



  //?-----------------------------ADD Functonality---------------------

  const addUserMutation = useMutation({
    mutationFn: (newUser) => apiClient.post("/users", newUser).then((res) => (res.data)),
    onSuccess: (savedUser) => {
      console.log(savedUser) //=> what ever latest add will be stored in savedUser
      //?1st cach invalid
      // QueryClient.invalidateQueries({
      //   queryKey: ["users"],
      // })
      // setName("")
      //?2nd cache to copy in savedUser
      QueryClient.setQueryData(["users"], (user) => [savedUser, ...user])
      setName("")

    },
    //this error on addusemutation on backend in console 
    onError: (error) => {
      console.log(error.message)
    }
  })
  //Add User
  const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    addUserMutation.mutate(newUser)
  }


  //?-----------------------------Delete Functonality---------------------
  const deleteUserMutation = useMutation({
    mutationFn: () => {
      apiClient.delete("/users/${id}").then((res) => res.data)
    },
    //APi Responsone on success in  delet user function
  })

  //Delete
  const deleteUser = (id) => {
    deleteUserMutation.mutate(id, {
      onSuccess: () => {
        QueryClient.setQueryData(
          ["users"],
          (users) => users.filter((u) => u.id != id))
      }
    })
  }

  //?-----------------------------Update Functonality---------------------
  const updateUserMutation = useMutation({
    mutationFn: (updateUser) => apiClient.patch(`/users/${updateUser.id}`, updateUser).then((res) => res.data),
    onSuccess: (updateUser) => {
      QueryClient.setQueryData(["users"], (users) => users.map((u) => (u.id === updateUser.id ? updateUser : u)))
    },
  })
  //?Patch
  const updateUser = (user) => {
    const updateUser = {
      ...user,
      name: user.name + "   Updated"
    }
    updateUserMutation.mutate(updateUser)
  }



  /*
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

      <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} />

      <button onClick={addUser} disabled={addUserMutation.isPending}>
        {addUserMutation.isPending ? 'ADDING USER' : 'ADD USER'}
      </button>

      {isLoading && <Loader />}
      {addUserMutation.isPending && <Loader />}

      {error && <em>{error.message}</em>}

      {/* Privatly for addUserMutation error in frontend side show if had */}
      {addUserMutation.error && <em>{addUserMutation.error.message}</em>}

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

              {/* <td>
                <button onClick={() => { updateUserPut(user) }}>UpdatePUT</button>
              </td> */}

            </tr>
          ))}

        </tbody>
      </table>



    </>
  )
}

export default Sellers