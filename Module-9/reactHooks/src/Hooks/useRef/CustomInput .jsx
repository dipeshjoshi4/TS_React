import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const customInput = forwardRef((props, ref) => {
    console.log("Forward REF", props, ref)

    const inputEle = useRef();

    //for IMprevative
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
