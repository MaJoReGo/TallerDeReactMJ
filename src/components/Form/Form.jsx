import React from 'react'
import './Form.css'

export const Form = () => {
  return (
    <form>
      <label>Titulo de la tarea:</label><br/>
          <input type="text" id="title" name="title" required/><br/><br/>

          <label>Descripción de la tarea:</label><br/>
          <textarea id="description" name="description" required></textarea><br/><br/>

          <input className='button-add' type="submit" value="Guardar"/>
    </form>
  )
}