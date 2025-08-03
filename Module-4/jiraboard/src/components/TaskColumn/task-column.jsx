import React from 'react'
import "./task-column.css"

const TaskColumn = (props) => {
    return (
        <div>
            <section className="task_Column">
                <h2 className='task_column_heading'>
                    <img src={props.icon} alt='' className='task_column_icon'></img>
                    {props.title}</h2>
            </section>
        </div>
    )
}

export default TaskColumn;