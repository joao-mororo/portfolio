import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        console.log(`${theme} theme set`);
    }, [theme])

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            return
        }

        setTheme('dark')
    }

    const lightScheme = {
        bgColor: '#fff',
        bgColorSecondary: '#1d1d1d',
        color: '#000'
    }

    const darkScheme = {
        bgColor: '#1d1d1d',
        bgColorSecondary: '#000',
        color: '#fff'
    }

    const scheme = theme === 'dark'
        ? {...darkScheme}
        : {...lightScheme}

    return (
        <ThemeContext.Provider
            value={{theme, toggleTheme, scheme}}
        >
            {children}
        </ThemeContext.Provider>
    )
}