import React from 'react';
import { Header } from '../../Layouts/Header/Header';
import Logo from '../../../assets/images/React.png'

export const Home = () => {
  return (
    <div className='Header-content'>
    <Header/>
        <h1>Lista De Tareas</h1>
        <img src={Logo} alt='Logo React'></img>
    </div>
  );
};