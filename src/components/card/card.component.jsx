import React from 'react';
import { motion } from 'framer-motion';

import './card.styles.scss';
import { cardAnimation } from '../../animation';

const Card = ({project}) => {
    const mouseOverHandler = (e) => {
        const hovered = e.target.closest('.card');
        hovered.classList.add('show__card');
    }
    const mouseOutHandler = (e) => {
        const hovered = e.target.closest('.card');
        hovered.classList.remove('show__card');
    }
    const {cover, name, website, repository, responsive, code} = project;
    return (
        <motion.div
        variants={cardAnimation}
        initial='initial'
        animate='animate'
        className="card" onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
            <img src={cover} alt={name} />
            <div className="card__overlay">
                <div className="card__buttons">
                    <a href={website} target="_blank" rel="noreferrer">
                        <div className="card__content card__first">
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
                <div className="card__codes">
                        <div className={`card__html card__code ${code.HTML ? '' : 'hide'}`}></div>
                        <div className={`card__css card__code ${code.CSS ? '' : 'hide'}`}></div>
                        <div className={`card__js card__code ${code.JS ? '' : 'hide'}`}></div>
                        <div className={`card__react card__code ${code.REACT ? '' : 'hide'}`}></div>
                        <div className={`card__sass card__code ${code.SASS ? '' : 'hide'}`}></div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card;
