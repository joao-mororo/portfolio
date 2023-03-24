import React, { useState } from "react";
import './Copyright.style.css'

const Copyright = ({children}) => {
    const [year] = useState(() => new Date().getFullYear())

    return (
        <div id="copyright">
            <p>{children} &#169; Copyright {year}</p>
        </div>
    )
}

export default Copyright