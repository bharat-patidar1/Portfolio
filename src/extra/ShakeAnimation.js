// ShakeAnimation.jsx
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const shake = keyframes`
  10%, 90% {
    transform: translateX(-1px);
  }

  20%, 80% {
    transform: translateX(2px);
  }

  30%, 50%, 70% {
    transform: translateX(-4px);
  }

  40%, 60% {
    transform: translateX(4px);
  }
`;

export const Shake = ({ children, ...props }) => (
  <Reveal keyframes={shake} duration={800} triggerOnce {...props}>
    {children}
  </Reveal>
);
