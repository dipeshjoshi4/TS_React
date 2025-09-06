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