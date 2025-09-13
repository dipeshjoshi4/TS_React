
//!120 Lecture-5-Passing Refs from Parent to Child: Understanding forwardRef in React


// the ref is like props but special types of props you cant send as normal props. you have to use forwardRef. its best practise

//- In this lecture, we delved into the concept of forwardRef in React.
//- Essentially, forwardRef is a technique that allows you to pass a ref from a parent component down to a child component.
//- While we typically use props to pass data between parent and child components, forwardRef is specifically for situations where you want to pass a reference—for example, a ref created with the useRef hook in the parent—directly to the child.
//- In this lecture, we’ve walked through a clear example so you can see exactly how forwardRef works in practice.
//- By the end of this session, you'll have a solid understanding of how to use it whenever you need to pass refs down your component tree.

//?Parent.jsx
/*
import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput '
const Parent = () => {
    const inputEle = useRef(null);
    console.log(inputEle.current)
    const [name, setName] = useState("")
    return (
        <div>
            <h2>Custom</h2>
            <p>hello {name}</p>
            <CustomInput ref={inputEle} changeName={(e) => { setName(e.target.value) }} />
            <button onClick={() => { inputEle.current.focus() }}>Focus</button>
            <button onClick={() => { inputEle.current.value = "" }}>Clear</button>
        </div>
    )
}
export default Parent
*/

//?CustomInput.jsx
/*
import React, { forwardRef } from 'react'
const customInput = forwardRef((props, ref) => {
    console.log("Forward REF", props, ref)
    return (
        <div>
            <input type="text" ref={ref} onChange={props.changeName} />
        </div>
    )
})
export default customInput
*/


// ref transfer to child we need forwardRef().that it you can pass through chnage name ref into "myref" but that a bad practise 