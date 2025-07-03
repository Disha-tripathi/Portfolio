import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Stars from '../Components/Stars';
import { techLogos } from '../Constants/techLogos';
import DeskScene from '../Constants/DeskScene';
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const starsRef = useRef(null);
  const logosRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const deskRef = useRef(null);

  useEffect(() => {
    gsap.ticker.fps(60);

    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=2000',
        scrub: 0.1,
        pin: true,
        toggleActions: 'play none reverse none',
      },
    });

    heroTL.to(starsRef.current, {
      y: 100,
      scale: 1.05,
      ease: 'power1.inOut',
      duration: 1.2,
    });

    heroTL.to(logosRef.current, {
      y: 50,
      ease: 'power1.inOut',
      duration: 1.2,
    }, 0.2);

    heroTL.to(textRef.current, {
      y: 150,
      scale: 1.3,
      ease: 'power1.inOut',
      duration: 1.8,
      force3D: false,
    }, 0.4);

    heroTL.to(subtextRef.current, {
      opacity: 0,
      ease: 'power1.inOut',
      duration: 1.5,
    }, 0.6);

    heroTL.to(deskRef.current, {
      opacity: 0,
      scale: 0.9,
      ease: 'power1.inOut',
      duration: 1.2,
    }, 0.8);

    heroTL.fromTo(
      '#about',
      { y: 300 },
      { y: 0, ease: 'power1.inOut', duration: 1.5 },
      1.0
    );

    gsap.utils.toArray('#about .fadeUp').forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          end: 'top 70%',
          scrub: false,
          toggleActions: 'play none reverse none',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center px-4 md:px-8 h-screen overflow-hidden bg-hero-gradient z-49 hero"
      id="home"
    >
      {/* Stars Background */}
      <div ref={starsRef} className="absolute inset-0 z-0 will-change-transform">
        <Stars />
      </div>

      {/* Orbiting Tech Logos */}
      <div ref={logosRef} className="absolute inset-0 z-10 will-change-transform">
        {techLogos.map(logo => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 opacity-90 hover:opacity-100 transition-opacity duration-300 ${logo.className}`}
          />
        ))}
      </div>

      {/* Text Content Container */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-30 -mt-52">
        <div ref={textRef} className="text-center will-change-transform">
          <h1 className="font-sans font-semibold text-[32px] sm:text-[4px] md:text-[64px] lg:text-[64px] leading-tight text-white">
            Hi! I'm <span className="text-[#94B3FD] font-poetsen">Disha</span>
          </h1>
        </div>

        <div ref={subtextRef} className="mt-4 text-center will-change-transform">
          <p className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px] leading-snug text-white mb-6">
            A Creative Frontend Developer & UI/UX Designer
          </p>

          <button className="bg-green-700 text-white font-poppins text-[14px] sm:text-[15px] md:text-[16px] font-semibold px-6 sm:px-8 md:px-8 py-3 sm:py-3 rounded-[34px] hover:bg-green-800 transition" >
            Download Resume
          </button>
        </div>
      </div>

      {/* Desk Scene */}
      <div
        ref={deskRef}
        className="fixed bottom-0 w-full flex justify-center z-20 pointer-events-none will-change-transform"
      >
        <DeskScene />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-opacity-60 flex items-center">
        <span className="text-xs mr-2">SCROLL</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
