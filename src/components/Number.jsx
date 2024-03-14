import { useSpring, animated } from '@react-spring/web';

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10, duration: 2500 }, // Increase duration for slower animation
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
