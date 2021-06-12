import React, { useState, useEffect } from 'react';
import Card from '../../components/card/card.component';
import DATA_JSON from '../../data';

import './projects.styles.scss';

const ProjectsPage = () => {
        const [projects] = useState(DATA_JSON);
        const [filtred, setFiltred] = useState(projects);
        const [html, setHtml] = useState(false);
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

        const renderHtml =  () => {
             setHtml(!html);
        }    
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
            if(html === true){
                newFilterArr = newFilterArr.filter(elem => elem.code.HTML === true);
            }
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
            <div className='projects'>
                <h1 className="projects__title">My Projects</h1>
                <div className="projects__container">
                    <div className="projects__options">
                        <div onClick={renderHtml} className={`option__button ${html ? "button__active" : ""}`}>HTML</div>
                        <div onClick={renderCss} className={`option__button ${css ? "button__active" : ""}`}>CSS</div>
                        <div onClick={renderJs} className={`option__button ${js ? "button__active" : ""}`}>JS</div>
                        <div onClick={renderSass} className={`option__button ${sass ? "button__active" : ""}`}>SASS</div>
                        <div onClick={renderReact} className={`option__button ${react ? "button__active" : ""}`}>REACT</div>
                    </div>
                    <div className="projects__card">
                        {
                            filtred.map(project => {
                                return (
                                    <Card  key={project.id} project={project}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }


export default ProjectsPage
