import React from 'react'
import "./Tag.css"

const Tag = (props) => {
    const { tagName, selectedTag, selected } = props

    const TagStyle = {
        DEV: { backgroundColor: "#04Caff" },
        QA: { backgroundColor: "#ff2e04" },
        PO: { backgroundColor: "#04ff2a" }
    }

    const tagKeyMap = {
        DEV: "DEV",
        QA: "QA",
        "Product Owner":"PO"
    }

    const key = tagKeyMap[tagName]
    return (
        <>
            <button type="button"
                style={selected ? TagStyle[key] : {}} className='tag' onClick={() => { selectedTag(tagName) }}>{tagName}
            </button>
        </>
    )
}

export default Tag;