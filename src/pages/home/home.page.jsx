import React from 'react';

import ScrollTop from '../../components/scroll-top/scroll-top.component';

import './home.styles.scss';

const HomePage = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <h1 className="home__title">Banica Daniel</h1>
                <h3 className="home__subtitle">Front End Developer</h3>
            </div>
        <ScrollTop/>
        </div>
    )
}

export default HomePage
