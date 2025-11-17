
//!-------------------Code Spliting with React.lazy and Dynamic Import------------------

//! Code in First Folder 

//- how we as per need load our components and code not unnecessary load on App

//? Code-Splitting (React.lazy + dynamic import)

//?Definition:
//- Code-splitting breaks your React app’s JavaScript into smaller chunks that load only when required, instead of loading everything upfront.

//?Benefit:
//- Smaller initial bundle → faster first load, better performance.

//! Lazy loading vs Code-splitting

//?Code-splitting:
//- The build step that splits your app into multiple bundles.

//?Lazy loading:
//- The runtime behavior that fetches those bundles (or images) only when needed or visible on screen.
//- We use React.lazy with a dynamic **import()** for About and Contact. Each component becomes its own chunk.
//- The browser only downloads the chunk when the user requests it (e.g., clicks a button).
//- Suspense : just shows a loading UI while that chunk is being fetched.


//?Here are **real-life examples** where code-splitting + lazy loading is commonly used:

// 1.  Routing pages(Home, About, Contact, Dashboard)
// 2.  Admin panel sections ** (Users, Orders, Settings)
// 3.  Charts & graphs(heavy libraries like Chart.js, Recharts)
// 4.  Maps(Google Maps, Leaflet)
// 5.  Modals / Dialogs(only load when opened)
// 6.  Image galleries(load each gallery section lazily)
// 7.  Video players(YouTube player, custom player)
// 8.  Rich text editors(Quill, Draft.js, TinyMCE)
// 9.  Data tables(big table components with pagination)
// 10.  Product detail sections(reviews, recommendations)
// 11.  E - commerce cart sidebar
// 12.  Filters panel in shopping sites
// 13.  Chat window or chat widget
// 14.  User profile tabs(Posts, Friends, Photos)
// 15.  Analytics dashboard widgets


//?Code

//?App.js
/*
import React, { Suspense, useState } from 'react'
const About = React.lazy(() => import("./Components/About"))
const Contact = React.lazy(() => import("./Components/Contact"))
function App() {
  const [showAbout, setAbout] = useState(false)
  const [showContact, setContact] = useState(false)
  return (
    <>
      <button onClick={() => { setAbout(true) }}>Load About Component</button>
      <button onClick={() => { setContact(true) }}>Load Contact Component</button>
      <Suspense fallback={<p>Loading Components....</p>}>
        {showAbout && <About />}
        {showContact && <Contact />}
      </Suspense>
    </>
  )
}

export default App


*/