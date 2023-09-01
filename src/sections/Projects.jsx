import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Screenshot from "../components/Screenshot";
import shuffle from "../functions/shuffle";
import projects from "../data/projects";
import { BiRefresh } from "react-icons/bi";
import { i18n } from "../translate/i18n";
import { MediaQueryContext } from "../contexts/mediaQuery";
import "../styles/Projects.css";

const Projects = () => {
    const { isDesktopOrLaptop } = useContext(MediaQueryContext);
    const [filteredProjects, setFilteredProjects] = useState([]);

    const shuffleProjects = () => {
        let sortedProjects = shuffle(projects);
        sortedProjects.length = isDesktopOrLaptop ? 6 : 3;
        setFilteredProjects(sortedProjects);
        console.log("Refresh projects");
    };
    useEffect(() => {
        shuffleProjects();
    }, [isDesktopOrLaptop, projects]);

    return (
        <Section
            id="projects"
            flex
            direction="column"
            width="total"
            alignItems="center"
        >
            <button className="btn_refresh" onClick={() => shuffleProjects()}>
                <BiRefresh />
            </button>
            <Header>{i18n.t("works.some_works")}</Header>
            <div className="projects-grid">
                {filteredProjects.length === 0 ? (
                    <h1 style={{ color: "#0d6efd" }}>No projects found</h1>
                ) : (
                    filteredProjects.map((project, i) => {
                        return (
                            <div className="project-card" key={i}>
                                <figure>
                                    <img
                                        className="project-image"
                                        src={project.image}
                                        alt="project-img"
                                    />
                                    {/* <Screenshot
                                        className="project-image"
                                        url={project.link}
                                    /> */}
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
        </Section>
    );
};

export default Projects;
