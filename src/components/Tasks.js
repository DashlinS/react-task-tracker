import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    
    <>
     {tasks.map((task) => (
       //need key prop to make each task unique
     <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
     ))} 
    </>
  )
}

export default Tasks
