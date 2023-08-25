import React from "react";

/**
 * Return a page section
 * @param {string} id - ...an id lol
 * @param {string} width - boxed (default) | total
 * @param {string} height - auto (default) | screen
 * @param {boolean} flex - true | false (default)
 * @param {string} direction - row (default) | column | row-reverse | column-reverse
 * @param {string} background - background style config
 * @param {string} shadow - box-shadow config
 * @param {Object} style - style object
 * @returns {JSX.Element}
 */
const Section = ({
    children,
    background,
    direction = "row",
    flex = false,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    style = {},
    width = "boxed",
    height = "auto",
    shadow,
    id,
}) => {
    const sectionStyle = {
        width: "100%",
        height: height === "screen" ? "100vh" : "auto",
        padding: "4rem 0",
        background,
        display: "flex",
        justifyContent: "center",
        boxShadow: shadow,
    };

    const divStyle = {
        maxWidth: width === "boxed" ? "1140px" : "100%",
        display: flex && "flex",
        flexDirection: direction,
        justifyContent,
        alignItems,
    };

    return (
        <section id={id} style={sectionStyle}>
            <div style={{ ...divStyle, ...style }}>{children}</div>
        </section>
    );
};

export default Section;
