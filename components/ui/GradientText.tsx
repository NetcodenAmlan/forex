import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-500 ${className}`}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: '200% 200%',
      }}
    >
      {children}
    </motion.span>
  );
};

export const BlackFridayText: React.FC<GradientTextProps> = ({ children, className = "" }) => {
    return (
      <motion.span
        className={`bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-black tracking-tighter ${className}`}
        animate={{
          textShadow: [
              "0 0 10px rgba(236, 72, 153, 0.5)",
              "0 0 20px rgba(239, 68, 68, 0.6)",
              "0 0 10px rgba(236, 72, 153, 0.5)"
          ]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {children}
      </motion.span>
    );
  };