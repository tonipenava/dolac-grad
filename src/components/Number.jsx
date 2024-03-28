import { useSpring, animated } from '@react-spring/web';
import React from 'react';

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 180,
    config: { mass: 1, tension: 20, friction: 10, duration: 1600 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
