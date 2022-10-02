import React from "react";
import '../css/Timeline.css'

export default function Timedot(props) {
    let name = props.name
    let period = props.period
    return (
        <div className='divTimedot'>
            <button className="timedot"></button>
            <b className="eventName" style={{color: 'white'}}>{name}</b>
            <p className="eventPeriod" style={{color: 'white'}}>{period}</p>
        </div>
    )
}