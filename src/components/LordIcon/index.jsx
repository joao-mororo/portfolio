import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// register lottie and define custom element
defineElement(lottie.loadAnimation);

const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
  state
}) => {
  return (
    <lord-icon
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size,
      }}
      state={state}
    />
  );
};

export default LordIcon