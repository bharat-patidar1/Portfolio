// RubberBand.js
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const rubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

export const RubberBand = ({ children, ...props }) => (
  <Reveal keyframes={rubberBand} duration={1000} triggerOnce {...props}>
    {children}
  </Reveal>
);
