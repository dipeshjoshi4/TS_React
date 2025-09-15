
import CustomInput from './CustomInput '

import React, { useRef } from 'react'
// import { useContext } from 'react'
import { UserContext, useUserDetails } from '../../Context/UserContext';


const Parent = () => {
    const inputEle = useRef(null);
    console.log(inputEle.current)

    // const { name, setName } = useContext(UserContext)

    const { name, setName } = useUserDetails();

    // const [name, setName] = useState("")
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