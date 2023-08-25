import { FaHtml5, FaCss3Alt, FaWordpress } from "react-icons/fa";
import { SiElementor } from "react-icons/si";

export const WordpressElementor = () => {
    const WordpressStyle = {
        position: "relative",
        top: "-1.5rem",
        marginRight: ".5rem",
    };

    const ElementorStyle = {};

    return (
        <>
            <FaWordpress style={WordpressStyle} />
            <SiElementor style={ElementorStyle} />
        </>
    );
};

export const HtmlCssLogo = () => {
    const htmlStyle = {
        transform: "rotate(-20deg)",
        padding: "0",
        margin: "0",
    };

    const cssStyle = {
        transform: "rotate(20deg)",
        padding: "0",
        margin: "0",
    };

    return (
        <>
            <FaHtml5 style={htmlStyle} />
            <FaCss3Alt style={cssStyle} />
        </>
    );
};
