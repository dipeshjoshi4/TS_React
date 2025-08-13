import React from 'react'
import "./Tag.css"
import { TagStyle, tagKeyMap } from '../../constant/common'

const Tag = (props) => {
    const { tagName, selectedTag, selected } = props
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