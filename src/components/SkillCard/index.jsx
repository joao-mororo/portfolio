import React from 'react'
import Tilt from 'react-parallax-tilt'
import { useMediaQuery } from 'react-responsive'
import styles from './SkillCard.module.css'

const SkillCard = ({ icon, text }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    return (
        <Tilt style={{
            width: isTabletOrMobile ? '45%' : '28.3333%',
            backgroundColor: 'var(--blue)',
            borderRadius: '10px',
            margin: isTabletOrMobile ? '2% 2.5%' : '2% 2.5%',
            padding: '10px',
            color: '#fff',
            height: '20%',
        }}>
                <i className={styles.icon}>{icon}</i>
                <p className={styles.body}>{text}</p>
        </Tilt>
    )
}

export default SkillCard