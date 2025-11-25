
import React, { useRef, useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const ProductTitle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Very smooth, heavy physics for that "Premium Weight" feel
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 1 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  // Calculate the "Horizon Line" of the reflection based on mouse Y
  const gradientAngle = useTransform(smoothMouseX, [0, 1], ["45deg", "135deg"]);

  // Smoke Noise Texture (Fractal Turbulence) - High contrast for visibility
  const smokeTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.8'/%3E%3C/svg%3E")`;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Apple's "easeOutExpo" curve
      className="relative py-2 cursor-default select-none flex justify-center"
    >
      {/* The Container for the Text */}
      <div className="relative z-10">
        
        {/* 
           LAYER 1: The "Atmosphere" 
           A subtle bloom behind the text to lift it off the black background.
        */}
        <motion.div 
            className="absolute -inset-10 opacity-40 blur-[60px]"
            style={{
                background: useMotionTemplate`radial-gradient(circle at ${smoothMouseX.get() * 100}% ${smoothMouseY.get() * 100}%, rgba(20, 184, 166, 0.2), transparent 60%)`
            }}
        />

        {/* 
           LAYER 2: The Main Product Name 
           This uses a complex multi-stop gradient to simulate a metallic horizon.
        */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none relative">
          
          {/* The "Stroke" or "Cut" - A razor thin border */}
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 pointer-events-none z-50" 
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>
            SmartSwitch™
          </span>

          {/* The "Liquid Metal" Fill Base */}
          <motion.span
            className="relative block text-transparent bg-clip-text pb-4 z-10"
            style={{
              backgroundImage: useMotionTemplate`
                linear-gradient(
                  ${gradientAngle},
                  #444 0%,
                  #fff ${useTransform(smoothMouseY, [0, 1], ["20%", "80%"])},
                  #444 100%
                )
              `,
              backgroundSize: "150% 150%",
            }}
          >
            SmartSwitch™
          </motion.span>

          {/* 
             LAYER 3: The "Smokey Flow" (Requested Feature)
             Flowing smoke contained INSIDE the words.
             We use color-dodge to make the smoke 'glow' against the metal.
          */}
          <motion.span
             className="absolute inset-0 text-transparent bg-clip-text z-20 pointer-events-none mix-blend-color-dodge opacity-50"
             style={{
                backgroundImage: smokeTexture,
                backgroundSize: "200% 100%",
                filter: "contrast(1.5) brightness(1.2)"
             }}
             animate={{
                backgroundPosition: ["0% 0%", "100% 0%"]
             }}
             transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
             }}
          >
             SmartSwitch™
          </motion.span>
           <motion.span
             className="absolute inset-0 text-transparent bg-clip-text z-20 pointer-events-none mix-blend-color-dodge opacity-30"
             style={{
                backgroundImage: smokeTexture,
                backgroundSize: "200% 100%",
                filter: "contrast(1.2)"
             }}
             animate={{
                backgroundPosition: ["100% 0%", "0% 0%"]
             }}
             transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear"
             }}
          >
             SmartSwitch™
          </motion.span>

          {/* 
             LAYER 4: The "Specular Flash" (Sheen)
             A high-frequency white interference pattern.
          */}
          <motion.span
             className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent mix-blend-overlay pointer-events-none z-30"
             style={{
                backgroundSize: "200% 100%",
                backgroundPositionX: useTransform(smoothMouseX, [0, 1], ["100%", "0%"])
             }}
          >
             SmartSwitch™
          </motion.span>

          {/* 
             LAYER 5: The "Teal Reflection" (Brand Color)
          */}
          <span 
            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-t from-teal-500/30 to-transparent pointer-events-none mix-blend-plus-lighter z-40"
            aria-hidden="true"
          >
             SmartSwitch™
          </span>
        </h2>
        
        {/* 
           LAYER 6: The Reflection on the Floor 
        */}
        <div className="absolute top-[85%] left-0 w-full h-full scale-y-[-0.3] opacity-20 blur-md select-none pointer-events-none mask-image-fade-bottom">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-zinc-600">
                SmartSwitch™
            </h2>
        </div>

      </div>

      {/* Inline Styles for Masking */}
      <style>{`
        .mask-image-fade-bottom {
            mask-image: linear-gradient(to bottom, black, transparent);
            -webkit-mask-image: linear-gradient(to bottom, black, transparent);
        }
      `}</style>
    </motion.div>
  );
};
