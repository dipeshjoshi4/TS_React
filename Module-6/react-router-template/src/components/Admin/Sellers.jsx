import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Common/Loader';

const Sellers = () => {

  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState("")


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
    setIsLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    })
      .catch((err) => {
        setErrors(err.message)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <h3>Admin Sellers Page</h3>
      {isLoading && <Loader />}
      {errors && <em>{errors}</em>}
      {
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }

    </>
  )
}

export default Sellers