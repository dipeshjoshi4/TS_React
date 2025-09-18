import React, { useEffect, useState } from 'react'

const PrintTable = ({ calculateTables }) => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        console.log("Print Tables")
        setRows(calculateTables()) // for getting an array
    }, [calculateTables])

    return (

        rows.map((row, index) =>
            (<p key={index}>{row}</p>)
        )

    )
}

export default PrintTable