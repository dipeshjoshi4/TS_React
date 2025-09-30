import React, { useState } from 'react'
import Loader from '../Common/Loader'
import useFetchUsers from '../../hooks/useFetchUsers'


const User = () => {
    const [page, setPage] = useState(1)
    const pageSize = 10;
    const totalItems = 200;
    const totalPages = Math.ceil(totalItems / pageSize)

    const { data: todos, isLoading, error } = useFetchUsers({ page, pageSize })

    return (
        <>
            <h2>Users Page</h2>
            {isLoading && <Loader />}
            {error && <em>{error.message}</em>}
            {todos?.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })}

            <button disabled={page === 1} onClick={() => { setPage(page - 1) }}>Previous</button>

            <div>
                {
                    Array.from({ length: totalPages }, (_, i) => (
                        <button key={i + 1}
                            onClick={() => setPage(i + 1)}
                            style={{ fontWeight: page === i + 1 ? "bold" : "normal" }}>
                            {i + 1}
                        </button>
                    ))
                }
            </div>

            <button disabled={page === totalPages} onClick={() => { setPage(page + 1) }}>Next</button>

        </>
    )
}

export default User
