import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ navClickHandler }) => {

    return (
        <div className='navbarContainer'>
            <h1><Link to='/' className='logo'>Coder's Spot</Link></h1>
            <div className='menuItemsContainer'>
                <i className="fas fa-bars bars" onClick={navClickHandler}></i>
                <ul className='menuItems'>
                    <li className="menuItem">Home</li>
                    <li className="menuItem">Topics</li>
                    <li className="menuItem">Posts</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
