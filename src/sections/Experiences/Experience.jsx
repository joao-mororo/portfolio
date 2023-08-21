import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import styles from "./Experiences.module.css";

const Experience = ({ summary, content }) => {
    const { scheme } = useContext(ThemeContext);

    return (
        <details className={styles.experience}>
            <summary>{summary}</summary>
            <p style={{ color: scheme.color }}>{content}</p>
        </details>
    );
};

export default Experience;
