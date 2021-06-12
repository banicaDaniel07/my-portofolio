import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu.component';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <div className='nav '>
            <div className="nav__container">
                
            <img src={logo} alt="logo" className="nav__logo"/>
            <div className="nav__list">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
            <Menu/>
            </div>
        </div>
    )
}

export default Navigation
