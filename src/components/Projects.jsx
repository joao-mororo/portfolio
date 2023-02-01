import React from "react";
import { i18n } from "../translate/i18n";
import '../css/Projects.css'

export default function Projects({ projects }) {

    return (
        <section id="projects">
            <h1 className="header">{i18n.t('works.some_works')}</h1>
            <div id="projects-grid">
                {projects.length === 0 ?
                    <h1 style={{ color: '#0d6efd' }}>No projects found</h1>
                    :
                    projects.map((project) => {
                        return (
                            <div className="project-card" key={project.id}>
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