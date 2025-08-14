import React from 'react'
import "../DropArea/DropArea.css"
import { useState } from 'react';


const DropArea = () => {

    const [showDrop, setShowDrop] = useState(false);

    return (
        <section className={showDrop ? "drop-area" : "hide-area"}
            onDragEnter={() => { setShowDrop(true) }}
            onDragLeave={() => { setShowDrop(false) }}>
            Drop-Area
        </section>
    )
}

export default DropArea