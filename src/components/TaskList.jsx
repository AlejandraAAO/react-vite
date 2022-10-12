import TaskCard from "./TaskCard";
export default function TaskList({tasks,deleteTask}) {
  

  //comprobar si esta lleno el array
  if (tasks.length === 0) {
    return <h2>No hay tareas</h2>;
  }

  return (
    <div>
      {tasks.map((task) => (
       <TaskCard key={task.id} task ={task} deleteTask={deleteTask}/>
      ))}
    </div>
  );
}
