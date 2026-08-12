import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * AmbientBackground Component
 * Renders a classy, ultra-subtle ambient glow background tailored for a high-end music player experience.
 * Tracks pointer / touch movement smoothly with low opacity hardware-accelerated gradients.
 */
export default function AmbientBackground() {
  const [pointerPos, setPointerPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      setPointerPos({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Deep Midnight Base Layer */}
      <div className="absolute inset-0 bg-[#0A0A0A] bg-opacity-98" />

      {/* Subtle Noise Texture / Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `radial-gradient(var(--color-accent) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Primary Gold Ambient Orb Top-Right */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -right-32 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[var(--color-accent)]/10 via-amber-600/5 to-transparent blur-[140px]"
      />

      {/* Secondary Warm Amber Orb Bottom-Left */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -left-40 h-[650px] w-[650px] rounded-full bg-gradient-to-tr from-amber-700/8 via-[var(--color-accent)]/5 to-transparent blur-[160px]"
      />

      {/* Subtle Bottom Ambient Mesh */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, 20, -40, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 right-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-amber-900/10 via-yellow-700/5 to-transparent blur-[150px]"
      />

      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-[90px] transition-transform duration-500 ease-out"
        style={{
          left: `${pointerPos.x}px`,
          top: `${pointerPos.y}px`,
        }}
      />
    </div>
  );
}
