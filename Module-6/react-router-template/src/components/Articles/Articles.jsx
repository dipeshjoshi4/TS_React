import React from 'react'
import { useSearchParams } from "react-router-dom";

const Articles = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const sortBy = searchParams.get("sortBy")
    const category = searchParams.get("category")

    const handleSortViews = () => {
        setSearchParams({
            sortBy: "Views",
            category: "Vlogger"
        })
    }
    return (
        <div>
            <h2>
                Articles:
                <p>SortBy:{sortBy} Category:{category}</p>
                <button onClick={handleSortViews}>Sort On Click</button>
            </h2>
        </div>

    )
}

export default Articles