//!119 Lecture-4-useRef() in React – DOM Access & References & Avoiding Re-renders

//- The main purpose of useRef is to directly access DOM elements and to create mutable variables that don't cause a component to re-render.
//- We discussed how useRef can be an alternative to state variable without Re-renders the component.

// const first = useRef(second)


//Ex-1-infinite
useEffect(() => {
        setCount(count + 1)
})

//Ex-2-infinite Time - because count++ happen , then again count chnage useEffect run count ++ happen
useEffect(() => {
        setCount(count + 1)
},[count])

//Ex-3 - One Time
useEffect(() => {
        setCount(count + 1)
}, [])

//? the main aim is we have to see many time render happen while writing on input so we use useEffect but it cant solve our problem

//- UseRef allows us to direct access DOM Elements
//- for Creating mutable variables which  will not re-render the component => count.current 