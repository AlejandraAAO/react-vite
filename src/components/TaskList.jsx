import TaskCard from "./TaskCard";
export default function TaskList({tasks}) {
  

  //comprobar si esta lleno el array
  if (tasks.length === 0) {
    return <h2>No hay tareas</h2>;
  }

  return (
    <div>
      {tasks.map((task) => (
       <TaskCard key={task.id} task ={task}/>
      ))}
    </div>
  );
}
