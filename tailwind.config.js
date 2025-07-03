// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['Poetsen One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        // Logo floating animations
        'float-react': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        'float-figma': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(-5deg)' }
        },
        'float-github': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' }
        },
        'float-tailwind': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-3deg)' }
        },
        'float-text': {
          '0%, 100%': { transform: 'translateY(0) ' },
          '50%': { transform: 'translateY(-8px) ' },
        },

        // Star twinkling animation
        twinkle: {
          '0%, 100%': { 
            opacity: '0.1', 
            transform: 'scale(0.8)' 
          },
          '50%': { 
            opacity: '1', 
            transform: 'scale(1.2)' 
          },
        },
        // Button pulse animation
        pulse: {
          '0%, 100%': { 
            transform: 'scale(1)' 
          },
          '50%': { 
            transform: 'scale(1.05)' 
          },
        }
        
      },
      animation: {
        // Logo animations
        'float-react': 'float-react 6s ease-in-out infinite',
        'float-figma': 'float-figma 7s ease-in-out infinite 1.5s',
        'float-github': 'float-github 5.5s ease-in-out infinite 1s',
        'float-tailwind': 'float-tailwind 6.5s ease-in-out infinite 2s',
        'float-text': 'float-text 4s ease-in-out infinite',

        // Star animation
        twinkle: 'twinkle 3s ease-in-out infinite',
        // Button animation
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Custom background gradient
      backgroundImage: {
        'hero-gradient': 'linear-gradient(360deg, #24243E 0%, #201C46 40%, #0F0C29 100%)',
      },
      // Custom shadows
      boxShadow: {
        'logo-glow': '0 0 8px rgba(255, 255, 255, 0.3)',
        'logo-glow-hover': '0 0 12px rgba(255, 255, 255, 0.5)',
        'button-glow': '0 0 15px rgba(21, 128, 61, 0.5)',
      }
    },
  },
  plugins: [],
};