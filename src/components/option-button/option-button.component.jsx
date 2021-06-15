import React from 'react';
import { motion } from 'framer-motion';

import './option-button.styles.scss';
import { borderButtonAnimation } from '../../animation';

const OptionButton = ({language, children, handler, forHide, variant}) => {
    return (
        <motion.div
        variants={borderButtonAnimation}
        initial='initial'
        animate='animate'
        onClick={handler}  className={`option__button ${language ? "button__active" : ""} ${forHide ? "option__html" : ""}`}>
            <motion.h1 
                variants={variant}
                initial='initial'
                animate='animate'>
            {children}
            </motion.h1>
        </motion.div>
    )
}

export default OptionButton
