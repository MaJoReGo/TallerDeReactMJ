import React from 'react'
import { Form } from '../../Form/Form';
import { Filter } from '../../Filter/Filter';
import './Main.css'

export const Main = () => {
  return (
    <main>
        <Form/>
       <div className='home-container'>
  
  <h1>Tienes 2 tareas completas y 2 tareas pendientes</h1>
  <br/>
  <hr></hr> 
 </div>

 <Filter/>

 <div className='container'>
  <p>Tarea 1</p>
  <br/>
  <br/>
  <p>Tarea 2</p>
  <br/>
  <br/>
  <p>Tarea 3</p>
  <br/>
  <br/>
  <p>Tarea 4</p>
  </div> 
    </main>
  )
}