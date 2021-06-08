import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';
import logo from '../../assets/logo-white.png';

const Header = () => (
    <header className='header'>
        <Link className='logo-box' to="/">
            <img src={logo} alt='logo' className='logo'/>
        </Link>
    </header>
);

export default Header;