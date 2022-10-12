import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useState, useEffect} from "react";
//ejercicio x : separar data en otro archivo
const data = [
  { id: 0, title: "mi primera tarea", description: "1111 tarea" },
  { id: 1, title: "mi segunda tarea", description: "2222 tarea" },
];


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

//como solo recibo el string del titulo
 // function createTask (taskTitle){
   // setTasks([...tasks,{title: taskTitle, id:tasks.length,////description:'eee'} ])
//  }

  //Solo si envio todo el obj y lo pego al obj anterior
 //function createTask (task){
   // setTasks([...tasks,task ])
  //}

function createTask (task){
  setTasks([...tasks,{
    title:task.title,
    id:tasks.length,
    description:task.description
  } ])
 }

  return (
    <div>
      <TaskForm createTask = {createTask}/>
      <TaskList tasks ={tasks} />
      
    </div>
  );
}
export default App;
