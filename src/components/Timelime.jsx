import React from "react";
import Timedot from "./Timedot";
import '../css/Timeline.css'

export default function Timeline(props) {
    let events = props.events
    return (
        <div className="timeline">
            <hr />
            <div className="events">
                {events.map((event) => {
                    return <Timedot name={event.name} period={event.period} />
                })}
            </div>

        </div>
    )
}