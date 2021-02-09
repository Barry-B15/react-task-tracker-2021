import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from './components/About';

// import { wait } from "@testing-library/react";



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
    // Fetch Tasks
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5500/tasks/${id}`)
        const data = await res.json()

        return data
    }

// dd Task
const addTask = async (task) => {
    const res = await fetch('http://localhost:5500/tasks', {
        //  REQUEST
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
    })

    //RESPONSE 
    const data = await res.json()
    //SET TASKS
    setTasks([...tasks, data])

    //console.log(task)

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
}
    //Delete Task
    //const deleteTask = (id) => {
    const deleteTask = async (id) => { 
        await fetch(`http://localhost:5500/tasks/${id}`, 
        {
            method: 'DELETE',
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    // create toggle reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle,
        reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5500/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        // console.log(id)
        setTasks(
            tasks.map((task) =>
                task.id === id ? {...task,
                    reminder: data.reminder
                } : task)
        )
    }

    return ( 
        <Router> 
        <div className = "container" >
                <Header onAdd={() => setShowAddTask(!showAddTask)}  showAdd={showAddTask} / > 
                
                <Route path='/' exact render={(props) => (
                    <>
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
                   </>
                )} />

                <Route path='/about' component={About} />

                <Footer />
           </div> 
        </Router>
    );
}

export default App;