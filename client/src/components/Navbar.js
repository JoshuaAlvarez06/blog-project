import React from 'react';
import './Navbar.css';

const Navbar = ({ navClickHandler }) => {

    return (
        <div className='navbarContainer'>
            <h1 className='logo'>Coders' Spot</h1>
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
