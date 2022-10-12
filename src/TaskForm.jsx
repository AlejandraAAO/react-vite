import { useState } from "react";

//pasando la funcion createTask
export default function TaskForm({createTask}) {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //un obj que se puede añadir al array
    //const newTask = {
     //   title:title,
      //  id:4,
       // description:'aaaa'
    //}

    //puedo solamente pasarle un string
    createTask(title)
  };

  return (
    <div>
      <form placeholder="Ingresa TU TAREA " onSubmit={handleSubmit}>
        <input placeholder="aqui" onChange={(e) => setTitle(e.target.value)} />
        <button>Enviar</button>
      </form>
    </div>
  );
}
