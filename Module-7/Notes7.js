
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

- first intsall "npm i axios" in react-router-template means in your main project file

?CODE
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => console.log(res.data))
  })
  
- in axios u dont have to use 2 time then here you just simply write res.data u will get data 
- from webdev tools from browser Network -> fecth/xhr -> you can see request get | previous | intieter -> means who acces this data from where (sellers)
- all methods ,metadata,ip of system all things you see there

? Directly Print Data on Screen with help of map
  return (
    <>
      <h3>Admin Sellers Page</h3>
      {
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }
    </>

*/

//!102 Lecture-6-Enhancing User Experience with Loaders and Error Handling"

/*
- In this lecture, we added a loader to improve the user experience.
- Essentially, if data doesn’t come back from the API immediately, a loading spinner will appear, just like you’ve probably seen elsewhere. 
- We also covered how to display an error message if something goes wrong.
-  This is all about making the user's experience smoother and more user-friendly, and that's what we've covered in this lecture.


- through done that we have specify a loader in common folder in components folder
?through Axios

import axios from "axios"
import Loader from '../Common/Loader';

const Sellers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => { setUsers(res.data) })
    setIsLoading(false)
  }, [])
  return (
    <>
      <h3>Admin Sellers Page</h3>
      {isLoading && <Loader />}
      {
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      }

    </>
  )
}
export default Sellers


*/

//! 103 Lecture-7-Mastering Error Handling in API Calls

/*
- In this lecture, we covered how to implement error handling when making API calls.
- Sometimes the internet might not be available, or the API may not respond properly. 
- In such cases, it’s important to handle errors gracefully to ensure a smooth user experience.
- This lecture explains how to detect and manage these errors effectively.

? Sellers.jsx

import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loader from '../Common/Loader';

const Sellers = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("")

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


*/

//!104 Lecture-8-Modernizing Code with Async/Await for Better Readability

/*

- In this lecture, we took the code we had written so far and rewrote it in a more modern style using async and await.
- This approach makes the code more readable, easier to maintain, and simpler to understand. It helps keep things clean

?We make this below code from modern syntax

  ?through Axios
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


  ?-----------------------------------convert into this ---------------------

   useEffect(() => {
    fetchUser()
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
    }finally{
        console.log("all good ")
    }
  }

?Notes

asunc ...await have to use vecause promise comes 
with async await you cant use then
using try ...catch block


*/

//! 105 Lecture-9-Handling POST Requests with Axios

/*
- In this lecture, we covered how to handle POST requests using Axios. 
- We demonstrated how to send data from the client side to a server and how that data can be stored in a database. 
- The logic we implemented will work with an actual API, giving you a clear idea of how to use Axios for POST requests in real-world applications. 
- We also discussed how to structure the request body properly and handle responses or errors effectively.

- client to server send POST request which server (backend) process and that data get by client we get on screen

- for sending data we use click button and some data => that scenario we use POST request only

- best way to POST data while working in react you have to make list of data and connect with the old state which we create here
- so we made button -> click handle the function ....normal way
- when you add the new user make sure give name but make sure you give ID =>  id : users.length+1
- then we setName([...users,newUser]) => [in array old list of user + new user ]


? Sellers.jsx

const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    setUsers([newUser, ...users])
  }
return (
   <input type='text' onChange={(e) => { setName(e.target.value) }} />
   <button onClick={addUser}>ADD USER</button>
)


?Two Way Update Data

?Optimistic Update
Update Data On UI -------->Call API TO UPDATE DATA ON UI
- means first make user see like your task is done IN UI and then backend update while api call in time

?Pessimistic Update
call API to update Data at Backend --------------->  Update Data on UI
- vice-Versa

?now we send POST request
    axios.post("https://jsonplaceholder.typicode.com/users", newUser).then((res) => {
      setUsers([res.data, ...users])
    }).catch((err) => {
      setErrors(err.message);
      setUsers(users)
    })
  }
  
  ?FInal CODE
    const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    setUsers([newUser, ...users])
    axios.post("https://jsonplaceholder.typicode.com/users", newUser).then((res) => {
      setUsers([res.data, ...users])
    }).catch((err) => {
      setErrors(err.message);
      setUsers(users)
    })
  }

*/


//!106 Lecture-10-Handling DELETE Requests with Axios

/*
- In this lecture, we’ve covered how to perform DELETE requests using Axios.
- You'll gain a complete understanding of how to use Axios to remove data from a server. 
- By the end, you’ll know exactly how to implement and manage DELETE operations in your own applications.

?Note -  axios.delete("https://jsonplaceholder.typicode.com/users/${id}").catch((err) => {
?- here you have to given id 

?ACTUL Delete REQUEST to server

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id))
    axios.delete("https://jsonplaceholder.typicode.com/users/${id}").catch((err) => {
      setErrors(err.message);
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
)


*/

//!107 Lecture-11-Handling PATCH Requests with Axios

/*

- In this lecture, we’ve covered how to achieve PATCH requests using Axios.
- We took a simple example to show how you can update just one field out of multiple fields in a resource without modifying the entire record.
- If you want to update the entire resource, you would typically use a PUT request instead.
- We focused on the PATCH example here so you can understand how to partially update data using Axios.

?path -> when you have to chnage slective resource to get chnage then use PATCH
?PUT -> WHEN YOU HAVE TO USE ALL THE FILED


  ?ACTUL PATCH REQUEST TO SERVER

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
  
  return(
              <td>
                <button onClick={() => { updateUser(user) }}>Update</button>
              </td>
        )


?Notes

- here for patch you can see the payload of u selected id came with all object and get response the updated from backend which is in name filed

- REMEMBER : SETuSER WE DO FOR THE ui and axios.patch for the backend data change

- in path we have to pass user.id with chnage object which is UserUpdate object

- let talk about UserUpdate object  where we take one id slected on click  and then we chnage name : user.name + "  updated"

- so when we click on id the old id copy and chnage withnew data where we chnage name only with updated concacte

?Map Function Info
- setUsers(users.map((u) => (u.id === user.id ? UpdateUser : u)))
- basic map function where users main se 1 user nikla uski id and nay upadteuser main user.id same 
- then updateduser object dall do warna old wala apna u

*/

//?PUT METHOD


//!108 Lecture-12-Simplifying Code with Axios Create and Base URLs


//?make src -> utils ->api-client.js

//?CODE-api-client.js
/*
import axios from "axios";
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})
*/

//?CODE-Sellers.jsx

/*

// import axios from "axios" //?Axios Delete depdency because we dont use now
import apiClient from '../../utils/api-client';


const res = await apiClient.get("/users")
apiClient.post("/users", newUser).then((res) => {
apiClient.delete("/users/${id}").catch(err) => 
apiClient.patch("/users/${user.id}", UpdateUser)
apiClient.put(`/users/${user.id}`, UpdateUserPut)
*/


//?PUT METHOD WE CHNAGE USERNAME AND PHONENUMBER
// => IN USERNAME WE Chnage => "username+update"
// => IN PhoneNumber WE Chnage => Prefix=>"571-"+"PhoneNumber"

/*

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