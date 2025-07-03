// src/components/Stars.jsx
import React from 'react';
// import './Stars.css';

const Stars = () => {
  // Generate stars with random properties
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      opacity: Math.random() * 0.5 + 0.1,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 4 + 3}s`
    }));
  };

  const stars = generateStars(100); // Generate 100 stars

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration
          }}
        />
      ))}
    </div>
  );
};

export default Stars;