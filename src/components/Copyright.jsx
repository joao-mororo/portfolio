import React, { useState, useEffect } from "react";
import '../styles/Copyright.css'

export default function Copyright(props) {
    const [year, setYear] = useState()

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <div id="copyright">
            <p>{props.name} &#169; Copyright {year}</p>
            {/* <p>&#169; Copyright {year} {props.name}</p> */}
        </div>
    )
}