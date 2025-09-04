//!-----------------------------Module 8: React Design Patterns----------------------

//1-Conatiner Presentation Design Pattern
//2-Custom Hook Pattern -Imp
//3-High Order Component Pattern

// - these three design patterns are very commonly seen in React Projects,you should Definetly
//- For code readable,scalbility


//?110 Lecture-1-Mastering React Design Patterns: Introduction

// Purpose is just maintain and scalable
// Bisiness and Design part on some structure

//?111 Lecture-2-

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


*/