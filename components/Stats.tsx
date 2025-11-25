import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';
import { RollingNumber } from './ui/RollingNumber';
import { Zap, Activity, Repeat, UserCheck, Layers, ArrowUpRight } from 'lucide-react';

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={containerRef} className="py-40 px-6 relative z-10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 md:flex justify-between items-end border-b border-white/10 pb-12">
            <div className="max-w-3xl">
                <motion.h2 
                    style={{ opacity, y: useTransform(scrollYProgress, [0, 0.2], [50, 0]) }}
                    className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]"
                >
                    Why Brokers Are <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">Making the Switch</span>
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl"
                >
                    Your CRM isn’t just software — it’s your <span className="text-white font-medium">trading engine</span>. 
                    When it slows, everything slows.
                </motion.p>
            </div>
            <div className="hidden md:block">
                <div className="flex items-center gap-2 text-teal-500 font-mono text-xs uppercase tracking-widest border border-teal-500/30 px-4 py-2 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    Live Performance Data
                </div>
            </div>
        </div>

        {/* Holographic Engine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            
            {/* Card 1: Faster Onboarding (Large) */}
            <StatsCard className="md:col-span-3 lg:col-span-4 min-h-[320px]" delay={0}>
                <SpeedGraphic />
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-6xl font-bold text-white tracking-tighter">+</span>
                        <div className="text-6xl font-bold text-white tracking-tighter">
                            <RollingNumber value={30} duration={2} />
                        </div>
                        <span className="text-6xl font-bold text-white tracking-tighter">%</span>
                    </div>
                    <h3 className="text-teal-400 font-bold uppercase tracking-wider text-sm mb-2">Faster Onboarding</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Clients register and trade faster.</p>
                </div>
            </StatsCard>

            {/* Card 2: Efficiency (Large) */}
            <StatsCard className="md:col-span-3 lg:col-span-4 min-h-[320px]" delay={0.1}>
                <EfficiencyGraphic />
                <div className="absolute bottom-8 left-8 right-8">
                     <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-6xl font-bold text-white tracking-tighter">Up to</span>
                        <div className="text-6xl font-bold text-white tracking-tighter ml-2">
                            <RollingNumber value={40} duration={2.5} />
                        </div>
                        <span className="text-6xl font-bold text-white tracking-tighter">%</span>
                    </div>
                    <h3 className="text-indigo-400 font-bold uppercase tracking-wider text-sm mb-2">Higher Efficiency</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Less manual work, more automation.</p>
                </div>
            </StatsCard>

            {/* Card 3: Zero Downtime (Tall) */}
            <StatsCard className="md:col-span-6 lg:col-span-4 min-h-[320px] bg-gradient-to-b from-[#0A0A0A] to-[#050505]" delay={0.2}>
                <DowntimeGraphic />
                <div className="absolute bottom-8 left-8 right-8">
                     <div className="text-5xl font-bold text-white tracking-tighter mb-2">
                        Zero Downtime. <br/> Zero Data Loss.
                     </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">Migrate without interrupting client activity.</p>
                </div>
            </StatsCard>

            {/* Card 4: MT4/MT5 Sync (Wide) */}
            <StatsCard className="md:col-span-3 lg:col-span-6 min-h-[280px]" delay={0.3}>
                <SyncGraphic />
                <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-bold text-white">MT4</div>
                        <div className="px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-bold text-white">MT5</div>
                        <div className="px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-bold text-white">PSP</div>
                    </div>
                    <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Full Sync & Integration</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">Your entire workflow — unified and seamless.</p>
                </div>
            </StatsCard>

             {/* Card 5: Specialist (Wide) */}
             <StatsCard className="md:col-span-3 lg:col-span-6 min-h-[280px]" delay={0.4}>
                <SpecialistGraphic />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                    <div>
                        <h3 className="text-white text-2xl font-bold tracking-tight mb-2">Dedicated Specialist</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">A personal SmartSwitch™ expert guiding your every step.</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                        <UserCheck className="text-black w-6 h-6" />
                    </div>
                </div>
            </StatsCard>

        </div>
      </div>
    </section>
  );
};

// ------------------------------------------------------------------
// Base Card Component with 3D Tilt & Glow
// ------------------------------------------------------------------
const StatsCard = ({ children, className = "", delay }: any) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleMouseMove}
            className={`relative group overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-colors ${className}`}
        >
            {/* Mouse Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${x}px ${y}px,
                            rgba(255, 255, 255, 0.06),
                            transparent 40%
                        )
                    `
                }}
            />
            {children}
        </motion.div>
    );
};

// ------------------------------------------------------------------
// Motion Graphics for each Metric
// ------------------------------------------------------------------

const SpeedGraphic = () => (
    <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
             {[...Array(5)].map((_, i) => (
                 <motion.line
                    key={i}
                    x1="-10%" y1={20 + i * 15 + "%"}
                    x2="110%" y2={10 + i * 15 + "%"}
                    stroke="url(#speed-gradient)"
                    strokeWidth="2"
                    strokeDasharray="100 200"
                    animate={{ strokeDashoffset: [0, -300] }}
                    transition={{ duration: 1 + i * 0.5, repeat: Infinity, ease: "linear" }}
                 />
             ))}
             <defs>
                 <linearGradient id="speed-gradient" x1="0" x2="1" y1="0" y2="0">
                     <stop offset="0%" stopColor="transparent" />
                     <stop offset="50%" stopColor="#2DD4BF" />
                     <stop offset="100%" stopColor="transparent" />
                 </linearGradient>
             </defs>
        </svg>
    </div>
);

const EfficiencyGraphic = () => (
    <div className="absolute top-8 right-8 w-24 h-24">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
            <motion.path
                d="M0,100 L20,80 L40,90 L60,40 L80,50 L100,0"
                fill="none"
                stroke="#818CF8"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "circOut" }}
            />
             <motion.circle cx="100" cy="0" r="4" fill="#818CF8" 
                initial={{ scale: 0 }} 
                whileInView={{ scale: 1 }} 
                transition={{ delay: 2 }}
             />
             <defs>
                 <filter id="glow-eff">
                     <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                     <feMerge>
                         <feMergeNode in="coloredBlur"/>
                         <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                 </filter>
             </defs>
        </svg>
    </div>
);

const DowntimeGraphic = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-20">
         <div className="w-full h-32 relative">
             <svg className="w-full h-full" preserveAspectRatio="none">
                 <motion.path
                    d="M0,50 Q25,50 50,50 T100,50 T150,50 T200,50 T250,50 T300,50"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2"
                    initial={{ d: "M0,50 Q25,60 50,40 T100,60 T150,40 T200,60 T250,40 T300,50" }}
                    whileInView={{ d: "M0,50 Q25,50 50,50 T100,50 T150,50 T200,50 T250,50 T300,50" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                 />
                  {/* Stable Line Pulse */}
                  <motion.rect 
                    x="0" y="49" width="100%" height="2" fill="#10B981"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
             </svg>
         </div>
    </div>
);

const SyncGraphic = () => (
    <div className="absolute top-0 right-0 p-8 opacity-40">
        <div className="relative w-32 h-32">
             <motion.div 
                className="absolute inset-0 border border-white/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             />
             <motion.div 
                className="absolute inset-4 border border-teal-500/50 rounded-full border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             />
             <div className="absolute inset-0 flex items-center justify-center">
                 <Repeat className="w-8 h-8 text-teal-500" />
             </div>
        </div>
    </div>
);

const SpecialistGraphic = () => (
    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-900/20 to-transparent pointer-events-none">
        {/* Abstract Chat Bubbles or Connection Lines */}
        <div className="absolute top-10 right-10">
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="w-32 h-2 bg-white/10 rounded-full mb-2"
            />
             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="w-20 h-2 bg-white/10 rounded-full"
            />
        </div>
    </div>
);

export default Stats;
