
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";


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
  return (
     <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div> 
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from Class</h1>
//   }
// }

export default App;
