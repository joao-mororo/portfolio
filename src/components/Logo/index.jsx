import logoGB from '../../images/logos/logoGB.png'
import logoBG from '../../images/logos/logoBG.png'
import logoGG from '../../images/logos/logoGG.png'
import logoBB from '../../images/logos/logoBB.png'
import logoWW from '../../images/logos/logoWW.png'
import logoWB from '../../images/logos/logoWB.png'
import logoBW from '../../images/logos/logoBW.png'

const Logo = ({variant}) => {
    if (variant === "GB") {
        return <img className='logo' src={logoGB} alt="" />
    }

    if (variant === "BG") {
        return <img className='logo' src={logoBG} alt="" />
    }

    if (variant === "GG") {
        return <img className='logo' src={logoGG} alt="" />
    }
    
    if (variant === "BB") {
        return <img className='logo' src={logoBB} alt="" />
    }

    if (variant === "WW") {
        return <img className='logo' src={logoWW} alt="" />
    }

    if (variant === "WB") {
        return <img className='logo' src={logoWB} alt="" />
    }

    if (variant === "BW") {
        return <img className='logo' src={logoBW} alt="" />
    }

    // default
    return <img className='logo' src={logoBW} alt="" />
}

export default Logo