//!------------------------------------Module 11: React Query – State Management------------------------------------


//!140-Lec-1-Introduction to React Query: The Why and How of Modern Data Fetching

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


//!141-lec-2-Setting Up React Query: Configuration and Query Client Provider

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


//!142-Lec-3-Data Fetching with useQuery: Simplifying API Calls in React Query
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

//!143-Lec-4-Enhancing UX with useQuery: Handling Loading and Errors

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

//!144-lec-5-Creating Custom Hooks: Reusing useQuery Logic for Cleaner Code

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

//!145-lec-6-Using React Query DevTools: Visualize and Debug Your Cache

//- In this lecture, we introduced the React Query DevTools.
//- We installed the react-query/devtools dependency and used it to open a DevTool in the browser.
//- This lets developers see what's stored in the cache and gather a lot of useful details, improving the developer experience.

