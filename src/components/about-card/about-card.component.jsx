import React from 'react';
import { motion } from 'framer-motion';

import './about-card.styles.scss';
import { optionRightButtonAnimation } from '../../animation';

const AboutCard = ({src, title, quote, variant}) => {
    const mouseOverHandler = (e) => {
        const hovered = e.target.closest('.about__card');
        hovered.classList.add('about__card__show');
    }
    const mouseOutHandler = (e) => {
        const hovered = e.target.closest('.about__card');
        hovered.classList.remove('about__card__show');
    }
    return (
        <motion.div
        variants={variant}
        initial='initial'
        animate='animate'
        className="about__card"  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
                    <img src={src} alt={title}/>
                    <motion.h1 
                    variants={optionRightButtonAnimation}
                    initial='intial'
                    animate='animate'
                    className="about__title">{title}</motion.h1>
                    <p className="about__quote">
                        {quote}
                    </p>
                    <div className="about__overlay"></div>
                </motion.div>
    )
}

export default AboutCard
