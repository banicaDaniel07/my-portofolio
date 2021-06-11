import React from 'react';

import './card.styles.scss';

const Card = (props) => {
    const {cover, name, website, repository, responsive} = props.project;
    return (
        <div className="card">
            <img src={cover} alt={name} />
            <div className="card__overlay">
                <div className="card__buttons">
                    <a href={website} target="_blank" rel="noreferrer">
                        <div className="card__content">
                        <i className="fas fa-globe-europe"></i>
                        </div>
                    </a>
                    <a href={repository} target="_blank" rel="noreferrer">
                        <div className="card__content">
                        <i className="fab fa-github"></i>
                        </div>
                    </a>
                </div>
                <div className="card__info">
                    <h1 className="card__name">{name}</h1>
                    <p className={`card__responsive ${responsive ? "card__green" : "card__red"}`}>{responsive ? "Responsive Website" : "Non-Responsive Webstite"}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
