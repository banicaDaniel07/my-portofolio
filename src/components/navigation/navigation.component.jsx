import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Menu from '../menu/menu.component';

import './navigation.styles.scss';

const Navigation = () => {
    const [isShowing, setIsShowing] = useState(false);
    return (
        <div className='nav '>
            <div className="nav__container">
                
            <img src={logo} alt="logo" className="nav__logo"/>
            <div className={`nav__list ${isShowing ? 'show__nav' : ''}`}>
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
            <Menu isShowing={isShowing} setIsShowing={setIsShowing}/>
            </div>
        </div>
    )
}

export default Navigation
