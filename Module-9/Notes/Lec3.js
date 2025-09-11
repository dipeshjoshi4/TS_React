
//!118 Lecture-3-Understanding useEffect vs. useLayoutEffect in React: When and Why to Use Them

/*
- In this lecture, we’ve explored the differences between useEffect and useLayoutEffect in React. 
- The useEffect hook is used for handling side effects like API calls or DOM updates after the component has rendered and the changes have been painted to the screen.

In contrast,
- useLayoutEffect is for scenarios where you need to make layout changes before the browser paints, running synchronously after the DOM mutations but before the paint.
- This makes it useful for layout adjustments like measuring or updating styles right before the browser repaints.

? We discussed the React rendering lifecycle:
- the render phase (where the virtual DOM is created), the commit phase (where changes are applied to the real DOM), and the paint phase (where the browser updates the UI). 
- The key point is that useEffect runs after the paint phase, while useLayoutEffect runs just after the commit phase but before the paint.
- And just to clarify, useLayoutEffect →  Runs synchronously in the commit phase ( Just like componentDidMount/componentDidUpdate).

*/

//- useEffect Call Only After YOur Component Render
//- you can chnage any direct thing in this useEffect but its not recommanded
//?CODE
useEffect(() => {
    document.title = "Direct Chnage"
    console.log("Hello UseEffect")
}, [])


//?1st
//When No Dpedendcy then every render it will run
// rendering.....
// Hello UseEFEFCT 300
// rendering.....
// Hello UseEFEFCT 600
// rendering.....

//?2nd
//When Dpedendcy [] then it run on one go
// rendering.....
// Hello UseEFEFCT 300
// rendering.....

//?3rd
//when depdency depden on something chnage on width [width]
// rendering.....
// Hello UseEFEFCT 300
// rendering.....
// Hello UseEFEFCT 600
// rendering.....


//?useLayoutEffect

//- when you compare vdom and actual dom then  commit and after that you have to sudden Change in layout it use

//?useEfect => last run
//?useLayout => first run on layout