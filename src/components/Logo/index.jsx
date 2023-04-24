import logo0 from '../../images/logos/logo0.png'
import logo1 from '../../images/logos/logo1.png'
import logo2 from '../../images/logos/logo2.png'
import logo3 from '../../images/logos/logo3.png'

const Logo = ({variant}) => {
    if (!variant || variant === "GB") {
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
}

export default Logo