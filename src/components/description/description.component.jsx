import React from 'react';
import { motion } from 'framer-motion';

import './description.styles.scss';
import { descriptionAnimation } from '../../animation';

const Description = ({children, width}) => {
    return (
        <motion.h2
        variants={descriptionAnimation}
        initial='initial'
        animate='animate'
        className={`description ${width ? 'width' : ''}`}>
            {children}
        </motion.h2>
    )
}

export default Description
