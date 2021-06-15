import React from 'react';
import {motion} from 'framer-motion';

import ScrollTop from '../../components/scroll-top/scroll-top.component';
import { 
    titleVariants, 
    subtitleVariants, 
    leftVariants, 
    rightVariants 
} from '../../animation';

import './home.styles.scss';

const HomePage = () => {
    
    return (
        <motion.div className='home'>
            <motion.div
            variants={leftVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__left"></motion.div>
            <motion.div
            variants={rightVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__right"></motion.div>
            <div className="home__container">
                <motion.h1 
                    variants={titleVariants}
                    initial='initial'
                    animate='animate'     
                    exit='exit'
                    className="home__title">Banica Daniel</motion.h1>
                <motion.h3 
                    variants={subtitleVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className="home__subtitle">Front End Developer</motion.h3>
            </div>
        <ScrollTop/>
        </motion.div>
    )
}

export default HomePage
