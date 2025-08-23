
//!-------------------------------------------Module-6-React Router--------------------------------------

//!Notes -  CORRECT FULL CODE FROM "react-router-template"

//?85 Lecture-1-Introduction to React Routing : Setting Up Your Project

/*
* Lecture Summary
- So, in this lecture, I'm going to explain the importance of React Routing—why it's a crucial feature in React and how it can really benefit you.Essentially, we’ll look at how you can integrate React Routing into an existing codebase.
- I've put together a bit of a boilerplate code to help you understand how to approach an existing codebase and then add React Routing on top of it. We’ve also done a bit of refinement and added some CSS just to give you a feel for how it all fits together.
- And that’s it for this lecture. In the next one, we'll dive deeper into more concepts around React Routing.

Admin[Admin,sales,sellers] - Articles - Home - Navbar - NotFound ---->  Products[Products,SingleProducts] => we route on this Componenet
*/

//?86 Lecture-2-React Routing Setup: BrowserRouter, Routes & Route

/*

- we have all roting means Home Click Home Open, Different Tab Click Different associate Tab Open

# 1st
- for the we have one depedency which "npm i react-router-dom"  which give use dependecy of routing
- after install depedency we know the depdency install in package.json you will see
- for all the routing first we have to Wrap our main "App"

#2nd
- which in main.jsx with <BrowserRouter/> which is given by react-router-dom

* main.jsx

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

1. Why do we need <BrowserRouter>?

- React itself doesn’t know about routing (URLs, navigation, back/forward buttons).
- <BrowserRouter> comes from react-router-dom.
- It wraps your entire app and enables:
- Mapping URLs (/home, /about) to React components.
- Navigation without refreshing the page (Single Page Application behavior).
- Access to hooks like useNavigate, useParams, useLocation.
- Without <BrowserRouter>, React Router features won’t work because there’s no “router context” available.

2. Why wrap <App /> with <BrowserRouter>?

- Because you want routing to be available everywhere inside <App />.

#3rd
- we have to use Route & Routes For given route to componenet
- and make sure whatever path given is same navbar "href"
- use Route in the <Routes>

* App.jsx
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles"
import Admin from "./components/Admin/Admin"
import Products from "./components/Products/Products"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='app_main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='articles' element={<Articles />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

      </main>
    </div>
  )
}

*/


//?87 Lecture-3-Handling Invalid Routes with a "Not Found" Page
/*

- when we give some unauthroized route or some unothrized path which will not in application then we have to show proper
Message to User That Not Found

* App.jsx

import NotFound from './components/NotFound/NotFound';
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>

*/

//?88 Lecture-4-Building a Single-Page Application (SPA) with React Router

/*

- In this lecture, we learned how to create a single-page application using the React Router DOM dependency. We explored how components like Link and NavLink help us build SPAs and enhance the user experience by enabling smooth navigation.

# How To Make SPA Application

- so in our app when we click on any Navbar button everytime whole application load .... user have to wait when its big website
- so to make a SPA using react and react-rounder-dom depdency

#1st
- make link replace in place for anchor tag "a"
- link  comes from react-router-dom
- with link we have to use to="" attribute rather then href
  <a href="/">Home</a> to <Link to="/">Home</Link>

#2nd
- you can use NavLink instead of Link for the User to Know Where the user stay
- so NavLink Gives A Active Class to when we click any Navabar Button
- on that active class we dynmically chnage css and make that clickble portion highlight
  <NavLink to="/">Home </NavLink>

* Navbar.jsx

import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul className='navbar_list'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
            </ul>
        </nav>
    )
}

* Navbar.css

 .navbar_list a.active {
    font-weight: 500;
    color: blue;
}

- we see hear a why because react eventually convert that NavLink into a in browser so we have to use a.active
- because active class with in a tag
- in browser we see this
  <a class="active" href="/" data-discover="true">Home</a>


*/

//?89 Lecture-5-Route Parameters: Load Data Dynamically

/*
- In this lecture, we learned how to use Route Parameters in a React application to create dynamic routes.
- Route parameters allow us to pass data through the URL, such as /users/1 or /products/123, where 1 and 123 are dynamic values.
- We defined our routes using a colon syntax like :id, and accessed these values inside components using useParams() from react-router-dom.
- This is extremely useful when we want to fetch and display data based on the specific ID or value in the URL.

Snippet to Enable Emmet in React Files
Steps:
1-Open VS Code
2-Press Cmd + Shift + P (Mac) or Ctrl + Shift + P (Windows)
3-Type: Preferences: Open Settings (JSON) and press Enter
4-Inside the JSON file, paste the following snippet (or merge if emmet.includeLanguages already exists):

"emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "javascriptreact": "html"
  }

# App.js
    <Route path='/products' element={<Products />} />
    <Route path='/products/:id' element={<SingleProducts />} />   //--

# Products.jsx
import { Link } from "react-router-dom"
const Products = () => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/Products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/Products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/Products/3">Product 3</Link>
        </li>
      </ul>
    </div>
  )
}

# SingleProducts.jsx

import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProducts = () => {
  // const params = useParams();
  // console.log(params)
  const { id } = useParams();
  return (
    <div>
      <h2>SingleProducts-{id}</h2>
    </div>
  )
}

export default SingleProducts


*/

//?90 Lecture-6-Working with Query Strings Using useSearchParams Hook
/*
- In this lecture, we learned how to work with query strings in React Router using the useSearchParams hook.
- We explored how to read data from the URL query string and how to update it dynamically based on user actions or events.
- This makes our application more interactive and allows us to preserve state directly in the URL.

* Example

- when we search on youtube "Mr.Beast" then we Search "Mr.Beast" and in route we see Like This!
https://www.youtube.com/results?search_query=mr+beast
- so how we could achecive this in Articles by query strings and useSearchParams
- We Have one hook whatever you see in url we can use for that this hook called useSearchParams()

const[searchParams,setSearchParams] = useSearchParams()

#Articles.jsx
import React from 'react'
import { useSearchParams } from "react-router-dom";
const Articles = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const sortBy = searchParams.get("sortBy")
    const category = searchParams.get("category")
    const handleSortViews = () => {
        setSearchParams({
            sortBy: "Views",
        })
    }

    return (
        <div>
            <h2>
                Articles:
                <p>SortBy:{sortBy} Category:{category}</p>
                <button onClick={handleSortViews}>Sort On Views</button>
            </h2>
        </div>

    )
}

export default Articles

//? Examples

* 1

http://localhost:5173/articles?sortBy=frontend&category=technical
Output:SortBy:frontend Category:technical

* 2

http://localhost:5173/articles?sortBy=students&category=ClassB
Output:SortBy:students Category:ClassB

* 3
http://localhost:5173/articles?sortBy=gender&category=Humans
SortBy:gender Category:Humans

* By Click On Button we Can Change The Query on Route
http://localhost:5173/articles?sortBy=Views
SortBy:Views Category:

- searchParams gives use get method from that we can get data and by setSearchParams we can change Data
- searchParams.get() get the query string from Route and we dynmically {} get the value

*/

//?91 Lecture-7-Sorting Data with Query Strings: A Real-Life Example

//- In this lecture, we saw a demo of how to sort actual data—whether by views or by category—using query strings.
//- We explored a real-life example so you can understand it better in a practical context.

//?CODE
/*
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

*/


//?CODE
/*
if (category) {
   filterArticles = filterArticles.filter((article) => article.category === category)
}
if (sortByViews === "true") {
  filterArticles = [...filterArticles].sort((a, b) => a.views - b.views)
}
*/
//?Explanation
//- if my article which COMES from dummyArticles that article's category will be same as category of my given value catogray
//- then it will stored in filterArticles
//- what we want after category is sortBy . so we sortting the filtered array from category and sort by sort((a,b)=>a.views - b.views)
// a-b = Ascending = small to largest
// b-a = Dscending = largest to small
// here if you then filterArtciles = [...filterArticles] is both same its just that first giver array of object and we just destructing give ine by one object its same
//?For h2 JSX Explanation
// No params → sortBy = null, sortByViews = null, category = null.
// Line sortBy ?? (sortByViews === "true" ? "Views" : "none") → "none".
// Line category ?? "All" → "All".


//?92 Lecture-8-Nested Routing in React: Routes within Routes

/*
- we learned about nested routing, which is essentially routing inside another route. We've gone through it in detail with examples.
- its basically use when we want show nested components

* Admin.jsx

import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <div>
            <h1>Admin Page</h1>
            <ul>
                <li>
                    <Link to="/admin/sales">Sales</Link>
                </li>
                <li>
                    <Link to="/admin/sellers">Sellers</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Admin

* App.jsx

import Navbar from "./components/Navbar/Navbar";
import AllRoutes from './components/AllRoutes/AllRoutes';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <main className='app_main'>
        <AllRoutes />
      </main>
    </div>
  )
}
export default App

* AllRoutes.jsx

import { Route, Routes } from 'react-router-dom';
import Home from "../Home/Home";
import Articles from "../Articles/Articles"
import Admin from "../Admin/Admin"
import Products from "../Products/Products"
import Contact from "../Contact/Contact"
import NotFound from '../NotFound/NotFound';
import SingleProducts from "../Products/SingleProducts";
import Sales from "../Admin/Sales";
import Sellers from '../Admin/Sellers';
const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/products/:id' element={<SingleProducts />} />
                <Route path='articles' element={<Articles />} />

                <Route path='/admin' element={<Admin />} >
                    <Route path="sales" element={<Sales />} />
                    <Route path="sellers" element={<Sellers />} />
                </Route >

                <Route path='/contact' element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </div>
    )
}
export default AllRoutes


* Explantion

So the Difference
Nested Routes = How you structure routes (hierarchy of pages).
useParams = How you read the dynamic values (like id) from the URL.

They’re related but different:
You define a nested route to allow :id URLs.
Inside that component, you call useParams to actually get the id.

Key Difference

Nested Routes = parent + child render together.→ Useful when detail is a sub-section of the parent page.
Separate Routes = only one component shows at a time.→ Useful when detail should completely replace the parent page.

⚡ Quick Analogy:
Nested → Like YouTube: /videos shows a list, clicking a video still keeps the list (sidebar) + video player (nested).
Separate → Like a Login page: /login replaces everything, not part of the homepage.


*/

//?93 Lecture-9-Mastering Programmatic Navigation: Using the Navigate Component and UseNavigate Hook

// - here we understand and see example like : if my user is not Admin then he cant see the restricted Admin Componenet

//?Navigate
/*
- for that we have Navigate Component Given By react-router-dom

//?CODE
import { Link, Navigate, Outlet } from "react-router-dom";
const Admin = () => {
    const user = { role: "user" }
    if (user.role !== "admin") {
        return <Navigate to="/" />
    }
*/

//?useNavigate Hook

//- it can use for go Back The Step or you can use to Go Back to Specific Page


//?SingleProducts.jsx
/*
import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const SingleProducts = () => {
  const { id } = useParams();

  const navigate = useNavigate()
  const handleBack = () => {
    navigate("/Products/" + 3)
  }

  return (
    <div>
      <h2>SingleProducts-{id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}
export default SingleProducts

*/

//?for One Step Back
// const navigate = useNavigate()
// const handleBack = () => {
//   navigate(-1)
// }

//?for two Step Back
// const navigate = useNavigate()
// const handleBack = () => {
//   navigate(-2)
// }

//?for specific page
// const navigate = useNavigate()
// const handleBack = () => {
//   navigate("/Products")
// }

//?for specific page with dynamic id
// const navigate = useNavigate()
// const handleBack = () => {
//   navigate("/Products/" + 3)
// }
