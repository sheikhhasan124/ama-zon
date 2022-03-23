import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="">home</a>
                <a href="">service</a>
                <a href="">about</a>
                <a href="">inventory</a>
            </div>
        </nav>
    );
};

export default Header;