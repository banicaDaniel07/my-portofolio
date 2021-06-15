import React, { useState, useEffect } from 'react';
import Card from '../../components/card/card.component';
import DATA_JSON from '../../data';
import Title from '../../components/title/title.component';
import OptionButton from '../../components/option-button/option-button.component';

import ScrollTop from '../../components/scroll-top/scroll-top.component';
 
import './projects.styles.scss';
import { leftVariants, optionLeftButtonAnimation, optionLeft1ButtonAnimation, optionRightButtonAnimation, optionRight1ButtonAnimation, rightVariants, optionMiddleButtonAnimation, titleUpAnimation } from '../../animation';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
        const [projects] = useState(DATA_JSON);
        const [filtred, setFiltred] = useState(projects);
        const [html] = useState(true);
        const [css, setCss] = useState(false);
        const [js, setJs] = useState(false);
        const [sass, setSass] = useState(false);
        const [react, setReact] = useState(false);

        // o metoda care ia proiectele si verifica ce e on si filtreaza


        // CODE IS WOKING BUT YELLOW WORNING APEARS



        // const filterProjects =  () => {
        //     let newFilterArr = projects;
        //     if(html === true){
        //         newFilterArr = newFilterArr.filter(elem => elem.code.HTML === true);
        //     }
        //     if(css === true){
        //         newFilterArr = newFilterArr.filter(elem => elem.code.CSS === true);
        //     }
        //     if(js === true){
        //         newFilterArr = newFilterArr.filter(elem => elem.code.JS === true);
        //     }
        //     if(sass === true){
        //         newFilterArr = newFilterArr.filter(elem => elem.code.SASS === true);
        //     }
        //     if(react === true){
        //         newFilterArr = newFilterArr.filter(elem => elem.code.REACT === true);
        //     }
        //     setFiltred(newFilterArr);
        // }

        // useEffect( () => {filterProjects()},[html, css, js, sass, react] )

        // const renderHtml =  () => {
        //      setHtml(!html);
        // }    
        const renderCss =  () => {
            setCss(!css);
        }    
        const renderJs = () => {
            setJs(!js);
        }    
        const renderSass = () => {
            setSass(!sass);
        }    
        const renderReact = () => {
            setReact(!react);
        }    

        //  So i moved the function in use effect and no more yellow working
        
        useEffect(()=>{
            let newFilterArr = projects;
            // if(html === true){
            //     newFilterArr = newFilterArr.filter(elem => elem.code.HTML === true);
            // }
            if(css === true){
                newFilterArr = newFilterArr.filter(elem => elem.code.CSS === true);
            }
            if(js === true){
                newFilterArr = newFilterArr.filter(elem => elem.code.JS === true);
            }
            if(sass === true){
                newFilterArr = newFilterArr.filter(elem => elem.code.SASS === true);
            }
            if(react === true){
                newFilterArr = newFilterArr.filter(elem => elem.code.REACT === true);
            }
            setFiltred(newFilterArr)},[html, css, js, sass, react, projects])


        return (
            <motion.div className='projects'>
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
                <Title variant={titleUpAnimation}>My Projects</Title>
                <div className="projects__container">
                    <div className="projects__options">
                        <OptionButton variant={optionLeft1ButtonAnimation} language={html} forHide>HTML</OptionButton>
                        <OptionButton variant={optionLeftButtonAnimation} handler={renderCss} language={css}>CSS</OptionButton>
                        <OptionButton variant={optionMiddleButtonAnimation} handler={renderJs} language={js}>JS</OptionButton>
                        <OptionButton variant={optionRightButtonAnimation} handler={renderReact} language={react}>REACT</OptionButton>
                        <OptionButton variant={optionRight1ButtonAnimation} handler={renderSass} language={sass}>SASS</OptionButton>
                    </div>
                    <motion.div className="projects__cards">
                        {
                            filtred.map(project => {
                                return (
                                    <Card  key={project.id} project={project}/>
                                    )
                                })
                            }
                    </motion.div>
                </div>
                        <ScrollTop/>
            </motion.div>
        )
    }


export default ProjectsPage
