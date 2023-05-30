import React from 'react'
import ScrollProvider from '../../contexts/scroll'
import ThemeProvider from '../../contexts/theme'

const ContextsProvider = ({ children }) => {
    return (
        <ScrollProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ScrollProvider>
    )
}

export default ContextsProvider