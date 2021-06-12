import React from 'react';

import './menu.styles.scss';

const Menu = ({isShowing, setIsShowing}) => {
    function toggleClass(e) {
        e.preventDefault();
        const target = e.currentTarget;
        target.classList.toggle('on');
        setIsShowing(!isShowing);
        console.log(isShowing);
    }
    
    return (
        <a href="#Something" onClick={toggleClass} id="menu-btn" className="menu-btn"><span></span></a>
    )
}

export default Menu
