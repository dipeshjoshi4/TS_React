//!128 Lec-13-useID() – Generating Unique IDs in React

//In this lecture, we dive into the useId hook introduced in React 18. We'll explore how useId helps you generate unique IDs to avoid clashes, We'll break down how React internally assigns IDs and how useId makes it seamless.

//const id = useId()

// -only top level or not call in inside if.. condition or loop
//- gives unique id internally
// - no parameter
//- own Hook Top Level
// - not use for list while iterate


//? for htmlfor we need id and for that we give manully id
// return (
//     <div>
//         <input type="checkbox" id="checkbox-one" />
//         <label htmlFor='checkbox-one'>Accept Term & Conditions</label>
//     </div>

//? for htmlfor we need id and for that we give manully id
// const id = useId()
// return (
//     <div>
//         <input type="checkbox" id={id} />
//         <label htmlFor={id}>Accept Term & Conditions</label>
//     </div>

//?App.jsx
{/* <MyUseId/>
<MyUseId/> */}
//?if we use mention 2 times still the id will be  id given by interally react and its different
