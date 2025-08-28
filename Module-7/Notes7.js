
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


//!99 Lecture-3-Unmounting Components with useEffect (Cleanup Function)
/*
- In this lecture, we dived into the concept of how to properly unmount a component in a React application.
- We explored how the useEffect hook provides a way to perform cleanup and handle unmounting logic, ensuring that components are removed from the DOM cleanly.
- By the end of this lecture, you’ll have a solid understanding of how to manage the lifecycle of functional components, especially when it comes to unmounting

- nothing happen directly in dom first VDOM then newVDOM have different name and then comparision then diffing throughh.....

- for unmount or clean up function you just have to in same useEffect right callback when component change the the component unmount 

- when other page click this working page change we getting that by useEffect first vdom -> copy of vdom and then change refelect on dom

*Sellers.jsx

const Sellers = () => {
  const [name, setName] = useState();
  useEffect(() => {
    console.log("Component Mount")
    return (() => {
      console.log("Componenet UNMOUNT!!!")
    })
  }, [name])


*/

//!100 Lecture-4-Client Server Architecture and HTTP Essentials for Frontend Developers

/*
- In this lecture, we covered the fundamentals of client-server architecture.
- We discussed how a client sends requests to a server, how the server responds, and what technologies are commonly used on the frontend and backend. 
- Additionally, we delved into essential HTTP methods and HTTP status codes that are crucial for working with APIs. These are foundational concepts that every frontend developer should understand when dealing with data fetching and backend communication


- so there is one user whoch have frontend means UI with some techstack it made ......other side backend with sometechstack it made and its server

- client send some reuqest for get data for post data partial chnage ,pure chnage there is lot of http request came
- server also m,ade api that defiend if this request cam e then this http response came , if this then that response

- so there is different methods with request as per ask you send the method and request 

?SOURCE =>see this http-methods.png in Module-7

IF SERVER gives response also have some http code who hide some msg =>  200 for success | 404 not found .....



*/

//!101 lecture-5-Fetching Data from a Server: Using Fetch and Axios

/*
- In this lecture, we made an API call to retrieve data from the server using the GET method.
- We first demonstrated how to do this with the Fetch API, and then we showed how to achieve the same result using Axios.
- By the end of this session, you'll understand how to fetch data from a server using Axios Library

- So we Get Data from backend in es6 we learn fetch so let take example of fetch 

?Through Fetch Function

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").
      then((res) => res.json()).
      then((data) => console.log(data)).catch(()=>{})
  },[])

- fetch first time give object then we parsed json data array of object
- here if you see the data came and just to convert it from json format we use "res.json" and then as usal that gives use return so for that we have to use again then and get the actual Data

?Through Axios Function



*/