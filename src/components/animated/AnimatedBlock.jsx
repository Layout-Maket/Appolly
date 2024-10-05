import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedBlock = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // анімація виконується тільки раз при появі
    threshold: 0.1,     // 10% блоку має з'явитися, щоб спрацювало
  });

  return (
    <div
      ref={ref}
      className={`animated-block ${inView ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedBlock;
