import React from "react";

export default function TaskCard({task,deleteTask}) {

//function deleteTask() {
  //retorna el id de la tarea
  //console.log(task.id)
//}

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}
