import logoGB from '../../images/logos/logoGB.png'
import logoBG from '../../images/logos/logoBG.png'
import logoGG from '../../images/logos/logoGG.png'
import logoBB from '../../images/logos/logoBB.png'
import logoWW from '../../images/logos/logoWW.png'
import logoWB from '../../images/logos/logoWB.png'
import logoBW from '../../images/logos/logoBW.png'

const Logo = ({ variant, className }) => {
    if (variant === "GB") {
        return <img className={className} src={logoGB} alt="" />
    }

    if (variant === "BG") {
        return <img className={className} src={logoBG} alt="" />
    }

    if (variant === "GG") {
        return <img className={className} src={logoGG} alt="" />
    }

    if (variant === "BB") {
        return <img className={className} src={logoBB} alt="" />
    }

    if (variant === "WW") {
        return <img className={className} src={logoWW} alt="" />
    }

    if (variant === "WB") {
        return <img className={className} src={logoWB} alt="" />
    }

    if (variant === "BW") {
        return <img className={className} src={logoBW} alt="" />
    }

    // default
    return <img className={className} src={logoBW} alt="" />
}

export default Logo