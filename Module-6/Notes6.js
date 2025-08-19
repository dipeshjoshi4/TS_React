
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