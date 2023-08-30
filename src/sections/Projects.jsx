import React, { useContext } from "react";
import Header from "../components/Header";
import projects from "../data/projects";
import { i18n } from "../translate/i18n";
import { ScrollContext } from "../contexts/scroll";
import "../styles/Projects.css";

const Projects = () => {
    const { projectsRef } = useContext(ScrollContext);
    projects.length = window.innerWidth < 600 ? 3 : 6;

    return (
        <section id="projects" className="projects section" ref={projectsRef}>
            <Header>{i18n.t("works.some_works")}</Header>
            <div className="projects-grid">
                {projects.length === 0 ? (
                    <h1 style={{ color: "#0d6efd" }}>No projects found</h1>
                ) : (
                    projects.map((project, i) => {
                        return (
                            <div className="project-card" key={i}>
                                <figure>
                                    <img
                                        className="project-image"
                                        src={project.image}
                                        alt="project-img"
                                    />
                                    <figcaption>
                                        <h1
                                            style={{
                                                textAlign: "center",
                                                padding: "0 2rem",
                                                fontSize: "2rem",
                                            }}
                                        >
                                            {project.name}
                                        </h1>
                                        <a
                                            href={project.link || "#"}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {i18n.t("works.view_project")} {">"}
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        );
                    })
                )}
            </div>
        </section>
    );
};

export default Projects;
