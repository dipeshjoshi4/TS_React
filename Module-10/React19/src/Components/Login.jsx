import React, { useActionState } from 'react'
import { loginUser } from '../api/user';
import CustomButton from './CustomButton';

const Login = () => {

    //Api Call
    const login = async (previousState, formData) => {
        let nextState = { data: null, error: null };
        const email = formData.get("email")
        const password = formData.get("password")
        try {
            const response = await loginUser(email, password);
            nextState.data = response.data; // return { error: null, data: response.data }

        } catch (error) {
            nextState.error = error.error; // return { ...previousState, error: error.error }
        }
        return nextState;
    }

    //Intial State Pass
    const [user, submitAction, isPending] = useActionState(login, {
        error: null,
        data: null,
    })
    console.log(user)


    return (
        <>
            <h1>React19 Hooks</h1>
            <form action={submitAction}> {/* instead of onSubmit */}
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