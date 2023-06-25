import React, { Component } from 'react'
import logo from '../../logo.png';
import styles from './Header.css'
export default function Header() {


    return (
        <header>
        <div className="header-section">
            <div className='logowrapper'>
          <img src={logo} className="logo" alt="Logo" />
            </div>
          <h1>Wellness Eats</h1>
        </div>
        <p className='Subtitle'>Discover healthy restaurant options to support your well-being.</p>
      </header>
    )
}