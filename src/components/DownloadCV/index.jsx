import React, { useState } from 'react'
import { HiDownload, HiCheck } from 'react-icons/hi'
import style from './style.module.css'
import { i18n } from '../../translate/i18n'

const DownloadCV = () => {
    const [downloaded, setDownloaded] = useState(false)

    const downloadFile = () => {
        setDownloaded(prev => true)
        setTimeout(() => setDownloaded(prev => false), 3000)
    }

    return (
        <>
            {downloaded ? (
                <button className={style.downloaded}>{i18n.t('about.downloadedCV')} <HiCheck /></button>
            ) : (
                <a className={style.download} href='./curriculo.pdf' download={"João Mororó - CV"} onClick={() => downloadFile()}>{i18n.t('about.downloadCV')} <HiDownload /></a>
            )}
        </>
    )
}

export default DownloadCV