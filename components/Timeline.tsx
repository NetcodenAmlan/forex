import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Database, FileJson, LayoutTemplate, CheckCircle2, ArrowRight } from 'lucide-react';

const Timeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="relative bg-[#020202] h-[300vh]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left: Progress & Content Area */}
        {/* Mobile: Top 45% height. Desktop: Left 50% width, full height */}
        <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-full flex flex-col justify-center px-6 md:px-20 z-20 pointer-events-none">
             
             {/* Global Section Header */}
             <motion.div 
                style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                className="absolute top-4 left-6 md:top-10 md:left-20 z-30"
             >
                <h2 className="text-sm font-mono text-teal-500 tracking-widest uppercase mb-1 md:mb-2">The Process</h2>
                <h3 className="text-lg md:text-xl font-semibold text-white">The 3-Day Miracle</h3>
             </motion.div>

             {/* Progress Rail (Desktop Only) */}
             <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 h-[60%] w-[2px] bg-white/10 hidden lg:block">
                <motion.div 
                    style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                    className="w-full bg-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.8)]"
                />
             </div>

             {/* Text Cards Container */}
             <div className="relative w-full h-full lg:h-[400px] flex items-center mt-8 lg:mt-0">
                <TimelineText step={0} progress={scrollYProgress} 
                    day="01" 
                    title="Migration Blueprint" 
                    desc="Your dedicated engineer audits your CRM, data, and integrations — building a zero-risk migration plan." 
                />
                <TimelineText step={1} progress={scrollYProgress} 
                    day="02" 
                    title="Engine in Action" 
                    desc="Our system transfers every detail — client profiles, trades, KYC, IB data, and payments — under full encryption." 
                />
                <TimelineText step={2} progress={scrollYProgress} 
                    day="03" 
                    title="Go Live + Optimize" 
                    desc="Your new CRM goes live. Within 72 hours, your team operates faster than ever before." 
                />
             </div>
        </div>

        {/* Right: The Motion Engine */}
        {/* Mobile: Bottom 55% height. Desktop: Right 50% width, full height */}
        <div className="relative w-full lg:w-1/2 h-[55vh] lg:h-full flex items-center justify-center z-10 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-none">
            <div className="relative w-full max-w-[360px] md:max-w-[600px] aspect-square flex items-center justify-center p-4 lg:p-0">
                <EngineCore progress={scrollYProgress} />
            </div>
        </div>

      </div>

    </section>
  );
};

// ------------------------------------------------------------------
// Sub-Component: Text Panel
// ------------------------------------------------------------------
const TimelineText = ({ step, progress, day, title, desc }: { step: number, progress: any, day: string, title: string, desc: string }) => {
    // Calculate active range for this step (0-0.33, 0.33-0.66, 0.66-1)
    const start = step * 0.33;
    const end = start + 0.33;
    const fadeStart = start; 
    const fadeEnd = end - 0.05;

    const opacity = useTransform(progress, 
        [fadeStart - 0.1, fadeStart, fadeEnd, fadeEnd + 0.1], 
        [0, 1, 1, 0]
    );
    const y = useTransform(progress, 
        [fadeStart - 0.1, fadeStart, fadeEnd, fadeEnd + 0.1], 
        [30, 0, 0, -30]
    );

    return (
        <motion.div 
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col justify-center"
        >
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6">
                <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-teal-500/20 bg-teal-900/10 text-teal-400 font-mono font-bold text-base md:text-lg shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                    {day}
                </span>
                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-teal-500/50 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tighter mb-3 md:mb-6 drop-shadow-lg">
                {title}
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light max-w-md">
                {desc}
            </p>
        </motion.div>
    );
};

// ------------------------------------------------------------------
// Sub-Component: The Visual Engine
// ------------------------------------------------------------------
const EngineCore = ({ progress }: { progress: any }) => {
    const [activeStage, setActiveStage] = useState(0);

    // Monitor progress to switch stages
    useEffect(() => {
        const unsubscribe = progress.on("change", (latest: number) => {
            if (latest < 0.33) setActiveStage(0);
            else if (latest < 0.66) setActiveStage(1);
            else setActiveStage(2);
        });
        return () => unsubscribe();
    }, [progress]);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
                {activeStage === 0 && (
                    <motion.div 
                        key="stage1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Blueprint / Wireframe View */}
                        <div className="w-56 h-56 md:w-64 md:h-64 border border-dashed border-teal-500/30 rounded-lg relative p-4 grid grid-cols-2 gap-4 bg-black/40 backdrop-blur-sm">
                            {[...Array(4)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="border border-teal-500/20 rounded bg-teal-500/5"
                                />
                            ))}
                            {/* Scanning Line */}
                            <motion.div 
                                className="absolute top-0 left-0 w-full h-1 bg-teal-500 shadow-[0_0_15px_#14B8A6]"
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                            />
                        </div>
                        <div className="absolute mt-72 md:mt-80 text-teal-500 font-mono text-[10px] md:text-xs tracking-widest uppercase bg-black/60 px-2 py-1 rounded">
                            Scanning Architecture...
                        </div>
                    </motion.div>
                )}

                {activeStage === 1 && (
                    <motion.div 
                        key="stage2"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Transfer / Liquid Energy View */}
                        <div className="relative w-56 h-56 md:w-64 md:h-64">
                            <div className="absolute inset-0 rounded-full border-2 border-teal-500/20 animate-spin-slow" />
                            <div className="absolute inset-4 rounded-full border-2 border-dashed border-indigo-500/30 animate-spin-reverse-slow" />
                            
                            {/* Particle Stream Center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div 
                                    className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-full blur-xl opacity-50"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <Database className="w-12 h-12 md:w-16 md:h-16 text-white relative z-10" />
                            </div>
                            
                            {/* Orbiting Data Packets */}
                            {[...Array(6)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full shadow-[0_0_10px_white]"
                                    style={{ offsetPath: `path('M128,128 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0')` }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                                />
                            ))}
                        </div>
                        <div className="absolute mt-72 md:mt-80 text-indigo-400 font-mono text-[10px] md:text-xs tracking-widest uppercase bg-black/60 px-2 py-1 rounded">
                            Transferring Assets...
                        </div>
                    </motion.div>
                )}

                {activeStage === 2 && (
                    <motion.div 
                        key="stage3"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Go Live / Crystal View */}
                        <div className="relative">
                            {/* Glow Burst */}
                            <div className="absolute inset-0 bg-teal-500 blur-[100px] opacity-20" />
                            
                            {/* Main Artifact */}
                            <div className="w-56 h-32 md:w-64 md:h-40 bg-gradient-to-b from-zinc-800 to-black border border-white/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
                                <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-teal-400 mb-2 md:mb-4 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" />
                                <div className="text-white font-bold text-base md:text-lg">System Active</div>
                                <div className="text-teal-500 text-[10px] md:text-xs font-mono mt-1">100% Optimized</div>
                                
                                {/* Shine Effect */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                                    animate={{ x: ["-150%", "150%"] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Timeline;