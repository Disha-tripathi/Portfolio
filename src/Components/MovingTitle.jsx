import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MovingTitle() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      y: window.innerHeight * 0.8, // Slide down to about
      ease: 'none',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top top',
        end: '+=1200',
        scrub: true,
      },
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className="fixed top-20 left-1/2 -translate-x-1/2 text-[59px] font-poetsen font-bold text-white z-50 pointer-events-none"
    >
      Hi, I’m <span className="text-[#94B3FD]">Disha</span>
    </h1>
  );
}
