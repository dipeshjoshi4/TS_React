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