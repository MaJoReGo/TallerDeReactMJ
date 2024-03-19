import React, { useState } from 'react';
import { Form } from '../../Form/Form';
import { Filter } from '../../Filter/Filter';
import './Main.css';

export const Main = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    // Agregar la nueva tarea al estado de tareas
    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <Form onTaskAdded={handleTaskAdded} />
      <div className='home-container'>
        <h1>Tienes {tasks.length} tareas</h1>
        <br/>
        <hr></hr> 
      </div>
      <Filter />
      <div className='container'>
        {tasks.map((task, index) => (
          <div key={index}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div> 
    </main>
  );
};
