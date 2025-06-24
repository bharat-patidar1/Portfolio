// JumpAnimation.jsx
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

// Define jump keyframes
const jump = keyframes`
  0% {
    transform: translateY(0);
  }

  20% {
    transform: translateY(-20px);
  }

  40% {
    transform: translateY(0);
  }

  60% {
    transform: translateY(-10px);
  }

  80% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(0);
  }
`;

export const Jump = ({ children, duration = 1000, delay = 0, triggerOnce = true }) => (
  <Reveal keyframes={jump} duration={duration} delay={delay} triggerOnce={triggerOnce}>
    {children}
  </Reveal>
);
