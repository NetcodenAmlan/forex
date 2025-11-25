
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './ui/MagneticButton';
import { ChevronRight } from 'lucide-react';
import { HeroGraphic } from './ui/HeroGraphic';
import { HeroBackground } from './ui/HeroBackground';
import { ProductTitle } from './ui/ProductTitle';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center pt-24 preserve-3d bg-black">
      
      {/* New Apple-Standard Motion Background */}
      <HeroBackground />

      <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center relative z-10">
        
        {/* Top Badge */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
        >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg group cursor-default hover:bg-white/10 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-[10px] font-bold text-zinc-300 tracking-[0.2em] uppercase">Limited Time Offer</span>
            </div>
        </motion.div>

        {/* Main Headline Container */}
        <div className="text-center mb-2 relative flex flex-col items-center w-full">
            <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            >
                <span className="text-teal-400 mr-4 inline-block drop-shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                    Black Friday
                </span>
                <span className="text-white inline-block">
                    Meets
                </span>
            </motion.h1>
            
            {/* The "Wow" Factor Title - Spacing Fixed */}
            <div className="mt-4 md:mt-8 w-full flex justify-center z-20">
                <ProductTitle />
            </div>
        </div>

        {/* Feature Pill */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center gap-3 md:gap-6 px-8 py-3 bg-[#0A0A0A]/80 border border-white/10 rounded-full mb-16 shadow-[0_0_40px_-10px_rgba(20,184,166,0.15)] backdrop-blur-xl relative z-30"
        >
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                <span className="text-zinc-300 font-medium text-xs md:text-sm tracking-tight">Migrate Your CRM in 72 Hours</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.8)]" />
                <span className="text-white font-bold text-xs md:text-sm tracking-tight">Get 50% <span className="text-teal-400">OFF Setup</span></span>
            </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-24 relative z-30"
        >
             <MagneticButton className="group bg-white text-black px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]">
                Book a Free Demo Today
                <ChevronRight className="w-5 h-5 text-black transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
            </MagneticButton>
        </motion.div>

        {/* 3D Dashboard Graphic anchored at bottom */}
        <motion.div 
            style={{ y }}
            className="w-full flex justify-center perspective-1000 pb-20 relative z-10"
        >
            <HeroGraphic />
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
