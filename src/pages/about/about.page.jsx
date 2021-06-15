import React from 'react';
import gym from '../../assets/gym.jpg';
import cook from '../../assets/cook.jpg';
import drive from '../../assets/drive.jpg';

import AboutCard from '../../components/about-card/about-card.component';
import Title from '../../components/title/title.component';
import Description from '../../components/description/description.component';
import ScrollTop from '../../components/scroll-top/scroll-top.component';
import { motion } from 'framer-motion';

import './about.styles.scss';
import { 
    aboutDownCardAnimation,
    aboutLeftCardAnimation,
    aboutRightCardAnimation, 
    leftVariants, 
    rightVariants, 
    titleDownAnimation, 
    titleUpAnimation 
} from '../../animation';

const AboutPage = () => {
    return (
        <motion.div className='about'>
            <motion.div
            variants={leftVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__left"></motion.div>
            <motion.div
            variants={rightVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className="cover__right"></motion.div>
            <Title variant={titleDownAnimation}>About me</Title>
            <Description width >
                I am an junior front end developer, 24 years old, who lives in Romania, passionate about the work I do and I’am always dedicated. Started in college with some back end programing languages, like C++, Java and PHP, but fell in love with front end. I like to learn new thinks and with JavaScript or Front end, learning never stops, because thinks change very fast. I am always interested in new technologies and libraries that can be used to improve the current state of the application that's why i choosed React. 
            </Description>
            <Title variant={titleUpAnimation}>My Passions</Title>
            <div className="about__cards">

                <AboutCard 
                    variant={aboutLeftCardAnimation} 
                    src={cook} 
                    title={'Cooking'} 
                    quote={'"A balanced diet is a cookie in each hand." '}
                />
                <AboutCard 
                    variant={aboutDownCardAnimation} 
                    src={drive} 
                    title={'Drive and Music'} 
                    quote={'"Best therapy sometimes is a drive and music." '}
                />
                <AboutCard 
                    variant={aboutRightCardAnimation} 
                    src={gym} 
                    title={'Gym'} 
                    quote={'"All progress takes place outside the comfort zone." '}
                />

                
            </div>
            <ScrollTop/>
        </motion.div>
    )
}

export default AboutPage
