import React, { useState } from "react";
import style from './Copyright.module.css'

const Copyright = ({children}) => {
    const [year] = useState(() => new Date().getFullYear())

    return (
        <div className={style.copyright}>
            <p>{children} &#169; Copyright {year}</p>
        </div>
    )
}

export default Copyright