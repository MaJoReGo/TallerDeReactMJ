import React, { useState } from 'react';
import './Form.css';

export const Form = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Crear la tarea utilizando los datos del formulario
    const newTask = {
      title: title,
      description: description
    };

    // Llamar a la función proporcionada por props para agregar la nueva tarea
    onTaskAdded(newTask);

    // Limpiar los campos del formulario
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>Titulo de la tarea:</label><br/>
      <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required/><br/><br/>

      <label>Descripción de la tarea:</label><br/>
      <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea><br/><br/>

      <input className='button-add' type="submit" value="Guardar"/>
    </form>
  );
};

