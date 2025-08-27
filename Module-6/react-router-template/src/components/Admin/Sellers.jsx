import React, { useEffect, useState } from 'react'

const Sellers = () => {
  const [name, setName] = useState();

  useEffect(() => {
    // Directly upodating dom
    //Example-1
    // document.title = `Name is ${name}`;
    //Example-2
    // const heading = document.querySelector("h3");
    // heading.style.color = "red";
    console.log("Component Mount")
    return (() => {
      console.log("Componenet UNMOUNT!!!")
    })
  }, [name])

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type='text' onChange={(e) => { setName(e.target.value) }} />
    </>
  )
}

export default Sellers