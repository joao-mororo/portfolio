import React from 'react'
import './style.css'

const SkillCard = ({ icon, text }) => {
    return (
        <div className='skill-card'>
                <i className='skill-icon'>{icon}</i>
                <p className='skill-body'>{text}</p>
        </div>
    )
}

export default SkillCard