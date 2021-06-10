import React from 'react';
import gym from '../../assets/gym.jpg';
import cook from '../../assets/cook.jpg';
import drive from '../../assets/drive.jpg';

import './about.styles.scss';


const AboutPage = () => {
    return (
        <div className='about'>
            <h1 className="about__me">About me</h1>
            <p className="about__details">I am an junior front end developer, 24 years old, who lives in Romania, passionate about the work I do and I’am always dedicated. Started in college with some back end programing languages, like C++, Java and PHP, but fell in love with front end. I like to learn new thinks and with JavaScript or Front end, learning never stops, because thinks change very fast. I am always interested in new technologies and libraries that can be used to improve the current state of the application that's why i choosed React. </p>
            <h1 className="about__passions">My Passions</h1>
            <div className="about__cards">

                <div className="about__card" >
                    <img src={cook} alt='cook'/>
                    <h1 className="about__title">Cooking</h1>
                    <p className="about__quote">
                        "A balanced diet is a cookie in each hand." 
                    </p>
                    <div className="about__overlay"></div>
                </div>
                <div className="about__card">
                    <img src={drive} alt='drive'/>
                    <h1 className="about__title">Drive and Music</h1>
                    <p className="about__quote">
                        "Best therapy sometimes is a drive and music." 
                    </p>
                    <div className="about__overlay"></div>
                </div>
                <div className="about__card">
                    <img src={gym} alt='gym'/>
                    <h1 className="about__title">Gym</h1>
                    <p className="about__quote">
                        "All progress takes place outside the comfort zone." 
                    </p>
                    <div className="about__overlay"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
