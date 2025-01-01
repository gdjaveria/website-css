"use client";

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Bean Scene</div>
            
            
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservation">Reservation</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="navbar-menu-icon" onClick={toggleMenu}>
                {isOpen ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

      {isOpen && (
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#home"  onClick={toggleMenu}>Home</a></li>
                <li><a href="#menu"  onClick={toggleMenu}>Menu</a></li>
                <li><a href="#reservation"  onClick={toggleMenu}>Reservation</a></li>
                <li><a href="#contact"  onClick={toggleMenu}>Contact</a></li>

        </ul>
        
      )}

        </nav>
    );
};

export default Navbar;
