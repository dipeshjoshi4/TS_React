import React from 'react'
import { useSearchParams } from "react-router-dom";


const dummyArticles = [
    { id: 1, title: "Laptop Review", views: 250, category: "Electronics" },
    { id: 2, title: "SmartPhone Tips", views: 300, category: "Electronics" },
    { id: 3, title: "Running Shoes", views: 100, category: "Fashion" },
    { id: 4, title: "Washing Machine", views: 150, category: "Electronics" },
]

const Articles = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const sortBy = searchParams.get("sortBy")
    const category = searchParams.get("category")
    const sortByViews = searchParams.get("sortByViews")

    let filterArticles = dummyArticles;

    const handleSortViews = () => {
        setSearchParams({
            sortByViews: "true",
            category: "Electronics",
        })
    }


    if (category) {
        filterArticles = filterArticles.filter((article) => article.category === category)
    }
    if (sortByViews === "true") {
        filterArticles = [...filterArticles].sort((a, b) => a.views - b.views)
    }


    return (
        <div>
            <h2>Articles:<p>SortBy:{sortBy ?? (sortByViews === "true" ? "Views" : "none")} Category:{category ?? "All"} </p></h2>
            <button onClick={handleSortViews}>Sort By Views</button>
            <ul>
                {
                    filterArticles.map((article) => (
                        <li key={article.id}>
                            {article.title} - {article.views} Views ({article.category})
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Articles