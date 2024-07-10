import React from 'react';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Video from '../components/VideoPlayer';

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="home"
      className="w-screen h-[90vh] flex flex-col justify-center items-center text-white"
      style={{ overflow: 'hidden' }}
    >
      <Video />
    </section>
  );
};

export default Home;
