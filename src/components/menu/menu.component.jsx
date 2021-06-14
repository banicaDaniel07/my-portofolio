import React from 'react';

import './menu.styles.scss';

const Menu = ({isShowing, setIsShowing}) => {
    function toggleClass(e) {
        e.preventDefault();
        setIsShowing(!isShowing);
    }
    
    return (
        <a href="#Something" onClick={toggleClass}  id="menu-btn" className={`menu-btn ${isShowing ? 'on' : ''}`}><span></span></a>
    )
}

export default Menu
