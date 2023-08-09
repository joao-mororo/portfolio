import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import "./Experience.css";

const Experience = ({ summary, content }) => {
    const { scheme } = useContext(ThemeContext);

    return (
        <details>
            <summary>{summary}</summary>
            <p style={{ color: scheme.color }}>{content}</p>
        </details>
    );
};

export default Experience;
