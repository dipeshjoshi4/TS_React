
//! 122 Lec-7-Understanding Context API: Using createContext and useContext Hooks

// props pass from a-> b -> c -> d -> f is call props drilling and too much prop drilling cause problem

/*
- In this lecture, we talked about the createContext and useContext hooks in React. 
- We explained what the Context API is used for—basically, to avoid prop drilling when you need to pass data through multiple layers of components.
- We covered a very simple example to show how you can create a provider at a global level and then consume that data wherever needed using a consumer. 
- This way, you can manage shared state easily without passing props down manually through every component.
*/

//? Defination -Context API
// - is a way to share data across components without passing props manually at every level
// - it's like a global store(but lightrt then redux)

//?Usecase
// - best for theme,user auth,global settings,language etc.


//- save from prop-drilling, 
//- our application have one provider and which provide date 


//?CODE-

//?-------------------------------------------UserContext.js
import { createContext } from "react";
export const UserContext = createContext(null);

//?--------------------------------------------App.jsx

import { useState } from "react"
import Parent from "./Hooks/useRef/Parent"
import { UserContext } from "./Context/UserContext"
function App() {
    const [name, setName] = useState("Ajay")
    return (
        <>
            <h1>App Component </h1>
            <UserContext.Provider value={{ name, setName }}>   //?imagine as parent
                <Parent />                                     //?imagine as Childrean
            </UserContext.Provider>
        </>
    )
}

//?-------------------------------------------Parent.jsx
import CustomInput from './CustomInput '
import React, { useContext, useRef } from 'react'
import { UserContext } from '../../Context/UserContext';
const Parent = () => {
    const inputEle = useRef(null);
    console.log(inputEle.current)
    const { name, setName } = useContext(UserContext) // only this chnage which came from app,jsx userContext.provider provide the data
    return (
        <div>
            <h2>Custom</h2>
            <p>hello {name}</p>
            <CustomInput ref={inputEle} changeName={(e) => { setName(e.target.value) }} />
            <button onClick={() => { inputEle.current.focusInput() }}>focus</button>
            <button onClick={() => { inputEle.current.clearInput() }}>clear</button>
        </div>
    )
}




