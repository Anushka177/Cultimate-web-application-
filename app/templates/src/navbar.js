import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

export default function Navibar(){
    return(
    
        <nav className="navbar navbar-expand bg-success">
            <div className='col-4'>
            <h3 className='navbar-brand light'>Logo</h3>
            </div>
            
            <div className='col-2'>
            <h4 className='navbar-brand light'><NavLink to="how-it-works">How it works</NavLink></h4>
            </div>

            <div className='col-2'> 
            <h4 className='navbar-brand light'><NavLink to="/">Home</NavLink></h4>
            </div>

            <div className='col-2'>
            <h4 className='navbar-brand light'><NavLink to="aboutus">About-Us</NavLink></h4>
            </div>

            <div  className='col-2'>
            <h3 className='navbar-brand '></h3>
            </div>
    </nav>        
    )
}