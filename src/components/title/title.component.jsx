import React from 'react';

import './title.styles.scss';
import { motion } from 'framer-motion';

const Title = ({children, variant}) => {
    return (
        <motion.div className='title'>
            <motion.h1
            variants={variant}
            initial='initial'
            animate='animate'
            className='title__content'>
                {children}
            </motion.h1>
        </motion.div>
    )
}

export default Title
