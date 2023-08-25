import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const MediaQueryContext = createContext()

export default function MediaQueryProvider({ children }) {
    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 600px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 600px)" });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

    return (
        <MediaQueryContext.Provider
            value={{ isDesktopOrLaptop, isTabletOrMobile, isPortrait }}
        >
            {children}
        </MediaQueryContext.Provider>
    )
}