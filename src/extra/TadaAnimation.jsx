// TadaAnimation.jsx
import { keyframes } from '@emotion/react';
import { Reveal } from 'react-awesome-reveal';

const tada = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

const Tada = ({ children, ...props }) => (
  <Reveal keyframes={tada} duration={1000} triggerOnce {...props}>
    {children}
  </Reveal>
);

export default Tada;
