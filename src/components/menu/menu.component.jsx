import React from 'react';

import './menu.styles.scss';

const Menu = () => {
    function toggleClass(e) {
        e.preventDefault();
        const target = e.currentTarget;
        target.classList.toggle('on');
    }
    
    return (
        <a href="#Something" onClick={toggleClass} id="menu-btn" className="menu-btn"><span></span></a>
    )
}

export default Menu
