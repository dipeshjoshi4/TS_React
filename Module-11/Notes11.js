//!------------------------------------Module 11: React Query – State Management------------------------------------


//!139-Lec-1-Introduction to React Query: The Why and How of Modern Data Fetching

/*
- In this lecture, we introduced React Query, a powerful data-fetching library that simplifies managing server-state in your React applications.
- We covered what React Query is, why you need it, and the key benefits it offers, such as simplifying data fetching, caching, and background updates.
- By the end of this lecture, you'll have a clear understanding of the core objectives of React Query and how it can enhance your development workflow.
*/

//- React query is best library for managing and caching data.
//- it increasely your webiste performance immenssely,and you have to writevery little code-almost like magic
//- react query is library that helps you manged cached data for your API Requests
//- its best used for fetching,updating and catching data

//?What is Cache?
//A cache is like a temporary storage area in memory where fetched data is kept.
// When you make the same request again, React Query can serve the data from the cache instead of making a new request every time.

//?React Query also has features like

// 1.Caching our data
// 2.Automatic retries if the server doesn't respond
// 3.Request cancellation when a component unmounts
// 4.The ability to automatically refresh data at set intervals(like every two minutes).

//?In short, React Query makes managing and caching API data very simple and efficient.You can just focus on writing less code and getting better performance.


//!140-lec-2-Setting Up React Query: Configuration and Query Client Provider

/*
- In this lecture, we’ve walked through the initial setup for using React Query in our project.
- We installed the React Query dependency via npm and then wrapped our root component with the QueryClientProvider.
- This ensures that we can leverage all the features React Query offers for data fetching and caching throughout our app.
*/

//?CODE
//- ALL CODE OF react-router-dom we used

//?installation
//  first install reactquery from "https://tanstack.com/query/latest/docs/framework/react/installation#npm"
//  npm i @tanstack/react-query

//?main.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
)
// THE ONLY CONFIGURATION CODE OR FOR REACT QUERY CHANGABLE CODE


//!141-Lec-3-Data Fetching with useQuery: Simplifying API Calls in React Query
//In this lecture, we explored how to fetch data using the useQuery hook provided by React Query.
//We demonstrated how to easily integrate the useQuery hook to fetch user data from an API and handle the loading and error states efficiently.
//This lecture focuses on making data fetching smoother and more manageable with React Query’s powerful hooks.

//? useQuery Hook


/*
useQuery({
    queryKey: ["users"]
})
- here queryKey is the name of the key which stores in cache
- means whatever the data you fetch in cache have one key and that key name is is given in string
*/

//!142-Lec-4-Enhancing UX with useQuery: Handling Loading and Errors

//In this lecture, we explained how useQuery provides isLoading and error states, which help with error handling and user experience.
//We can show a loader or a message based on the isLoading flag.

//?Sellers.jsx
// const { data: users, error, isLoading } = useQuery({
//     queryKey: ["users"],
//     queryFn: fetchUsers,
// })
// return (
//     { isLoading && <Loader /> }
//     { error && <em>{error.message}</em> }
// )

//!143-lec-5-Creating Custom Hooks: Reusing useQuery Logic for Cleaner Code

//In this lecture, we took the logic from our useQuery hook and placed it into a custom hook.
//This makes the code cleaner and reusable across components, allowing us to use the data-fetching logic on demand.

//?useUser.js
// import { useQuery } from '@tanstack/react-query';
// import apiClient from '../utils/api-client';

// const fetchUsers = () => (apiClient.get("/users").then(res => res.data))
// const useUsers = () => {
//     return useQuery({
//         queryKey: ["users"],
//         queryFn: fetchUsers,
//     })
// }
// export default useUsers;

//?Sellers.jsx
// import apiclient from '../../utils/api-client';
// import useUsers from '../../hooks/useUsers';
// const Sellers = () => {
//     const { data: users, error, isLoading } = useUsers()
// }

//!144-lec-6-Using React Query DevTools: Visualize and Debug Your Cache

//- In this lecture, we introduced the React Query DevTools.
//- We installed the react-query/devtools dependency and used it to open a DevTool in the browser.
//- This lets developers see what's stored in the cache and gather a lot of useful details, improving the developer experience.

//!145-lec-7-Customize our React Query Properties

//In this lecture, we covered how to configure a few important properties in the useQuery hook.
//Essentially, we talked about setting up a default options object where you can define things like
//- stale time || enable || disable || refetching, and manage how long data stays fresh before it’s considered stale.

//In short, we explained that when data is fetched from the server, it can become stale after a set period(like 5 or 10 minutes).
//By configuring the stale time, you ensure the data stays fresh for that duration.
//If you want to refetch data manually or prevent it from refetching automatically, you can configure the refetch property as well.

//?we see there is if we go to sellers there is data which name key as users ...but => how much time the data inactive ? we show how much time is store in cache?
// query Explorer have answer of this ---- gcTime : 300000 means 5 min
// when you goes to different component and then 5 min happen gc time run and clear your inactive users key data

//?Solutions
//?Main.jsx
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             gcTime: 600000, //in js you dont have comma so you can use "_" as comma ","
//         }
//     }
// });

//?Retry of error amounts

//?Solutions- Main.jsx
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             gcTime: 600000, //in js you dont have comma so you can use "_" as comma ","
//             retry:3,
//         }
//     }
// });

//?refecth event happen and the stale(means old data) will be new for sometimes so whenever refecth happen data will comes and it became stale means old .so to make it fresh we have put on staleTime
//- stale happen many times on interent re-connect
//- refocus the tab
//- error resolve
//- component chnage or mount/unmount

//?Solutions-Main.jsx
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             gcTime: 600000, //in js you dont have comma so you can use "_" as comma ","
//             retry:3,
//         }
//     }
// });

//?But If You Want refecth to stop on certain regular events like windows focus and unmount  so do this ?

//?Solutions-Main.jsx
// const queryClient = new QueryClient({
//     defaultOptions: {
//         queries: {
//             gcTime: 600000, //in js you dont have comma so you can use "_" as comma ","
//             retry:3,
//         }
//     }
// });

//?this is genraic query apply .if you want specific query on specific component then apply on useQuery of that component

//!146-lec-8-Fetching Todos with useQuery: Hands-on Exercise

//In this lecture, we dived into a practical exercise where we fetched a list of todos using the useQuery hook.
//We built on what we learned in the previous lecture and implemented the todo fetching functionality step by step.
//This exercise helped solidify our understanding of how to use the useQuery hook in a real scenario.

//?useTodos.js
9
// import { useQuery } from '@tanstack/react-query';
// import apiClient from '../utils/api-client';
// const fetchTodos = () => (apiClient.get("/todos").then(res => res.data))
// const useTodos = () => {
//     return useQuery({
//         queryKey: ["todos"],
//         queryFn: fetchTodos,
//         gcTime: 400000,
//         retry: 4,
//     })
// }
// export default useTodos;

//?Sales.js

// import React from 'react'
// import useTodos from '../../hooks/useTodos'
// import Loader from '../Common/Loader'
// const Sales = () => {
//     const { data: todos, isLoading, error } = useTodos()
//     return (
//         <>
//             <h3>Todos Page</h3>
//             {isLoading && <Loader />}
//             {error && <em>{error.message}</em>}
//             {todos?.map((todo) => {
//                 <p key={todo.id}>{todo.title}</p>
//             })}
//         </>
//     )
// }
// export default Sales

//!147-Lec-9-Understanding Stale and Refetch in React Query

//- In this lecture, we explored what "stale" means in the context of React Query.
//- We discussed how long data remains fresh, when it becomes stale, and under what conditions a refetch happens or doesn't happen.
//- Essentially, we covered that if your data is still fresh, a refetch won't trigger.But after it becomes stale, it will be refetched.
//- We also talked about how you can disable refetching if you want to by setting certain properties.
//- Overall, we explained these concepts in detail with examples.

//- so when stale time is on means for first few stal time second in users case we have 6 second
//- so that 6 second your data is fresh and new no refecth happen
//?What is Refecth Factore?
//- tab chnage
//- component unmount
//- re-render
//- internet reconnect

// - so when untill fresh the data refetch not happen
//- if you
// refetchOnWindowFocus: true,   => then on stale it happen working
// refetchOnWindowFocus: always, => then on stale it happen Always working

//?Bydefault stale value is 0 means refecth happen
//? if you pass staleTime : Infinity then data always happen fresh


//!148-Lec-10-Using Query Params and Dynamic Cache Keys in React Query

//- In this lecture, we focused on how to pass query parameters when making API calls with React Query.
//- We discussed how to handle multiple query parameters and create dynamic cache keys as strings.
//- With a real-life example, we demonstrated how to effectively use query params to manage data fetching and caching in React Query.

//?sales.jsx
/*
import React, { useState } from 'react'
import useTodos from '../../hooks/useTodos'
import Loader from '../Common/Loader'
const Sales = () => {
    const [userId, setUserId] = useState(null)
    console.log(userId)
    const { data: todos, isLoading, error } = useTodos(userId)
    return (
        <>
            <select onChange={(e) => { setUserId(parseInt(e.target.value)) }} value={userId}>
                <option value="">Select</option>
                <option value="1">user 1</option>
                <option value="2">user 2</option>
                <option value="3">user 3</option>
                <option value="4">user 4</option>
            </select>
            <h3>Todos Page</h3>
            {isLoading && <Loader />}
            {error && <em>{error.message}</em>}
            {todos?.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })}
        </>
    )
}
export default Sales
*/

//?useTodos.js
/*
import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';
const useTodos = (userId) => {
    const fetchTodos = () => (apiClient.get(`/todos`, {
        params: {
            userId,
        },
    }).then(res => res.data));
    ///reference => users/userId(1,2,3,4,...)/todos
    return useQuery({
        queryKey: userId ? ["users", userId, "todos"] : ["todos"], 
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
        // enabled: !!userId, // only run if userId !== ""
    })
}
export default useTodos;


*/

//!149-Lecture-11-(part-1)Implementing Pagination in React with React Query

/*
In this lecture, we covered how to implement pagination to handle large datasets efficiently in a React application.
When you have a lot of data, loading it all on one page can be overwhelming for the user and slow down performance.
Instead, we use pagination to display data page by page, which enhances user experience and improves performance.
We’ll explore how React Query provides a smart way to handle pagination, making it easier to manage and load data efficiently.
*/

//?Solve todos bug
// If userId is truthy(like 1, 2, 3…) → we attach it: request becomes / todos ? userId = 1.
// If userId is falsy(null, undefined, 0, empty string) → we don’t attach it:request stays / todos.
// So the backend never sees userId = null or NaN.

//?Pagination setup
// User.jsx create store in All route

//?CODE-USER.JSX
/*
import React from 'react'
import useTodos from '../../hooks/useTodos'
import Loader from '../Common/Loader'
const User = () => {
    const { data: todos, isLoading, error } = useTodos()
    return (
        <>
            <h3>Users Page</h3>
            {isLoading && <Loader />}
            {error && <em>{error.message}</em>}
            {todos?.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })}

        </>
    )
}
export default User

*/

//?CODE-AllRoutes.jsx
// < Route path = '/admin' element = {< Admin />} >
//       <Route path="sales" element={<Sales />} />
//       <Route path="sellers" element={<Sellers />} />
//       <Route path="users" element={<User />} />
//   </ >

//?User.jsx
/*
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
            <button disabled={page === totalPages} onClick={() => { setPage(page + 1) }}>Next</button>

        </>
    )
}
export default User
*/

//?useFecthUsers.jsx
/*
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import apiClient from '../utils/api-client';
const useFetchUsers = (query) => {
    const fetchTodos = () => apiClient.get(`/todos`, {
        params: {
            _limit: query.pageSize,
            _start: (query.page - 1) * query.pageSize,  //bydefault=1=> 1-1*10 so start from 0 | 2-1*10 so start from 10
        },
    })
        .then(res => res.data);
    return useQuery({
        queryKey: ["todos", query],
        queryFn: fetchTodos,
        gcTime: 400000,
        retry: 4,
        placeholderData: keepPreviousData, //untill new data cames the privous one shows and the positions of button not chnage
    })
}
export default useFetchUsers;
*/

//!150-lEcture-11-(part-2)-Adding Page Numbers to Enhance Pagination in React


//- we building on our previous pagination lesson where we displayed a limited number of users per page using “Previous” and “Next” buttons.
//- Now,we're enhancing the user experience further by introducing clickable page numbers.
//- This allows users to jump directly to any page and view the corresponding set of user data.
//- By doing this, we make navigation more intuitive and improve the overall usability of our React application.

//?User.jsx
/*
return (
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
)


*/

//!151-Lec-12-Infinite Scrolling in React Query

/*
We’ve also tackled infinite scrolling for large datasets.
Instead of fetching everything at once, we use the useInfiniteQuery hook from React Query to load data in batches.
This hook useInfiniteQuery helps us fetch the next chunk of data as needed. 
In short, we’ve implemented infinite scrolling smoothly with React Query.
*/

//?Whole Page.jsx is the part of this code structure of infinite scrolling


//!153-Lec-13-useMutation hook in React Query

/*
In this lecture, we discussed how to handle sending data to the server using React Query.
We use the useMutation hook for this purpose.
It allows us to post data to the server and then either update the cached data or invalidate the cache so that the data is refreshed.
We covered both approaches, so you can choose the best one for your use case.
*/

//?CODE
/*
import React, { useState } from 'react'
import Loader from '../Common/Loader';
import apiClient from '../../utils/api-client';
import useUsers from '../../hooks/useUsers';
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';

const Sellers = () => {
  const { data: users, error, isLoading } = useUsers()
  const QueryClient = useQueryClient()

  const addUserMutation = useMutation({
    mutationFn: (newUser) => apiClient.post("/users", newUser).then((res) => (res.data)),
    onSuccess: (savedUser) => {
      console.log(savedUser)
      // 1st cach invalid
      // QueryClient.invalidQueries({
      //   queryKey:["users"],
      // })
      //?2nd cache to copy in savedUser
      QueryClient.setQueryData(["users"], (user) => [savedUser, ...user])
    }
  })

  const [name, setName] = useState();


  const addUser = () => {
    const newUser = {
      name: name,
      id: users.length + 1,
    }
    addUserMutation.mutate(newUser)
  }


*/


//?The Main PoinT To Remmeber is ......

//?case-1-Invalidate Queries
//DB Update - Yes
//Cache Update - api call and update data from api to cache.

//?Case-2-setQueryData
//DB Update - Yes
//Cache Update - direct cahce main data store hota no extra call like above


//!153-Lecture-14-Handling Delete Operations with React Query: Using useMutation Hook

// We'll explore how to leverage the useMutation hook to handle deletions efficiently.


//?CODE-Sellers.jsx
/*
const deleteUserMutation = useMutation({
    mutationFn: () => {
      apiClient.delete("/users/${id}").then((res) => res.data)
    },
    //APi Responsone on success in  delet user function
  })

  //Delete
  const deleteUser = (id) => {
    deleteUserMutation.mutate(id, {
      onSuccess: () => {
        QueryClient.setQueryData(
          ["users"],
          (users) => users.filter((u) => u.id != id))
      }
    })
  }

*/

//!154-Lec-15-Update Operations with React Query: Leveraging useMutation for Edits
//- we focus on how to implement the update functionality using React Query’s useMutation hook.