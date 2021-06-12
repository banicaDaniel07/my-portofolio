import React from 'react';

import './about-card.styles.scss';

const AboutCard = ({src, title, quote}) => {
    const mouseOverHandler = (e) => {
        const hovered = e.target.closest('.about__card');
        hovered.classList.add('about__card__show');
    }
    const mouseOutHandler = (e) => {
        const hovered = e.target.closest('.about__card');
        hovered.classList.remove('about__card__show');
    }
    return (
        <div className="about__card"  onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
                    <img src={src} alt={title}/>
                    <h1 className="about__title">{title}</h1>
                    <p className="about__quote">
                        {quote}
                    </p>
                    <div className="about__overlay"></div>
                </div>
    )
}

export default AboutCard
