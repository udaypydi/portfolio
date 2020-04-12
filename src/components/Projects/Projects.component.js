import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './Projects.scss';

export default function Projects(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        if (!props.projects) {
            fetch('https://api.github.com/users/udaypydi/repos?sort=updated&&type=owner')
            .then(res => res.json())
            .then(json => {
              setProjects(json);
            })
        } else {
            setProjects(props.projects);
        }
      }, []);

    return (
        <div className="Projects--Container">
            {
                props.title ? (
                    <p className="Projects--Title" style={{ textAlign: 'center' }}>{props.title} ({projects.length})</p>
                ) : (
                    <p className="Projects--Title">Projects ({projects.length})</p>
                )   
            }
            <div className="Projects">
            {
                projects.map(project => (
                    <div id="project.id" className="Projects--Card" onClick={() => window.open(project.html_url, '_blank')}>
                        <p className="Project--Name">{project.name}</p>
                        <p className="Project--Description">{project.description}</p>
                        {
                            project.fork ? (
                                <div className="Project-Stats-Value">
                                    <img src={require('../../assets/icons/fork.svg')} />
                                    <label style={{ marginLeft: 10 }}>Forked from {project.name}</label>
                                </div>
                            ) : (
                                <div className="Project-Stats">
                                    <div className="Project-Stats-Value">
                                        <img src={require('../../assets/icons/star.svg')} />
                                        <label>{project.stargazers_count}</label>
                                    </div>
                                    <div className="Project-Stats-Value">
                                        <img src={require('../../assets/icons/fork.svg')} />
                                        <label>{project.forks_count}</label>
                                    </div>
                                    <div className="Project-Stats-Value">
                                        <img src={require('../../assets/icons/time.svg')} />
                                        <label>{moment(project.updated_at).format('MMMM Do YYYY')}</label>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </div>
        </div>
      
    );
}
