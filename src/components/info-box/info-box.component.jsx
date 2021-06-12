import React from 'react';

import './info-box.styles.scss';

const InfoBox = ({iconClass, name, details, border}) => {
    return (
        <div className={`info-box ${border ? 'border-right' : ''}`}>
            <i className={iconClass}></i>
            <span>{name}</span>
            <p>{details}</p>
        </div>
    )
}

export default InfoBox
