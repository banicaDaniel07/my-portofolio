import React from 'react';

import './title.styles.scss';

const Title = ({children}) => {
    return (
        <h1 className='title'>
            {children}
        </h1>
    )
}

export default Title
