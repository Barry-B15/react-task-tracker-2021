import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => { //catch the props

    return ( 
        <>
        {
            tasks.map((task) => ( <
                Task key = { task.id }
                task = { task }
                onDelete = { onDelete }
                onToggle = { onToggle } // pass the prop
                / > 
            ))
        } 
        </>
    )
}

export default Tasks