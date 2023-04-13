import { createContext, useRef } from "react";

export const ScrollContext = createContext()

export default function ScrollProvider({children}) {
    const about = useRef(null)
    const experience = useRef(null)
    const sayhello = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    
    return (
        <ScrollContext.Provider
            value={{scrollToSection, about, experience, sayhello}}
        >
            {children}
        </ScrollContext.Provider>
    )
}