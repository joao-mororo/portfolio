import React, { useState } from "react";
import style from './Copyright.module.css'

const Copyright = ({children, color}) => {
    const [year] = useState(() => new Date().getFullYear())

    return (
        <p className={style.copyright} style={{color: color || ''}}>{children} &#169; Copyright {year}</p>
    )
}

export default Copyright