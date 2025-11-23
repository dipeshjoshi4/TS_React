import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchBar = () => {

    const [query, setQuery] = useState("")   //input which given by user
    const [result, setResult] = useState([]) //query result which display below search

    useEffect(() => {

        const fetchData = async () => {

            try {

                let url = "https://dummyjson.com/products";
                if (query.trim() !== "") {
                    url = `https://dummyjson.com/products/search?q=${query}`;
                }

                const res = await axios.get(url);
                setResult(res.data.products)
            } catch (error) {
                console.error("Error Fetching Data", error)
            }

        }

        fetchData()

    }, [query])

    return (
        <div>
            <h2>Products Search Bar</h2>
            <input type="text" value={query} placeholder="Type For Search" onChange={(e) => { setQuery(e.target.value) }}
                style={{ padding: 10, width: 200, borderRadius: 10, outline: "auto", border: "1px solid #ccc" }} />
            <ul>
                {
                    result.length > 0 ?
                        (
                            result.map((item) => (
                                <li key={item.id}>
                                    <strong>{item.title}        ${item.price}</strong>
                                </li>
                            ))
                        ) : (<strong>No Products Found</strong>)
                }
            </ul>
        </div>
    )
}

export default SearchBar