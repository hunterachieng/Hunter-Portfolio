import React from 'react';
//components
import Navbar from './Navbar';

export default function Home(){
    return(
        <div className="home">
         <Navbar/>
        <div className="intro">
        <p> Hi, I am Synthia Hunter Achieng</p>
       <hr/>
        <p className="role">Software Engineer</p>
        </div>
        </div>
    )
}