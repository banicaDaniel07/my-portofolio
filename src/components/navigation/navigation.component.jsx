import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <div className='nav '>
            <img src={logo} alt="logo" className="nav__logo"/>
            <div className="nav__list">
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/skills">
                    Skills
                </Link>
                <Link to="/projects">
                    Projects
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
            </div>
        </div>
    )
}

export default Navigation
