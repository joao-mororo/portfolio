import React, { useContext, useState } from 'react'
import LofiChill from '../../media/LofiChill.mp3'
import { ThemeContext } from '../../contexts/theme'
import { SiApplemusic } from 'react-icons/si'
import { useMediaQuery } from 'react-responsive'
import styles from './Sound.module.css'

const SoundComponent = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' })
    const [isPlaying, setIsPlaying] = useState(false)
    const { scheme } = useContext(ThemeContext)

    const handleSound = () => {
        let audio = document.getElementsByClassName('myAudio')[0]

        if (isPlaying) {
            setIsPlaying(false)
            audio.pause()
            return
        }

        setIsPlaying(true)
        audio.volume = 0.2
        audio.play()
    }

    return (
        <div className={styles.sound}>
            <button style={{ color: scheme.color }} onClick={() => handleSound()}>
                <span className={isPlaying ? styles.green : styles.red}><SiApplemusic /></span>
                {isDesktopOrLaptop && (
                    <>
                        <span>Sound</span>
                        <span className={isPlaying ? styles.green : styles.red}>
                            {isPlaying ? 'ON' : 'OFF'}
                        </span>
                    </>
                )}
                {/* {!isPlaying ? (
                    <><span className={styles.red}><SiApplemusic /></span> Sound <span className={styles.red}>OFF</span></>
                ) : (
                    <><span className={styles.green}><SiApplemusic /></span> Sound <span className={styles.green}>ON</span></>
                )} */}
            </button>

            <audio
                className='myAudio'
                src={LofiChill}
                loop={true}
            />
        </div>
    )
}

export default SoundComponent