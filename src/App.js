import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



// function  App() {
const App = () => {
    // state to toggle the Add btn
    const [showAddTask, setShowAddTask] = useState(false)

    // declare a new func to set state
    const [tasks, setTasks] = useState([])

    // use the useEffect
    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        
        getTasks()
    }, [])
    // Fetch Tasks
    const fetchTasks = async () => {
            const res = await fetch('http://localhost:5500/tasks')
            const data = await res.json()

            // console.log(data);
            return data
        }

// dd Task
const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
}
    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // create toggle reminder
    const toggleReminder = (id) => {
        // console.log(id)
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task,
                    reminder:
                        !task.reminder
                } : task)
        )
    }

    return ( 
      <div className = "container" >
            <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask} / > 
        
            {showAddTask && <AddTask onAdd={addTask} />}
        {
            tasks.length > 0 ? 
            ( // if the length of tasks is greater than 0
                <Tasks tasks = { tasks }
                onDelete = { deleteTask } //pass the func to onDelete
                onToggle = { toggleReminder } // pass the toggle
                />
            ) : ( // else
                'No Tasks To Show' // show a msg
            )
        } 
        </div> 
    );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;