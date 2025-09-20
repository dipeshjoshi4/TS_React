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
        console.log(formData) //gives lot of fuction one of the fn is .get
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