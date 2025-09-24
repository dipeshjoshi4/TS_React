import React from 'react'
import { useFormStatus } from 'react-dom'

const CustomButton = () => {
    const { pending, data } = useFormStatus()
    return (
        <div>
            <button type='submit' disabled={pending}>
                {pending ? "Logging in...." : "Log in"}
            </button>
            <p>{data ? `Requesting....${data.get("email")}` : ""}</p>
        </div>

    )
}

export default CustomButton