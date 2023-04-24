import React, { useContext } from "react";
import { i18n } from "../translate/i18n";
import Header from "../components/Header/Header";
import '../styles/Projects.css'
import { ScrollContext } from "../contexts/scroll";

const Projects = ({ projects }) => {
    const {projectsRef} = useContext(ScrollContext)

    return (
        <section id="projects" ref={projectsRef}>
            <Header>{i18n.t('works.some_works')}</Header>
            <div id="projects-grid">
                {projects.length === 0 ?
                    <h1 style={{ color: '#0d6efd' }}>No projects found</h1>
                    :
                    projects.map((project, i) => {
                        return (
                            <div className="project-card" key={i}>
                                <figure>
                                    <img className="project-image" src={project.image} alt="project-img" />
                                    <figcaption>
                                        <h1 style={{ textAlign: 'center', padding: '0 2rem', fontSize: '2rem' }}>{project.name}</h1>
                                        <a href={project.link || '#'} target="_blank" rel="noreferrer">{i18n.t('works.view_project')} {'>'}</a>
                                    </figcaption>
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects