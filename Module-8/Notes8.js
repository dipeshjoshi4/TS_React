//!-----------------------------Module 8: React Design Patterns----------------------

//1-Conatiner Presentation Design Pattern
//2-Custom Hook Pattern -Imp
//3-High Order Component Pattern

// - these three design patterns are very commonly seen in React Projects,you should Definetly
//- For code readable,scalbility


//?110 Lecture-1-Mastering React Design Patterns: Introduction

// Purpose is just maintain and scalable
// Bisiness and Design part on some structure

//?111 Lecture-2-Part 1: Mastering Container Components in React

/*
- In this lecture, we covered the concept of container and the presentational design pattern in React.
- We explored how containers manage state and pass it down as props to presentational (or "dumb") components, which are focused solely on rendering the UI.
- This is a widely used design pattern, especially in large-scale projects, to maintain clean and manageable code.

? we make 2 Component
1-> Containers ->UserContainers.jsx => Which Work as Smart Component
2-> Components ->UserList.jsx => Which Work as Dumb Component

?CODE => UserContainers.jsx

import { useState, useEffect } from 'react'
const UserContainers = () => {
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const getUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://reqres.in/api/users', {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            })
            const json = await response.json();
            console.log(json)
            if (!json.data) return;
            setUsers(json.data)
            setIsLoading(false)
        } catch (errors) {
            setErrors(errors);
            console.log(errors)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <div>

        </div>
    )
}
export default UserContainers

?Code Explaination

- WE HAVE TO make data ain userContainer.jsx and show on UserList.jsx
- so here we make a data api which we get from  => https://app.reqres.in/  => We get User Api

?CODE Structure
- so untill data comes loading then comes then users and if not comes then Errors
- So 3 state for the data
- one function to get Data from users  => we use getUser()
- here we write logic part of async await with in try catch  to get data from api

- in last we use useEffect Hook . Why  Because we need to refresh page when data came to for that
useEffect(() =>
    {getUser()
},[])

?Result
- we get data on console
- now we have to pass as props in UserList.jsx

?Theory Some  To undertsand this design part

?1.Container Component = "Smart"
- Hnadles All Logic of that Component  if users then users(state API,DATA FECTHING,side Effects) what data send to the UI

?2.Presentation Component = "Dumb"
- Only responsible for displaying the UI
- recevies data via props from the container
- No Logic,Just Presentation

? benefits

- Reusable Components
- Easier To Maintain
- Simpler to Test

? Drawbacks

- slight overhead for many smaller scale app
- can be tricky for beginner to understand
- May Lead to Prop Drilling(Passing data through multiple components levels)



*/

//?112 Lecture-3-Part 2: Mastering Presentational Components in React


/*

- In this lecture, we covered the concept of container and the presentational design pattern in React. We explored how containers manage state and pass it down as props to presentational (or "dumb") components, which are focused solely on rendering the UI. This is a widely used design pattern, especially in large-scale projects, to maintain clean and manageable cod


?UserList.jsx


import React from 'react'
import "./userlist.css"

const UserList = ({ users, Loading, error }) => {
  if (Loading) return <div>Loading......</div>
  if (error) return <div>Something Went Wrong......</div>
  if (!users) return null
  return (
    <div className='userlist'>
      {
        users.length && users.map((user) => {
          return (
            <div key={user.id}>
              <img src={user.avatar} />
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>
                {user.email}
              </p>
            </div>
          )
        })
      }

    </div>
  )
}

export default UserList


?UserContainers.jsx
  return (
        <div>
            <UserList users={users} Loading={isLoading} error={errors} />
        </div>
      )
*/


//?113 Lecture-4-Mastering Custom Hooks Design Pattern : Simplify Your Code Reusability

/*
- In this lecture, we covered the Custom Hook design pattern, a powerful approach commonly used in large codebase applications.
- We explored how to create your own custom hooks to encapsulate logic once and reuse it anywhere you need. By doing so, you can avoid repetitive code and streamline your components. 
- This lecture will help you understand the practical use of custom hooks and how they make your React code more maintainable and efficient.


?Custom Hook Design Pattern

- logic and fetching data function into hooks 

?hooks -> useFetch.js

import React, { useState, useEffect } from 'react'
export const useFetch = () => {
    const [users, setUsers] = useState([])
    const [errors, setErrors] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const getUser = async () => {
        try {
            setIsLoading(true);
            const response = await fetch('https://reqres.in/api/users', {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            })
            const json = await response.json();
            console.log(json)
            if (!json.data) return;
            setUsers(json.data)
            setIsLoading(false)
        } catch (errors) {
            setErrors(errors);
            console.log(errors)
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return { users, errors, isLoading }
}
export default useFetch

?UserContainer.jsx

import UserList from "../Components/UserList"
import useFetch from '../hooks/useFetch'
const UserContainers = () => {
    const { users, errors, isLoading } = useFetch()
    return (
        <div>
            <UserList users={users} Loading={isLoading} error={errors} />
        </div>
    )
}
export default UserContainers



?2nd Example



?useWindowSize.js

import React from 'react'
import { useState, useEffect } from 'react'

export const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener("resize", handleResize)
        return (()=>window.removeEventListener("resize",handleResize))
    }, [])
    return size;
}

export default useWindowSize

? App.jsx
import UserContainers from "./containers/UserContainers"
import useWindowSize from "./hooks/useWindowSize"
function App() {
  const { width, height } = useWindowSize()
  return (
    <>
      <h1>Conatiner Presentation Design Pattern</h1>
      <UserContainers />
      <div>
        window Size : {height} * {width};
      </div>
    </>
  )
}
export default App

?useEffect() Why Need Here in this solution!

   ❌ Calling it directly
  getUser();

getUser() runs on the first render → sets state with setUsers.Setting state causes React to re-render.On re-render, getUser() 
runs again → sets state again → another re-render.
🔁 Infinite loop of re-renders & API calls.
✅ Why useEffect solves this
When you do:

useEffect(() => {
  getUser();
}, []);

React delays the call until after the first render is done.With [] (empty dependency array),
it only runs once when the component mounts.No infinite loop, no repeated API calls.

🧠 Key idea
Component body = render logic only (pure function of props/state → UI).
useEffect = side effects (API calls, subscriptions, timers, logging).
That’s why in design patterns:
The Container or Custom Hook puts side effects in useEffect.
The Presentational component stays pure (no side effects).

👉 Think of it like this:
Render = “What should I show right now?”
Effect = “What should I do after showing it?”

?useEffect(()=>{
      return 
},[])
//? in useEfect whatever you return its a clean up function



?--------------------------Thory OF Custom Hook Design Pattern----------------------

- A custom hook is a resuable function the use react built in Hooks to capture and reuse  any logic across components

?# pros 
- Reusability : Build once,use multiple times,Avoid Rewriting the same data-fetching or logic repeatedly
- Cleaner Code :keeps components code simple and clean by moving complex logic into the hook
- Testing & Maintenanace: Easier to test and maintain since the logic is isolated

?#Cons 
- Learning Curve : Beginners might find it tricky at first to decide when and how to create custom hooks
- overhead for small apps : May Be Unnecessary overhead for very small applications



*/


//?114 Lecture-5-Enhancing Components with Higher-Order Components (HOCs)

/*
- In this lecture, we delved into the Higher-Order Component (HOC) design pattern. 
- We explained how HOCs work by taking an existing component and returning a new component with enhanced functionality.
- We used a user authentication scenario as a real-world example for demo how you can wrap components with HOCs to add extra behavior. 
- This lecture will give you a clear understanding of how to leverage HOCs to make your React components more modular and reusable.

? Higher Order Component Design Pattern :-
- Are basically  components that take another component as input,add some  extra functionality to it, and then return a new enhanced 
Component

?as for the pros
- improve code reusability,sepration of concerns and overall readability

?as for the cons
- they can sometimes lead to a bit of reduced performance and add some complexity in debugging


- if in our website there is user page and dashboard page .
- then we gave that component to HOC and HOC Handle That Authentic Layer to is it qualified for access that particular page or not



*/