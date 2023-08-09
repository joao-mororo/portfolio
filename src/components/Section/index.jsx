import React from 'react'

const Section = ({ children, className, margin, padding='5rem', flexDirection='column', justifyContent='center', alignItems='center' }) => {
    const style = {
        margin,
        padding,
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        width: '100%',
        height: '100vh'
    }

    return (
        <section style={style} className={className}>
            {children}
        </section>
    )
}

export default Section