import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Common/Loader';

const Sellers = () => {

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState("")

  const [name, setName] = useState();



  // useEffect(() => {
  //   //? Directly upodating dom
  //   //Example-1
  //   // document.title = `Name is ${name}`;
  //   //Example-2
  //   // const heading = document.querySelector("h3");
  //   // heading.style.color = "red";
  //   console.log("Component Mount")
  //   return (() => {
  //     console.log("Componenet UNMOUNT!!!")
  //   })
  // }, [name])

  //?through fetch we get data
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").
  //     then((res) => res.json()).
  //     then((data) => console.log(data)).catch(()=>{})
  // },[])

  //?through Axios
  useEffect(() => {

    fetchUser()

    // setIsLoading(true)
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   setUsers(res.data);
    //   setIsLoading(false);
    // })
    //   .catch((err) => {
    //     setErrors(err.message)
    //     setIsLoading(false)
    //   })

  }, [])


  const fetchUser = async () => {
    try {
      setIsLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data);
      setIsLoading(false);
    } catch (err) {
        setErrors(err.message)
        setIsLoading(false)
    } finally {
      console.log("all good at the end!!")
    }
  }

  const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    setUsers([newUser, ...users])

    //ACTUL POST REQUEST to server

    axios.post("https://jsonplaceholder.typicode.com/users", newUser).then((res) => {
      setUsers([res.data, ...users])
    }).catch((err) => {
      setErrors(err.message);
      setUsers(users)
    })
  }

  //ACTUL Delete REQUEST to server

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id))
    axios.delete("https://jsonplaceholder.typicode.com/users/${id}").catch((err) => {
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
    
    axios
      .patch("https://jsonplaceholder.typicode.com/users/${user.id}", UpdateUser)
      .catch((err) => {
        setErrors(err.message)
        setUsers(users)
    })
  }



  return (
    <>
      <h3>Admin Sellers Page</h3>

      <input type='text' onChange={(e) => { setName(e.target.value) }} />

      <button onClick={addUser}>ADD USER</button>

      {isLoading && <Loader />}

      {errors && <em>{errors}</em>}

      <table>
        <tbody>

          {users.map((user) => (

            <tr key={user.id}>

              <td>
                <p key={user.id}>{user.name}</p>
              </td>

              <td>
                <button onClick={() => { deleteUser(user.id) }}>Delete</button>
              </td>

              <td>
                <button onClick={() => { updateUser(user) }}>Update</button>
              </td>

            </tr>
          ))}

        </tbody>
      </table>



    </>
  )
}

export default Sellers