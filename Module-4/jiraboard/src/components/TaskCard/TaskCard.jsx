import React from 'react'
import "./TaskCard.css"
import Tag from "../Tag/Tag"
import deleteIcon from "../../assets/deleteIcon.png"

const TaskCard = () => {
    return (
        <article className='taskcard'>
            <p className='task_text'>This is Simple Text</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    <Tag tagName="DEV" />
                    <Tag tagName="QA" />
                </div>
                <div className='task_delete'>
                    <img src={deleteIcon} alt="" className='deleteIcon' />
                </div>
            </div>

        </article>
    )
}

export default TaskCard