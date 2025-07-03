// src/Components/Contact.jsx
import React, { useState } from 'react';
import { FiMail, FiSend, FiLinkedin, FiGithub, FiTwitter, FiPhone } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Thank you! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0a192f] to-[#172a45] px-6 py-16">
      <div className="max-w-6xl w-full mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#64ffda] mx-auto mb-6"></div>
          <p className="text-lg text-[#ccd6f6] max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out. 
            I'm currently available for freelance work and full-time positions.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 bg-[#112240] p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#64ffda] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#64ffda] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#64ffda] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full md:w-auto px-8 py-3 bg-transparent border border-[#64ffda] text-[#64ffda] rounded-md hover:bg-[#64ffda1a] transition-all"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              {submitMessage && (
                <p className="text-green-400 mt-4">{submitMessage}</p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="text-2xl text-[#64ffda] mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a 
                      href="mailto:dishatripathi91@gmail.com" 
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      dishatripathi91@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FiPhone className="text-2xl text-[#64ffda] mt-1 mr-4" />
                  <div>
                    <h4 className="text-lg font-medium text-white">Phone/WhatsApp</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-2xl text-[#64ffda] mt-1 mr-4 w-6 flex justify-center">
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">Location</h4>
                    <p className="text-[#ccd6f6]">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#112240] p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Find Me Online</h3>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a 
                  href="https://twitter.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-3xl text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                  aria-label="Twitter"
                >
                  <FiTwitter />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}