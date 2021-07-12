import React from 'react';

export default function Navbar(){
    return(
        <div>
        <div id="myside-nav" className="side-nav">
        
        <nav>
        <ul className="nav-list1">
            <p className="closebtn">&times</p>
            <li> Home</li>
            <li> Bio</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </nav>
        </div>
        <span className="open"> "&#9776"</span>
        </div>
    )
}