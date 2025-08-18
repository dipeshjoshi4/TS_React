import './App.css'
import React from "react";
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

export default App
