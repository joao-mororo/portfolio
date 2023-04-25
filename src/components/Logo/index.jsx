import logo0 from '../../images/logos/logo0.png'
import logo1 from '../../images/logos/logo1.png'
import logo2 from '../../images/logos/logo2.png'
import logo3 from '../../images/logos/logo3.png'
import logoWW from '../../images/logos/logoWW.png'
import logoWB from '../../images/logos/logoWB.png'
import logoBW from '../../images/logos/logoBW.png'

const Logo = ({variant}) => {
    if (variant === "GB") {
        return <img className='logo' src={logo1} alt="" />
    }

    if (variant === "BG") {
        return <img className='logo' src={logo0} alt="" />
    }

    if (variant === "GG") {
        return <img className='logo' src={logo2} alt="" />
    }
    
    if (variant === "BB") {
        return <img className='logo' src={logo3} alt="" />
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