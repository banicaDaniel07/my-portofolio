import React from 'react';

import './about-card.styles.scss';

const AboutCard = ({src, title, quote}) => {
    return (
        <div className="about__card" >
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
