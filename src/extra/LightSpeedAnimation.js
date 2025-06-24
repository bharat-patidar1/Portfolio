// LightSpeedAnimation.jsx
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const lightSpeedInLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0) skewX(30deg);
    opacity: 0;
  }

  60% {
    transform: skewX(-20deg);
    opacity: 1;
  }

  80% {
    transform: skewX(5deg);
    opacity: 1;
  }

  to {
    transform: none;
    opacity: 1;
  }
`;

export const LightSpeed = ({ children, ...props }) => (
  <Reveal keyframes={lightSpeedInLeft} duration={1000} triggerOnce {...props}>
    {children}
  </Reveal>
);
