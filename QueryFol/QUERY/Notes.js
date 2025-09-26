
//?main.jsx

/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </StrictMode>,
)
*/

//?Configuration
//?1 - create a new instance for reactQuery
//const queryClient = new QueryClient()

//?2-Wrap in <queryClientProvider> <App/> <queryClientProvider/>

//?What it does
// queryKey which identifies eevry data with uniquly identify keys



//?api.js part
// if (!response.ok) {
//     throw new Error(`Failed to fetch posts. Status: ${response.status}`);
// }

//?Normal Info
// WHEN THE BACKEDN Api running means localhost:3000/tags and localhost:3000/posts thats when you have to hit your api running

//?CODE-App.jsx
// const { data, isLoading, status } = useQuery({
//     queryKey: ["posts"],
//     queryFn: fetchPosts,
// });

// console.log(data, isLoading, status);

//!Most Important
//?FOR RUNNING BACKEND DATA MEANS API WE NEED THIS COMMAND
// npx json-server src/api/data.json
// if error comes removes tags
//again run command
// then put tags data again  and open both files which run as backend