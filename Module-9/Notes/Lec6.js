//!121 Lecture-6-useImperativeHandle() Exposing Methods in Components

/*
- While in the previous session we learned how to pass a ref from a parent component to a child using forwardRef.
- this time we're focusing on the reverse scenario. If you need to expose a function or some other imperative handle from a child component back to the parent, useImperativeHandle is the tool for the job.

In this lecture, we’ve provided a practical example to illustrate how you can define a function in your child component and make it accessible to the parent using useImperativeHandle. By the end of this session, you'll have a clear understanding of how to handle such scenarios effectively.

*/



//use to child to parent 

//? Parent.jsx

import React, { useRef, useState } from 'react'
import CustomInput from './CustomInput '
const Parent = () => {
    const inputEle = useRef(null);
    const [name, setName] = useState("")
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
// export default Parent

//?CustomInput.jsx

import React, { forwardRef, useImperativeHandle, useRef } from 'react'
const customInput = forwardRef((props, ref) => {
    //for IMprevative
    const inputEle = useRef();
    useImperativeHandle(ref, () => ({ 
        focusInput: () => {
            inputEle.current.focus()
        },
        clearInput: () => {
            inputEle.current.value = ""
        }
    })
    )
    return (
        <div>
            {/* <input type="text" ref={ref} onChange={props.changeName} /> // for the forward */}
            <input type="text" ref={inputEle} onChange={props.changeName} />
        </div>
    )
})
export default customInput

//two thing in useImpretive ref, callback  = Object =>  which have all the method you wanna pass on parent

//?Difference

//?Parent-child
//first we use useRef and pass ref to childrean

//?Child-Parent
//now we use useRef and pass method  to ref => which goes to use by parent 