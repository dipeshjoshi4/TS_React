import React from 'react'
import Loader from '../Common/Loader'
import usePage from '../../hooks/usePage'

const Page = () => {
    const pageSize = 10;
    const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = usePage({ pageSize })
    console.log("Data", data) //pageParam and page data we get  array of array we get

    return (
        <>
            <h2>Pagination Page</h2>
            {isLoading && <Loader />}
            {error && <em>{error.message}</em>}

            {/* ARRRAY OF ARRAY SO TWO MAP */}
            {
                data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((todo) => (
                            <p key={todo.id}>{todo.title}</p>
                        ))}
                    </React.Fragment>
                ))
            }

            {hasNextPage && (<button disabled={isFetchingNextPage} onClick={fetchNextPage}>
                {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
            )}
        </>
    )
}

export default Page
