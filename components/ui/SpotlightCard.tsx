import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "", onClick }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 184, 166, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 184, 166, 0.4),
              transparent 80%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent 80%
            )
          `,
            WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              black,
              transparent 80%
            )
          `,
        }}
       />
       {/* Border Overlay */}
       <motion.div 
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
            border: "1px solid transparent",
            maskImage: "linear-gradient(black, black), content-box",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            background: useMotionTemplate`
                radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px, 
                    rgba(255,255,255,0.1), 
                    transparent 80%
                ) border-box
            `
        }}
       />
      <div className="relative h-full z-10">{children}</div>
    </div>
  );
};