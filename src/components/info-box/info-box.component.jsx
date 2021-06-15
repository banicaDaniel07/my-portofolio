import React from 'react';
import { motion } from 'framer-motion';

import './info-box.styles.scss';
import { infoBoxAnimation } from '../../animation';

const InfoBox = ({iconClass, name, details, border}) => {
    return (
        <motion.div
        variants={infoBoxAnimation}
        initial='initial'
        animate='animate'
        className={`info-box ${border ? 'border-right' : ''}`}>
            <i className={iconClass}></i>
            <span>{name}</span>
            <p>{details}</p>
        </motion.div>
    )
}

export default InfoBox
