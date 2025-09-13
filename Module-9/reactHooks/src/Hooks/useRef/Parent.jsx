import React, { useRef, useState } from 'react'
// import Custominput from './Custominput'; //warning ignore
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
            <button onClick={() => { inputEle.current.focusInput() }}>focus</button>
            <button onClick={() => { inputEle.current.clearInput() }}>clear</button>


            {/* for the Forward */}
            {/* <button onClick={() => { inputEle.current.focus() }}>Focus</button> */}
            {/* <button onClick={() => { inputEle.current.value = "" }}>Clear</button> */}
        </div>
    )
}

export default Parent