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