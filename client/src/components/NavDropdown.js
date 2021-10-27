import React from 'react';
import './NavDropdown.css'

const NavDropdown = ({ navClickHandler }) => {
    return (
        <div className="dropdownContainer" onClick={navClickHandler}>
            <i className="fas fa-times icon" onClick={navClickHandler}></i>
            <ul className="dropdownItems">
                <li className="dropdownItem">Home</li>
                <li className="dropdownItem">Topics</li>
                <li className="dropdownItem">Posts</li>
            </ul>
        </div>
    )
}

export default NavDropdown
