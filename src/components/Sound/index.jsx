import React, { useState } from 'react'
import LofiChill from '../../media/LofiChill.mp3'
import { SiSoundcloud } from 'react-icons/si'
import styles from './Sound.module.css'

const SoundComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false)

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
            <button onClick={() => handleSound()}>
                {!isPlaying ? (
                    <><span className={styles.red}><SiSoundcloud /></span> Sound <span className={styles.red}>OFF</span></>
                ) : (
                    <><span className={styles.green}><SiSoundcloud /></span> Sound <span className={styles.green}>ON</span></>
                )}
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