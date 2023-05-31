import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState()

    // Detect system theme
    useLayoutEffect(() => {
        const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        setTheme(isDarkTheme ? 'dark' : 'light')
    }, [])

    // Show theme changing
    useEffect(() => {
        if (theme) console.log(`${theme} theme set`);
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
        color: '#1d1d1d'
    }

    const darkScheme = {
        bgColor: '#1d1d1d',
        bgColorSecondary: '#000',
        color: '#fff'
    }

    const scheme = theme === 'dark'
        ? { ...darkScheme }
        : { ...lightScheme }

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, scheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}