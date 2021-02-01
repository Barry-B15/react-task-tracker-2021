import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



// function  App() {
const App = () => {
    // declare a new func to set state
    const [tasks, setTasks] = useState(
        [{
                id: 1,
                text: 'Doctor Appointment',
                day: 'Feb 5th at 2:30pm',
                reminder: 'true',
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 6th at 3:30pm',
                reminder: 'true',
            },
            {
                id: 3,
                text: 'Shopping for Food',
                day: 'Feb 7th at 5:30pm',
                reminder: 'false',
            }
        ]
    )

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
        <Header / > 
        <AddTask onAdd={addTask} />
        {
            tasks.length > 0 ? ( // if the length of tasks is greater than 0
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