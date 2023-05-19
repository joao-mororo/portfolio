import React, { useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { useMediaQuery } from "react-responsive";
import styles from './TextSpan.module.css'

const TextSpan = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const controls = useAnimationControls()
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const rubberBand = () => {
        controls.start({
            transform: [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)",
            ],
            // transition: {
            //     times: [0, .4, .7, .8, .9]
            // }
        })
        setIsPlaying(true)
    }

    return (
        <motion.span
            className={`${styles.letter} jack-effect`}
            animate={controls}
            onMouseOver={() => {
                if (!isPlaying && !isTabletOrMobile) {
                    rubberBand()
                }
            }}
            onAnimationComplete={() => setIsPlaying(false)}
        >
            {children}
        </motion.span>
    )
}

export default TextSpan