import React, { useId } from 'react'

const MyUseId = () => {
    const id = useId()
    return (
        <div>
            {/* <input type="checkbox" id="checkbox-one" /> */}
            {/* <label htmlFor='checkbox-one'>Accept Term & Conditions</label> */}
            <input type="checkbox" id={id} />
            <label htmlFor={id}>Accept Term & Conditions</label>
        </div>
    )
}

export default MyUseId