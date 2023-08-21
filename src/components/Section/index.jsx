import React from "react";

const Section = ({
    children,
    className,
    ref,
    margin,
    padding = "4rem 5rem",
    flexDirection = "column",
    justifyContent = "center",
    alignItems = "center",
}) => {
    const style = {
        margin,
        padding,
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        width: "100%",
        height: "100vh",
    };

    return (
        <section style={style} className={className} ref={ref}>
            {children}
        </section>
    );
};

export default Section;
