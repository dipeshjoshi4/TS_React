//!124 Lecture-9-PART-1-useReducer():Alternative to useState for Complex Logic-

/*
In this lecture, we covered the useReducer hook, which you can think of as a simpler version of Redux.
It helps you manage more complex state logic in your project.
We started with a very basic example so you can get familiar with the syntax and understand how it works.
In the next lecture(PART-2), we'll dive into more complex structures, but for now, you’ll get a solid idea of how to implement useReducer in your own projects.
*/

/*
?dispatch
- action throws

?action
- its object and we get type

?intial state
- starting default value we set sometimes

*/

//?------------------------------------------------Example Why and WhEN useState is Good------------------------------------------------
/*
🔹 Example: Managing Multiple Counters
? 1. With useState

If we have 2 counters, state handling gets messy fast:

import React, { useState } from "react";

export default function MultiCounterState() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <h2>Counter A: {countA}</h2>
      <button onClick={() => setCountA(countA + 1)}>Increment A</button>
      <button onClick={() => setCountA(countA - 1)}>Decrement A</button>
      <button onClick={() => setCountA(0)}>Reset A</button>

      <h2>Counter B: {countB}</h2>
      <button onClick={() => setCountB(countB + 1)}>Increment B</button>
      <button onClick={() => setCountB(countB - 1)}>Decrement B</button>
      <button onClick={() => setCountB(0)}>Reset B</button>
    </>
  );
}


➡️ Lots of repeated code, separate handlers for each counter. If you add 5 counters → code explodes.

 ?------------------------------------------------Why and When useReducer is Good------------------------------------------------
2. With useReducer

We can scale easily:

import React, { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, [action.counter]: state[action.counter] + 1 };
    case "DECREMENT":
      return { ...state, [action.counter]: state[action.counter] - 1 };
    case "RESET":
      return { ...state, [action.counter]: 0 };
    default:
      return state;
  }
}

export default function MultiCounterReducer() {
  const [state, dispatch] = useReducer(reducer, { A: 0, B: 0 });
  return (
    <>
      <h2>Counter A: {state.A}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", counter: "A" })}>Increment A</button>
      <button onClick={() => dispatch({ type: "DECREMENT", counter: "A" })}>Decrement A</button>
      <button onClick={() => dispatch({ type: "RESET", counter: "A" })}>Reset A</button>
      <h2>Counter B: {state.B}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT", counter: "B" })}>Increment B</button>
      <button onClick={() => dispatch({ type: "DECREMENT", counter: "B" })}>Decrement B</button>
      <button onClick={() => dispatch({ type: "RESET", counter: "B" })}>Reset B</button>
    </>
  );
}


➡️ Here we can manage any number of counters with a single reducer.
Adding a Counter C? → Just extend initial state { A: 0, B: 0, C: 0 }.
No duplicate functions.
Logic is centralized in reducer.

🔑 Key Takeaway
useState = ✅ short, simple, but repetitive if state grows.
useReducer = ✅ structured, reusable, great when scaling or team collaboration.


*/


//!125 Lecture-2-Part-2 : Advanced useReducer: Handling Complex State Management

//?-------------------------------------------REDUCER LOGIC--------------------------------------------------
/*
The reducer logic

Your reducer looks like this:

function reducer(state, action) {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      }
    case "reset":
      return initialState;
    default:
      return state;
  }
}
Let’s unpack the "updateField" part:
return {
  ...state,
  [action.field]: action.value,
}


...state →copies everything that was already in state (name, email, age).
[action.field] → this is dynamic property access in JavaScript.
If action.field = "name", then this becomes name: action.value.
If action.field = "email", then this becomes email: action.value.
If action.field = "age", then this becomes age: action.value.
So depending on which input you typed into, the correct property in the object gets updated automatically.

?Step 4: Where do field and value come from?

?Your change handler:
const handleChange = (e) => {
  dispatch({
    type: "updateField",
    field: e.target.name,
    value: e.target.value,
  })
}

e.target.name → comes from the input’s name attribute.
For the name input → "name"
For the email input → "email"
For the age input → "age"
e.target.value → whatever you typed inside the input.
So the dispatch sends something like:
{ type: "updateField", field: "email", value: "dipesh@example.com" }

?Step 5: How state updates dynamically

?Suppose your current state is:
{ name: "", email: "", age: "" }

?You type Dipesh in the name field → dispatch sends:
{ type: "updateField", field: "name", value: "Dipesh" }

?Reducer runs:
return {
  ...state,              // keeps old email and age
  [action.field]: action.value,   // changes name
}

?New state becomes:
{ name: "Dipesh", email: "", age: "" }


If you then type in email, reducer will only update the email field, leaving the others as is.

✅ That’s how your reducer dynamically updates any field, without writing separate code for each one.
Instead of hardcoding case "updateName", case "updateEmail", etc., you just use [action.field].

*/