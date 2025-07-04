import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Animation configuration
  const fadeUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const descriptionLines = [
    "Specializing in <span class='text-purple-300 font-medium'>full-stack development</span> with .NET and React, I architect solutions that balance technical robustness with intuitive user experiences.",
    "My approach combines <span class='text-blue-300 font-medium'>backend precision</span> with <span class='text-purple-300 font-medium'>design sensibility</span>, ensuring products are as maintainable as they are visually compelling."
  ];

  const methodologyItems = [
    { color: "bg-purple-500", text: "Component-Driven Development" },
    { color: "bg-blue-500", text: "User-First Design Principles" },
    { color: "bg-indigo-500", text: "Performance-Centric Architecture" }
  ];

  return (
  <section 
    id="about" 
    className="min-h-screen flex flex-col justify-center px-6 py-20 bg-[#0F0C29] text-white relative overflow-hidden"
  >
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5">
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl"></div>
    </div>

    <div className="max-w-5xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: false, amount: 0.15 }}
        className="mb-12"
      >
        <motion.span 
          variants={fadeUpItem}
          className="text-sm font-mono text-purple-400 tracking-widest block"
        >
          ABOUT ME
        </motion.span>

        <motion.h2 
          variants={fadeUpItem}
          className="text-3xl md:text-4xl font-bold mt-2"
        >
          Disha <span className="text-gray-400">// Developer & Designer</span>
        </motion.h2>

        <motion.div 
          variants={fadeUpItem}
          className="w-24 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 mt-4"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: false, amount: 0.25 }}
        >
          {descriptionLines.map((line, index) => (
            <motion.p
              key={index}
              variants={fadeUpItem}
              className="text-lg leading-relaxed text-gray-300 mb-6"
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}

          <motion.div variants={fadeUpItem} className="mt-10">
            <motion.h3 
              variants={fadeUpItem}
              className="text-sm font-mono text-gray-400 mb-4 mt-16 tracking-widest"
            >
              METHODOLOGY
            </motion.h3>

            <motion.div variants={container}>
              {methodologyItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={fadeUpItem}
                  className="flex items-center mb-4 last:mb-0"
                >
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                  <span className="text-gray-200">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: false, amount: 0.2 }}
          className="bg-gray-900 bg-opacity-50 rounded-xl p-6 border border-gray-800 mt-[1rem] "
        >
          <motion.h3 
            variants={fadeUpItem}
            className="text-lg font-semibold mb-6 flex items-center"
          >
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            TECHNICAL CAPABILITIES
          </motion.h3>

          <motion.div variants={container} className="space-y-6">
            {Object.entries({
              "Frontend": ["React", "JavaScript", "HTML5", "CSS3"],
              "Backend": [".NET", "C#"],
              "Database": ["PostgreSQL"],
              "Design": ["Figma", "UI/UX"],
              "Tools": ["Git", "GitHub", "REST APIs"]
            }).map(([category, items]) => (
              <motion.div key={category} variants={fadeUpItem}>
                <motion.h4 
                  variants={fadeUpItem}
                  className="text-sm font-mono text-gray-400 mb-2 tracking-widest"
                >
                  {category}
                </motion.h4>
                <motion.div 
                  variants={container}
                  className="flex flex-wrap gap-2"
                >
                  {items.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={fadeUpItem}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1.5 bg-gray-800 rounded-md text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUpItem} className="mt-8 pt-6 border-t border-gray-800">
            <motion.h4 
              variants={fadeUpItem}
              className="text-sm font-mono text-gray-400 mb-3 tracking-widest"
            >
              CORE ATTRIBUTES
            </motion.h4>
            <motion.div 
              variants={container}
              className="flex flex-wrap gap-3"
            >
              {["Adaptable Problem-Solver", "Solution-Oriented", "Continuous Learner"].map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeUpItem}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-purple-900 bg-opacity-40 rounded-md text-sm font-medium text-purple-100 border border-purple-800"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
}
