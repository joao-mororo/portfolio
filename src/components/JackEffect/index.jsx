import React from 'react'
import TextSpan from './TextSpan'

const JackEffect = ({ children }) => {
    const sentence = (children.toString()).split('')

    return (
        <p>
            {sentence.map((letter, i) => (
                <TextSpan key={i}>
                    {letter === ' ' ? '\u00A0' : letter}
                </TextSpan>
            ))}
        </p>
    )
}

export default JackEffect