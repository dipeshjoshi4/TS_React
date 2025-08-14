import React from 'react'
import "./TaskCard.css"
import Tag from "../Tag/Tag"
import deleteIcon from "../../assets/deleteIcon.png"

const TaskCard = ({ title, tags, handleDelete,index }) => {
    return (
        <article className='taskcard'>
            <p className='task_text'>{title}</p>
            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {
                        tags.map((tag, index) => (<Tag key={index} tagName={tag} selected />))
                    }
                </div>
                <div className='task_delete' onClick={() => { handleDelete(index) }}>
                    <img src={deleteIcon} alt="" className='deleteIcon' />
                </div>
            </div>

        </article>
    )
}

export default TaskCard