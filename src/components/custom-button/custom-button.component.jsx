import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children}) => {
    return (
        <div className='custom__button'>
            {children}
        </div>
    )
}

export default CustomButton
