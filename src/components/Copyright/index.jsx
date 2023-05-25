import React, { useState } from "react";
import styles from './Copyright.module.css'

const Copyright = ({children, color}) => {
    const [year] = useState(() => new Date().getFullYear())

    return (
        <p className={styles.copyright} style={{color: color || ''}}>{children} &#169; Copyright {year}</p>
    )
}

export default Copyright