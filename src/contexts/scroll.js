import { createContext, useRef } from "react";

export const ScrollContext = createContext()

export default function ScrollProvider({children}) {
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)
    const experienceRef = useRef(null)
    const sayhelloRef = useRef(null)

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }
    
    return (
        <ScrollContext.Provider
            value={{scrollToSection, aboutRef, projectsRef, experienceRef, sayhelloRef}}
        >
            {children}
        </ScrollContext.Provider>
    )
}