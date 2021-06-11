import React, { Component } from 'react';
import Card from '../../components/card/card.component';
import DATA_JSON from '../../data';

import './projects.styles.scss';

class ProjectsPage extends Component {
    constructor(){
        super();

        this.state  = {
            projects: DATA_JSON
        }
    }

    render(){
        const {projects} = this.state;
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
                            projects.map(project => {
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
}

export default ProjectsPage
