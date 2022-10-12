import React from "react";

export default function TaskCard({task}) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
}
