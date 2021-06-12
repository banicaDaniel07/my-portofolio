import React from 'react';

import './option-button.styles.scss';

const OptionButton = ({language, children, handler}) => {
    return (
        <div onClick={handler}  className={`option__button ${language ? "button__active" : ""}`}>
            {children}
        </div>
    )
}

export default OptionButton
