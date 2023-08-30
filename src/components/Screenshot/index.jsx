import React, { useEffect, useState } from "react";
import alt from "./alt.png";

const Screenshot = ({ url, className }) => {
    const [screenshotUrl, setScreenshotUrl] = useState();

    useEffect(() => {
        fetch(
            `https://api.apiflash.com/v1/urltoimage?access_key=4d4ec4da842a451a9c275d0fd7742724&url=${url}&format=webp`
        )
            .then((res) => setScreenshotUrl(res.url))
            .catch((err) => console.error("Error getting screenshot", err));
    }, []);

    return (
        <img
            className={className}
            src={screenshotUrl || alt}
            alt="screenshot"
        />
    );
};

export default Screenshot;
