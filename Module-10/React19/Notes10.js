//!133-lecture-1-React 19 Introduction: useActionState() – Modern Form & State Handling

/*
- In this lecture, we learned about the new useActionState hook introduced in React 19. 
- This hook makes form handling much easier and more efficient. Instead of creating separate states for data, errors, and loading, useActionState lets you manage everything in a simpler way.
- It reduces the amount of code, keeps it more readable, and helps in handling complex forms effectively. 
- React 19 introduces this hook as part of its focus on improving form management and working with complex data.
*/

//?useTransition
// - earlier only with sync operation
// - in react-19 now it can work with async operation too
//- firstclass pending and errors and optimisic update are tracked automatically

//?-----------------Fake API-user.js---------------------------

// export const loginUser = async (email, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (email === "ajay.suneja25@gmail.com" && password === "pass") {
//                 resolve({
//                     success: true,
//                     data: {
//                         email,
//                         username: "sunejajajay",
//                         token: "156545asdsdfd5sd4wsdwedew85we98d4w"
//                     },
//                 })
//             } else {
//                 reject({
//                     success: false,
//                     error: "Invalid Credantials"
//                 })
//             }
//         }, 1000);
//     })
// }

//?useActionState

//?CODE-Login.jsx
/*
import React, { useState } from 'react'
import { loginUser } from '../api/user';
const Login = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false)
    const handleSubmit = async (e) => {
        console.log(e.currentTarget);
        e.preventDefault()
        setIsPending(true)
        setUser(null)
        setError(null)
        const formData = new FormData(e.currentTarget);
        console.log(formData)
        const email = formData.get("email")
        const password = formData.get("password")
        try {
            const response = await loginUser(email, password);
            setUser(response.data)
        } catch (error) {
            setError(error.error)
        } finally {
            setIsPending(false)
        }
    }
    return (
        <>
            <h1>React19 Hooks</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name='email' required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name='password' required />
                </div>
                <button type='submit' disabled={isPending}>
                    {isPending ? "Logging in...." : "Log in"}
                </button>
                {user && <p style={{ color: "green" }}>Logged in :{user.email}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>

        </>
    )
}
export default Login
*/

//?8.45
//?Why useActionState
// - for a normal form who data comes from api call we have to managed 3 state
// - so we use useActionState which actully is easy of 2 state

// useActionState is a new React 19 hook that helps you handle server actions(or async actions) and automatically manage:
// ✅ Pending state(loading)
// ✅ Result state(success data or error)
// It’s designed for React Server Components(like Next.js App Router) but can also be used in client components.

//!134----------------Lecture-2-useFormStatus()–Managing Form States-------------

//In this lecture, we’ve dived into the useFormStatus hook. This handy tool lets you track the status of a form until it’s submitted, giving you real-time insights into whether the form is in a pending state or ready to go.
//If your submit button is located elsewhere or you want to avoid prop drilling, you can simply rely on useFormStatus to enable or disable the button based on the form’s current state.

//?CODE-CustomButton.jsx
/*
import React from 'react'
import { useFormStatus } from 'react-dom'
const CustomButton = () => {
    const { pending } = useFormStatus()
    return (
        <div>
            <button type='submit' disabled={pending}>
                {pending ? "Logging in...." : "Log in"}
            </button>
        </div>
    )
}
export default CustomButton
*/

//?CODE-Login.jsx
{/* 
    <button type='submit' disabled={isPending}>
                    {isPending ? "Logging in...." : "Log in"}
    </button> 
*/}
<CustomButton />

//!135-Lec-3-useActionState and useFormStatus: Understanding React 19’s Form Management Hooks
/*
- In this lecture, we’ve brought together the concepts from the previous two sessions where we covered the useActionState and useFormStatus hooks.
- We explored the fine details of how each hook operates and how they can be used to manage form states more efficiently in React 19.
- By the end, you’ll have a solid understanding of how to implement these hooks to streamline your forms and minimize boilerplate code.
*/

//?How to Remember
//1- jub tum submit karte hai : browser formdata banata hai and that data goes to submitAction
//2- react internally bolta hai :- "oke ab action run karna hai"

//?TWO THINGS HAPPEN
//- CODE FROM FUNCTION TO ARROW FUNCTION
//- THERE WILL OTHER DATA,ACTION ,METHOD COMES WITH pending of USEFORMSTATUS()

//!136-Lec-4-useOptimistic() – Handling Optimistic UI Updates

/*
 This hook is all about implementing optimistic updates, where the UI is updated immediately before the actual state changes on the backend. We discussed how this approach enhances user experience by making the UI feel more responsive and snappy.
*/