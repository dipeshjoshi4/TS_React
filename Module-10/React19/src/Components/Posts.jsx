// import React, { useEffect, useState, use } from 'react';
import React, { use } from 'react';

const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())

const Posts = () => {



    // const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setPosts(data);
    //             setLoading(false)
    //         })
    // }, [])

    // if (loading) {
    //     return <div>Loading Posts....</div>
    // }

    const posts = use(fetchPost)


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts