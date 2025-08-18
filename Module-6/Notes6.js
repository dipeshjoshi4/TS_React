
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

//? 87 Lecture-3-Building a Single-Page Application (SPA) with React Router
