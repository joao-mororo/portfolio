import React from "react";
import ScrollProvider from "../../contexts/scroll";
import ThemeProvider from "../../contexts/theme";
import MediaQueryProvider from "../../contexts/mediaQuery";

const ContextsProvider = ({ children }) => {
    return (
        <ScrollProvider>
            <ThemeProvider>
                <MediaQueryProvider>{children}</MediaQueryProvider>
            </ThemeProvider>
        </ScrollProvider>
    );
};

export default ContextsProvider;
