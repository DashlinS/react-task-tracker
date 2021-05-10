// import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Doctors Appointment",
      day: "Feb 6th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Car Wash",
      day: "Feb 7th at 2:30pm",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder } : task))
  }

 return (
    <div className="container">
      {/* can pass props as attributes to be called as an argument in header */}
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
     : 'No Tasks Remaining'}
     </div>
  );
}

//Using a class
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a Class</h1>
//   }
// }

export default App;
