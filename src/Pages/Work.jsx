// src/Pages/Work.jsx
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import united from "../assets/united-opportunities.png"
import img_laf2 from "../assets/img_laf2.png"
import img_wk from "../assets/img_wk.png"
import img_lby from "../assets/img_lby.jpg"


gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelsRef = useRef([]);
  const progressBarRef = useRef(null);

  // Project data with color scheme matching bg-[#0F0C29]
  const projects = [
      {
      title: "United Opportunities",
      category: "Career & Recruitment Platform",
      description:  "A modern recruitment platform that bridges the gap between job seekers and employers. Provides resume building, career guidance, and industry insights through an intuitive, responsive interface with dedicated sections like Home, Industries, Services, About Us, and Contact Us.",
      bgColor: "bg-gradient-to-br from-[#0F0C29] to-[#1e40af]",
      accentColor: "text-[#93c5fd]",
      textColor: "text-white",
      caseStudyUrl:"https://disha-tripathi.github.io/United-Oppurtunities/",
      image: united,
      bezelColor : "bg-black"
    },
    {
      title: "Lost & Found",
      category: "Community Platform",
      description: "A digital platform to help people recover lost belongings by enabling quick reporting, photo uploads of found items, and secure contact sharing. Builds a supportive network that reconnects owners with their lost items.",
      bgColor: "bg-gradient-to-br from-[#0F0C29] to-[#4f46e5]",
      accentColor: "text-[#a5b4fc]",
      textColor: "text-white",
      image: img_laf2,
      bezelColor : "bg-white"
    },
    {
      title: "WorkKeeper",
      category: "Employee Management Platform",
      description: "A web-based employee portal built with .NET, React, and PostgreSQL. Simplifies work tracking, attendance management, leave and shift requests, and provides personalized dashboards and alerts for better workforce management.",
      bgColor: "bg-gradient-to-br from-[#0F0C29] to-[#302b63]",
      accentColor: "text-[#6366f1]",
      textColor: "text-white",
      // image : img_wk,
      // bezelColor: "bg-[#0f0c29]"
    },
    
    {
      title: "Learn by Yourself",
      category: "EdTech Platform",
      description: "A self-guided career exploration platform helping students make informed decisions with IT and Non-IT industry insights, resume creation, career consultation, and mock interviews. Features a responsive, user-friendly interface with sections like Home, Industries, Services, About Us, and Contact Us.",
      bgColor: "bg-gradient-to-br from-[#0F0C29] to-[#065f46]",
      accentColor: "text-[#6ee7b7]",
      textColor: "text-white",
      image : img_lby,
      bezelColor : "bg-white"

    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    const panels = panelsRef.current;
    const progressBar = progressBarRef.current;

    // Calculate total scroll width
    const totalWidth = panels.length * window.innerWidth;

    // Set up the horizontal scroll
let snapEnabled = false;

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: `+=${totalWidth}`,
    pin: true,
    scrub: 1,
    snap: false, // <-- disable snap at first
    onUpdate: (self) => {
      const progress = self.progress;
      setActiveIndex(Math.round(progress * (panels.length - 1)));
      gsap.to(progressBar, {
        width: `${progress * 100}%`,
        ease: "none"
      });

      // If the user has scrolled a bit, enable snap dynamically
      if (!snapEnabled && progress > 0.05) {
        self.scrollTrigger.snap = {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.3, max: 0.8 },
          ease: "power3.out"
        };
        snapEnabled = true;
      }
    }
  }
});

    tl.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none"
    });

    // Panel animations - ensure text is visible
    panels.forEach((panel, index) => {
      const content = panel.querySelector(".panel-content");
      gsap.from(content, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: panel,
          start: "left center",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Force text visibility
    gsap.set(".panel-content", { opacity: 1 });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const goToPanel = (index) => {
    const panelWidth = window.innerWidth;
    gsap.to(innerRef.current, {
      x: -index * panelWidth,
      duration: 1.2,
      ease: "power3.inOut",
      onUpdate: () => {
        ScrollTrigger.refresh();
      }
    });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#0F0C29]" id='work'>  
      
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 z-30 bg-gray-700">
        <div ref={progressBarRef} className="h-full bg-[#6366f1] w-0"></div>
      </div>

      {/* Header */}
      <div className="absolute top-8 left-8 z-20">
        <h1 className="text-2xl font-light text-white tracking-widest">OUR WORK</h1>
        <div className="w-16 h-px bg-white mt-3"></div>
      </div>

      {/* Project counter */}
      <div className="absolute bottom-8 left-8 z-20 text-white">
        <span className="text-sm font-light">0{activeIndex + 1}</span>
        <span className="mx-2">/</span>
        <span className="text-sm font-light opacity-50">0{projects.length}</span>
      </div>

      {/* Horizontal scroller */}
      <div 
        ref={innerRef} 
        className="inner flex h-full" 
        style={{ width: `${projects.length * 100}vw` }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            ref={el => panelsRef.current[index] = el}
            className={`panel w-screen h-screen flex items-center justify-between px-8 md:px-16 ${project.bgColor}`}
          >
            {/* Content - ensure text is visible */}
            <div className={`panel-content w-full md:w-1/2 max-w-2xl ${project.textColor}`}>
              <span className={`text-xs font-poppins tracking-widest ${project.accentColor} mb-4 md:mb-6 block`}>
                {project.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
                {project.title}
              </h2>
              <p className="text-base md:text-lg opacity-90 mb-8 md:mb-10 leading-relaxed">
                {project.description}
              </p>
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-2 md:px-8 md:py-3 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white border-opacity-20">
                View Case Study
              </button>
              </a>
            </div>

            {project.image ? (
              <div className="hidden md:flex flex-col items-center w-full max-w-[480px]">
                {/* Laptop screen with dynamic bezel */}
                <div className={`relative w-full aspect-[16/9] rounded-t-[12px] overflow-hidden border-[6px] border-gray-800 shadow-2xl ${project.bezelColor}`}>
                  <img 
                    src={project.image} 
                    alt={`${project.title} visual`} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Laptop base stays same dark for realism */}
                <div className="w-full h-[20px] bg-gray-800 rounded-b-[12px] shadow-inner"></div>
              </div>
            ) : (
              <div className="hidden md:flex flex-col items-center w-full max-w-[480px]">
                <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-t-[12px] overflow-hidden border-[6px] border-gray-800 shadow-2xl flex items-center justify-center">
                  <span className="text-white text-opacity-50">Project Visual</span>
                </div>
                <div className="w-full h-[20px] bg-gray-800 rounded-b-[12px] shadow-inner"></div>
              </div>
            )}


          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 flex flex-col space-y-2 md:space-y-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-white' : 'bg-white bg-opacity-20 hover:bg-opacity-40'}`}
            onClick={() => goToPanel(index)}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-20 text-white text-opacity-60 flex items-center">
        <span className="text-xs mr-2">SCROLL</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}