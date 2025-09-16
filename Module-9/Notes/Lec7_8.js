
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




//!122 Lecture-8-Understanding Context API: Using createContext and useContext Hooks

/*
- In this lecture, we built on what we learned in the last lecture about the Context API and saw how to write more advanced code like it’s done at a company.
- We explored how you can create a custom hook to use context more easily across your components.
- We introduced a new and more advanced syntax where you define the provider at the context level and pass children to it so that all components can access the data.
- This is a more professional way to structure your code and avoid repetitive prop drilling.
*/

//?------------------------------------------------------------------UserContext.jsx
// import React, { createContext, useContext } from "react";
// export const UserContext = createContext(null);

// //?Custom Hook - using useContext //Using this line  to in Hook -> const { name, setName } = useContext(UserContext)
// export const useUserDetails = () => {
//     const userContext = useContext(UserContext)
//     if (!userContext) {
//         throw new Error("UserDetails Must Be Used Inside the UserContextProvider")
//     }
//     return userContext
// }

// //?Export Function to rid from App.jsx
// export const UserContextProvider = ({ children, userDetails }) => {
//     return (
//         <UserContext.Provider value={userDetails}>
//             {children}
//         </UserContext.Provider>
//     )
// }

//?------------------------------------------------------------------Parent.jsx

//?Replace this Line
// import { useContext } from 'react'
// const { name, setName } = useContext(UserContext)

//?With This New Morden Custom Hook
const { name, setName } = useUserDetails();

//?------------------------------------------------------------------App.jsx
import { UserContext, UserContextProvider } from "./Context/UserContext"
<UserContextProvider userDetails={{ name, setName }}>
    <Parent />
</UserContextProvider>


//in this lecture-8- 