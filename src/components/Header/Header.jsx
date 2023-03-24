import React from 'react'
import './Header.style.css'

const Header = ({children}) => {
    return (
        <header className='header'>
            <span className='code'>{'<'}</span>
            <span className='text'>{children}</span>
            <span className='code'>{'/>'}</span>
        </header>
    )
}

export default Header