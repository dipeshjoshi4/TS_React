

//!-----------------------------------------------------------------------------------------------------------
                                        //MODULE-3-NOTES
//!-----------------------------------------------------------------------------------------------------------


//! React Basics
// - Building Components
// - JSX & Babel
// - Adding Elements
// - Adding JS Expression
// - Attributes
// - Events
// - State
// - use State Hook
// - Handling Inputs
// - Mapping Lists

//! # 41 Lecture-1-Setting Up a New React Project the Right Way

// - as name suggest basic react project setup with name => "dailytask"

//! # 42 Lecture-2-Building Your First Reusable Component

//? Component-Based Architecture
// - Break UI Into smaller,resuables pieces(Components)
// - Improve code resuability and maintainability
// - Example- Navbar,sidebar,ProductCard

//? * Naming Convential and file structure
// - Component name should be in PascalCase
// - src > Components > Card.jsx

//? * why jsx?
// -because we have to write js and html both so we used jsx and same sometime for typescript +html we write tsx

//? * React Component
// - A function that returns a React element
// - mainly there are 2 type
// - Functional Component (Only in Use)
// - Class Component

//? *CODE snippet for Card.jsx(With Arrow Function)
// import React from 'react';
// const Card = () => {
//     return <h1>Hello Card Component</h1>;
// }
// export default Card;


//?CODE snippet for Card.jsx (With Function Declaration)
// import React from 'react';
// const Card = () => {
//     return <h1>Hello Card Component</h1>;
// }
// export default Card;

//?Then put into main.jsx
// import Card from "./Components/Card.jsx";
// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <Card />
//     </StrictMode>,
// )

//! 43 Lecture-3-JSX & Babel: How They Work Together?

// Introducing the New JSX Transform(Ref this - https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html )

//?BEFORE React 17: Full Flow

// 1️⃣ You write JSX: const element = <h1>Hello</h1>;

// 2️⃣ Babel converts it into:const element = React.createElement('h1', null, 'Hello');

// 2️⃣ You must import React in the file:import React from 'react';

// 4️⃣ React.createElement() returns a React Element(a plain JS object)Virtual DOM & Real DOM Update

// 5️⃣ React uses this element to build the Virtual DOM.

// 6️⃣ It compares with the previous Virtual DOM(Diffing).

// 7️⃣ Then it updates the Real DOM efficiently.

// 8️⃣ Finally, the browser renders plain HTML - <h1>Hello</h1>

//? AFTER React 17: Full Flow(New JSX Transform)

// JSX Compilation & React Element Creation

// 1️⃣ You write the same JSX: ==> const element = <h1>Hello</h1>;

// 2️⃣ Babel now converts it into:
// import { jsx as _jsx } from 'react/jsx-runtime';
// const element = _jsx('h1', { children: 'Hello' });

// 3️⃣ No need to import React manually in the file.

// 4️⃣ _jsx() returns a React Element(like React.createElement used to).Virtual DOM & Real DOM Update

// 5️⃣ React takes the element and builds the Virtual DOM.

// 6️⃣ It compares with the previous Virtual DOM(Diffing).

// 7️⃣ Then it updates the Real DOM accordingly.

// 8️⃣ Finally, the browser renders plain HTML - <h1>Hello</h1>

//!44 Lecture-4-Naming Conventions: CamelCase, PascalCase & Kebab-Case Simplified

// - In this lecture, I have covered the best practices and naming conventions we use when creating components. I’ve also shared the workflow before React 17 and how it changed after React 17.

//Camel Case: Writing phrases without spaces, where each word after the first one starts with a capital letter (like myVariableName).

// Kebab Case: Writing phrases all in lowercase, with words separated by hyphens (like my-variable-name).

// Pascal Case: Similar to Camel Case, but every word starts with a capital letter, including the first one (like MyVariableName).

//?BEFORE React 17: Full Flow

// 1️⃣ You write JSX: const element = <h1>Hello</h1>;

// 2️⃣ Babel converts it into:const element = React.createElement('h1', null, 'Hello');

// 3️⃣ You must import React in the file:import React from 'react';

// 4️⃣ React.createElement() returns a React Element (a plain JS object) Virtual DOM & Real DOM Update

// 5️⃣ React uses this element to build the Virtual DOM.

// 6️⃣ It compares with the previous Virtual DOM (Diffing).

// 7️⃣ Then it updates the Real DOM efficiently.

// 8️⃣ Finally, the browser renders plain HTML - <h1>Hello</h1>

//? AFTER React 17: Full Flow (New JSX Transform)

// JSX Compilation & React Element Creation

// 1️⃣ You write the same JSX: const element = <h1>Hello</h1>;

// 2️⃣ Babel now converts it into:
// import { jsx as _jsx } from 'react/jsx-runtime';
// const element = _jsx('h1', { children: 'Hello' });

// 3️⃣ No need to import React manually in the file.

// 4️⃣ _jsx() returns a React Element (like React.createElement used to).Virtual DOM & Real DOM Update

// 5️⃣ React takes the element and builds the Virtual DOM.

// 6️⃣ It compares with the previous Virtual DOM (Diffing).

// 7️⃣ Then it updates the Real DOM accordingly.

// 8️⃣ Finally, the browser renders plain HTML  - <h1>Hello</h1>

// - react import line reduce the project bundle size decrease


//? - here in vite through we make react project and here babel not use here vite use esbuild for work as convert jsx into js as transpile
//? - you can search esbuild in file and you found at dependecy
//? - you can modify and use any transpiler which are famouse

//!45 Lecture-5-React Fragments: Adding Elements Seamlessly

// - we see babel transpile in js code .but if you see then you will notice the code which converted its not pure js there many things which is not js
//- so at end of the day the many bundle(webpacks) which we use either is rollup,parcel..... are cpnverted them in js and putit on server

//? Moving to react fragment
//- when we write jsx there is one rule we have to put multiple things then it must be in parent element means
const greet = () => {
    return (
        <div>
            <h1>hello</h1>
            <button>Childrean</button>
        </div>
    )
}
// -so when we transpile this code with babel it convert in js and js make object and accept make childrean thats why we have one parent required

//- Now react internally gives us <React.Fragment></React.Fragment> or <></>. we can simply use it as parent and get rido unnecessary div

//!46 Lecture-6-Using JavaScript Expressions Inside JSX

//- js code writes inside jsx
//- in js you can {2*3}, you make function ,variable all the things you do here same but above return which want declare

//?------------------------------------------------------------------CODE-----------------------------------------------------

/*
const CreateTodo = () => {
    const task = 8;

    // const countTask = () => {
    //     if (task === 0) {
    //         return "No Task Is Available!!!"
    //     } else {
    //         return `Total Task is ${task}`;
    //     }
    //     return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    // }

    const countTask = () => {
        return task === 0 ? "No Task Is Available!!!" : `Total Task is ${task}`
    }

    return (
        <>
            <h1>{countTask()}</h1>
            <button>Add Task</button>
        </>
    )
}
export default CreateTodo;

*/