import { useState } from "react";

//pasando la funcion createTask
export default function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    //estado vacio
    setTitle("");
    setDescription("");

    //un obj que se puede añadir al array
    //const newTask = {
    //   title:title,
    //  id:4,
    // description:'aaaa'
    //}

    //puedo solamente pasarle un string
    createTask({ title, description });
  };

  return (
    <div>
      <form placeholder="Ingresa TU TAREA " onSubmit={handleSubmit}>
        <input
          placeholder="aqui"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Enviar</button>
      </form>
    </div>
  );
}
