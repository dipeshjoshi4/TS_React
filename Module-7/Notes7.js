
//!---------------------------------------Module 7: API Integration & Error Handling in React
//! CODE ONE MODULE-6 For Notes Only Refer this file Notes7.js
// Module-7-

import { Component } from "react"


//?97 Lecture-1-Frontend & Backend Collaboration: API & Error Handling
/*

- In this lecture, I’ve discussed how a frontend developer collaborates with the backend team.
- We talked about the roles and responsibilities on both sides—what the frontend handles and what the backend team is responsible for.
- Since this module is all about API integration and error handling, naturally we’re covering how frontend and backend developers work together. I’ve tried to give you a sense of how this collaboration looks in a company and what we’re going to cover in this module.
- as FE i have to work on Data as API and optimized way to show on Fronend -put business validation,user experience at end was great 
* Main Topic
- useEffect
- Promise and async/await
- Axious libraray with put,post and delete method

*/

//!98 Lecture-2-Understanding useEffect and Its Dependency Array : Mounting & Re-Rendering
/*

?SYNTAX
useEffect(()=>{
      kya karna hai jo useEfect andar ho
},[kab karna dpednecy(jab depdency pe chnage ho tab) or empty(once)])

?3 time genrally our componenet render
- 1st time -> when componenet diplay on web -> Mounting
- 2nd time -> when in component something update or chnage -> re-render
- 3rd time -> when we unmount componente which is render and we have to compleetly remove from the dom -> Unmount

?for all above work we use => useEffect Hook
- used to perfrom for sideEffect Task in our Component
- side effects are the action which are perfromed with the outside world
?Example
 - fetching data from an API
 - directly updating the DOM
 - Timer Functions (setTimeout or setInterval)

?UseEffect Hook Syntax -> total 2 arguments 1st => callback & 2nd => dependency

?Let understand Mounting re-render and unmount

? CODE -> Sellers.jsx
import React, { useEffect, useState } from 'react'
const Sellers = () => {
  const [name, setName] = useState();
  useEffect(() => {
    console.log("Component Mount")
  }, [name])
  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type='text' onChange={(e) => { setName(e.target.value) }} />
    </>
  )
}
export default Sellers


- here when we go to sellers page we see first time mount in console

?1st dependecy is what to do?

?2nd depednecy is when to do ?
- if we dont pass 2nd depdendecy then re-render multiple time chnage occur
- if we pass [] then he dont re-render . only first time render happen onlyn which is mount
- if we pass [name] like wen occur chnage on name then we show the useEffect run .
all though we change name by useState but he keep track record

?one more thing we learn that directly updating dom.example is below but we dont have to do that .
?its not a good practise
?because react work on vdom chnage also happen with seen vdom so dont do chnage with vanilla js .overlapping issue happen.
? Example-1

    useEffect(() => {
      ? Directly upodating dom
      ?Example-1
      document.title = `Name is ${name}`;
      ?Example-2
      const heading = document.querySelector("h3");
      heading.style.color = "red";
      console.log("Component Mount")
    }, [name])

  
*/


//!99 Lecture-3-Fetching Data Using fetch() and Axios
