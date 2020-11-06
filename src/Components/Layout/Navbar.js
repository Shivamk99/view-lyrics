import React from 'react';
import "./Navbar.css"
import Image from "./img/tune-.png"

const Navbar = () => {
    return (
        <nav className="navbar mb-5">
            <img src={Image} alt="tune"/>
            
            <span className="navbar-brand">View Lyrics</span>
       
        </nav>
    );
};

export default Navbar
