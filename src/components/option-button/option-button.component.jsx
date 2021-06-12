import React from 'react';

import './option-button.styles.scss';

const OptionButton = ({language, children, handler, forHide}) => {
    return (
        <div onClick={handler}  className={`option__button ${language ? "button__active" : ""} ${forHide ? "option__html" : ""}`}>
            {children}
        </div>
    )
}

export default OptionButton
