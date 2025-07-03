// src/constants/techLogos.js
import ReactLogo from '../assets/React.svg';
import FigmaLogo from '../assets/figma.svg';
import GithubLogo from '../assets/Github.svg';
import TailwindLogo from '../assets/tailwind.svg';

export const techLogos = [
  {
    id: 1,
    src: ReactLogo, // Use the default import
    alt: 'React',
    className: 'top-[10%] left-[25%] animate-float-react',
    animationConfig: {
      delay: '0s',
      duration: '6s'
    }
  },
  {
    id: 2,
    src: FigmaLogo,
    alt: 'Figma',
    className: 'top-[10%] right-[25%] animate-float-figma',
    animationConfig: {
      delay: '1.5s',
      duration: '7s'
    }
  },
  {
    id: 3,
    src: GithubLogo,
    alt: 'GitHub',
    className: 'bottom-[33%] left-[10%] animate-float-github',
    animationConfig: {
      delay: '1s',
      duration: '5.5s'
    }
  },
  {
    id: 4,
    src: TailwindLogo,
    alt: 'Tailwind CSS',
    className: 'bottom-[25%] right-[10%] animate-float-tailwind',
    animationConfig: {
      delay: '2s',
      duration: '6.5s'
    }
  }
];