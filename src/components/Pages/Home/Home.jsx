import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import Logo from '../../../assets/images/React.png';
import { Form } from '../../Layouts/Header/Form/Form';
import './Home.css'

export const Home = () => {
  return (
    <>
      <div className='Header-content'>
        <Header />
        <h1>Lista De Tareas</h1>
        <img src={Logo} alt='Logo React' />
      </div>
      <div className='Form-content'>
        <form>
          <label>Titulo de la tarea:</label><br/>
          <input type="text" id="title" name="title" required/><br/><br/>

          <label>Descripción de la tarea:</label><br/>
          <textarea id="description" name="description" required></textarea><br/><br/>

          <input className='button-add' type="submit" value="Guardar"/>
        </form>
      </div>
      <div className='home-container'>
       <h1>Tienes 2 tareas completas y 2 tareas pendientes</h1>
       <p>___________________________________________________________________________________________________________________________________________________</p>
       
      </div>
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
       <footer>María José Restrepo Gómez</footer>
    </>
  );
};
