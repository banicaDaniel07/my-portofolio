import React from 'react';

import './description.styles.scss';

const Description = ({children, width}) => {
    return (
        <h2 className={`description ${width ? 'width' : ''}`}>
            {children}
        </h2>
    )
}

export default Description
