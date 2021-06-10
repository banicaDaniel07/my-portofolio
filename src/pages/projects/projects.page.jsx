import React from 'react';
import Card from '../../components/card/card.component';

import './projects.styles.scss';

class ProjectsPage extends React.Component{
    constructor(){
        super();
        this.state  = {
            projects: [
                {
                   "id":1,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   }
                },
                {
                   "id":2,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
                {
                   "id":3,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
                {
                   "id":4,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
                {
                   "id":5,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
                {
                   "id":6,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
                {
                   "id":7,
                   "name":"mulan-landing-page",
                   "responsive":false,
                   "website":"https://mulan-landing-page-d.netlify.app/",
                   "repository":"https://github.com/banicaDaniel07/mulan-landing-page",
                   "cover": "https://i.ibb.co/DGqW2jr/Mulan-landing-page.png",
                   "code":{
                      "HTML":true,
                      "CSS":true,
                      "JS":true,
                      "REACT":false,
                      "SASS":false
                   } 
                },
            ]
        };
    }
    render(){
        return (
            <div className='projects'>
                <h1 className="projects__title">My Projects</h1>
                <div className="projects__container">
                    <div className="projects__options">
                        <div className="option__button">HTML</div>
                        <div className="option__button">CSS</div>
                        <div className="option__button">JS</div>
                        <div className="option__button">SASS</div>
                        <div className="option__button">REACT</div>
                    </div>
                    <div className="projects__card">
                        {   
                            this.state.projects.map(project => (
                                <Card cover={project.cover} key={project.id}  name={project.cover}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage
