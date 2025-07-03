// src/App.jsx
import React from 'react';
import Navbar from "./Pages/Navbar"
import Hero from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/work';
import MovingTitle from './Components/MovingTitle';
import Contact from './Pages/Contact';

export default function App() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
