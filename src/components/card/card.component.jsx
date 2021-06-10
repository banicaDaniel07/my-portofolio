import React from 'react';

import './card.styles.scss';

const Card = ({cover, name}) => {
    return (
        <div className="card">
            <img src={cover} alt={name} />
        </div>
    )
}

export default Card;
