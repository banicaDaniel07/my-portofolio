import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, type}) => {
    return (
        <button type={type} className='custom__button'>
            {children}
        </button>
    )
}

export default CustomButton
