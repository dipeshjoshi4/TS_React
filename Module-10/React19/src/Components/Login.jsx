import React, { useActionState } from 'react'
import { loginUser } from '../api/user';
import CustomButton from './CustomButton';


const Login = () => {
    //Intial State Pass
    const [user, submitAction, isPending] = useActionState(login, {
        error: null,
        data: null,
    })
    console.log(user)

    //Api Call
    async function login(previousState, formData) {
        const email = formData.get("email")
        const password = formData.get("password")
        try {
            const response = await loginUser(email, password);
            return { error: null, data: response.data }
        } catch (error) {
            return { ...previousState, error: error.error }
        }
    }

    return (
        <>
            <h1>React19 Hooks</h1>
            {/* instead of onSubmit */}
            <form action={submitAction}> 
                <div>
                    <label>Email:</label>
                    <input type="email" name='email' required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name='password' required />
                </div>
                {/* <button type='submit' disabled={isPending}>
                    {isPending ? "Logging in...." : "Log in"}
                </button> */}
                <CustomButton />
                {user.data && <p style={{ color: "green" }}>Logged in :{user.data.email}</p>}
                {user.error && <p style={{ color: "red" }}>{user.error}</p>}
                {isPending && <h3>Validating...</h3>}
            </form>

        </>
    )
}

export default Login