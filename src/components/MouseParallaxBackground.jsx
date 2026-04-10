import { useEffect, useState } from 'react';

export default function MouseParallaxBackground({ imageUrl }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Parallax logic: translate background softly inversely to mouse direction
    const handleMouseMove = (e) => {
      // Scale factor controls how intensely the background moves
      const scaleFactor = 0.03; 
      
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate distance from center, reverse the direction
      const moveX = (centerX - e.clientX) * scaleFactor;
      const moveY = (centerY - e.clientY) * scaleFactor;
      
      // Use requestAnimationFrame for smoother state updates visually
      requestAnimationFrame(() => {
        setOffset({ x: moveX, y: moveY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 
        1. Base Layer: The parllaxing image 
        It is scaled up by 1.1x and negative inset so that when it translates, 
        we don't see the edges cutting into the screen.
      */}
      <div 
        className="fixed inset-[-5%] bg-cover bg-center z-[-2] pointer-events-none transition-transform duration-[600ms] ease-out will-change-transform"
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          // scale(1.1) guarantees edges won't show during extreme mouse movements
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(1.1)` 
        }}
      />

      {/* 
        2. Overlay Layer: The dark mode Apple/NVIDIA gradient
        It remains fixed and static so the text contrasts perfectly at all angles.
      */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/80 via-purple-900/80 to-slate-950/90 backdrop-blur-[2px] pointer-events-none z-[-1]" />
    </>
  );
}
