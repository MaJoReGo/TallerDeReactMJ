import React from 'react'
import Logo from '../../../assets/images/g.png';
import './Header.css'


export const Header = () => {
  return (
    <header>
      <h1>Lista De Tareas</h1>
    <img src={Logo} alt='Logo React' />
    </header>
  )
}