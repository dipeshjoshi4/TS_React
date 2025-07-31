import "./task-form.css";

const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input type='text' placeholder='Enter Class Details' className='task_input' />

                <div className='task_form_bottom'>

                    <div>
                        <button className='tag'>DEV</button>
                        <button className='tag'>QA</button>
                        <button className='tag'>Product Owner</button>
                    </div>

                    <div>
                        <select className='task_status'>
                            <option value="Ready For Development">Ready For Development</option>
                            <option value="Task In Progress">Task In Progress</option>
                            <option value="Ready For Test">Ready For Test</option>
                            <option value="Closed">Closed</option>
                        </select>
                        <button type='submit' className='task_submit'>+Add</button>
                    </div>

                </div>
            </form>

        </header>
    )
}

export default TaskForm