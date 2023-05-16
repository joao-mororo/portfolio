import React, { useState } from 'react'
import Sound from 'react-sound'
import LofiChill from '../../media/LofiChill.mp3'
import { SiSoundcloud } from 'react-icons/si'
import styles from './Sound.module.css'

const SoundComponent = () => {
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <div className={styles.sound}>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? (
                    <><span className={styles.red}><SiSoundcloud /></span> Sound <span className={styles.red}>OFF</span></>
                ) : (
                    <><span className={styles.green}><SiSoundcloud /></span> Sound <span className={styles.green}>ON</span></>
                )}
            </button>

            <Sound
                url={LofiChill}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                playFromPosition={0 /* in milliseconds */}
                volume={30}
                loop={true}
            />
        </div>
    )
}

export default SoundComponent