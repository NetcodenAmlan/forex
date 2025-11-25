import React from 'react';
import { motion } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { Calendar, ChevronDown, TrendingUp, Users, Shield, BarChart3 } from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full md:min-h-[600px] md:h-auto flex items-center justify-center perspective-1000 select-none mt-8 md:mt-0 px-2 md:px-0 py-10">
      
      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(6)].map((_, i) => (
             <motion.div 
                key={i}
                className="absolute w-1 h-1 bg-teal-500/30 rounded-full"
                initial={{ 
                    x: Math.random() * 800 - 400, 
                    y: Math.random() * 400 - 200, 
                    opacity: 0 
                }}
                animate={{ 
                    y: [null, Math.random() * -100], 
                    opacity: [0, 0.5, 0] 
                }}
                transition={{ 
                    duration: 5 + Math.random() * 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: Math.random() * 5
                }}
             />
         ))}
      </div>

      {/* 3D Tilt Container */}
      <TiltCard className="w-full max-w-[850px]">
        
        {/* Main Dashboard Container */}
        <div className="relative bg-[#050609] border border-white/10 rounded-2xl p-4 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden font-sans antialiased backface-hidden transform-gpu translate-z-0">
            
            {/* Continuous Sheen Effect - The "Soothing Scan" */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent skew-x-12 pointer-events-none z-20"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            />

            {/* Header Section */}
            <div className="relative z-10 flex items-start justify-between mb-6 md:mb-8">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20 bg-gradient-to-br from-pink-400 to-rose-500 p-0.5 shadow-lg">
                         <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh&backgroundColor=ffdfbf" alt="User" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                        <h3 className="text-white text-lg md:text-xl font-bold tracking-tight mb-0.5 drop-shadow-md">Hello Ramesh</h3>
                        <p className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wide">We hope you're having a great today.</p>
                    </div>
                </div>
                
                {/* Date Filter */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#1A1F2E] border border-white/10 rounded-lg text-white text-[10px] md:text-xs font-bold cursor-pointer hover:bg-[#252b3d] transition-colors shadow-lg hover:border-white/20 group"
                >
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 text-slate-300 group-hover:text-teal-400 transition-colors" strokeWidth={2.5} />
                    <span>This Month</span>
                    <ChevronDown className="w-3 h-3 md:w-3.5 md:h-3.5 ml-1.5 text-slate-300" strokeWidth={2.5} />
                </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                <StatCard 
                    icon={TrendingUp} 
                    iconColor="text-blue-400" 
                    iconBg="bg-blue-500/10" 
                    label="Total Revenue" 
                    value="$59,158" 
                    badge="+15%" 
                    badgeColor="text-emerald-400 bg-emerald-500/10"
                    delay={0.1}
                />
                <StatCard 
                    icon={Users} 
                    iconColor="text-purple-400" 
                    iconBg="bg-purple-500/10" 
                    label="Total Clients" 
                    value="2,984" 
                    badge="+11%" 
                    badgeColor="text-emerald-400 bg-emerald-500/10"
                    delay={0.2}
                />
                <StatCard 
                    icon={Shield} 
                    iconColor="text-cyan-400" 
                    iconBg="bg-cyan-500/10" 
                    label="Total IB" 
                    value="698" 
                    badge="-5%" 
                    badgeColor="text-rose-400 bg-rose-500/10"
                    delay={0.3}
                />
                <StatCard 
                    icon={BarChart3} 
                    iconColor="text-pink-400" 
                    iconBg="bg-pink-500/10" 
                    label="Trading Acc" 
                    value="3658" 
                    badge="+15%" 
                    badgeColor="text-emerald-400 bg-emerald-500/10"
                    delay={0.4}
                />
            </div>

            {/* Chart Section */}
            <div className="relative z-10 bg-[#0B0E14] rounded-xl p-4 md:p-6 border border-white/5 relative shadow-inner overflow-hidden">
                
                {/* Subtle Background Grid Pulse */}
                <motion.div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(20,184,166,0.05),transparent_50%)]"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Y-Axis Labels - High Contrast */}
                <div className="absolute left-3 md:left-6 top-6 bottom-12 flex flex-col justify-between text-[8px] md:text-[10px] text-slate-500 font-bold font-mono">
                    <span>100k</span>
                    <span>10k</span>
                    <span>5k</span>
                    <span>0</span>
                </div>

                {/* Grid Lines */}
                <div className="absolute left-10 md:left-16 right-4 md:right-6 top-6 bottom-12 flex flex-col justify-between opacity-20">
                    <div className="w-full h-[1px] bg-slate-500 border-t border-dashed" />
                    <div className="w-full h-[1px] bg-slate-500 border-t border-dashed" />
                    <div className="w-full h-[1px] bg-slate-500 border-t border-dashed" />
                    <div className="w-full h-[1px] bg-slate-500 border-t border-dashed" />
                </div>

                {/* Chart Area */}
                <div className="ml-8 md:ml-10 h-32 md:h-40 relative">
                     <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 160">
                        <defs>
                            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                            </linearGradient>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                        </defs>
                        
                        {/* Area Fill - Synchronized Breathing */}
                        <motion.path
                            fill="url(#chartGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1, 
                                d: [
                                    "M0,120 C40,120 70,140 100,120 C140,90 170,100 210,70 C250,40 280,50 320,30 C360,10 380,20 400,10 L400,160 L0,160 Z",
                                    "M0,120 C40,115 70,135 100,115 C140,85 170,95 210,65 C250,35 280,45 320,25 C360,5 380,15 400,5 L400,160 L0,160 Z",
                                    "M0,120 C40,120 70,140 100,120 C140,90 170,100 210,70 C250,40 280,50 320,30 C360,10 380,20 400,10 L400,160 L0,160 Z"
                                ]
                            }}
                            transition={{ 
                                opacity: { duration: 1, delay: 0.5 },
                                d: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                        {/* Line Path with Glow - Synchronized */}
                        <motion.path
                            fill="none"
                            stroke="#14B8A6"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            filter="url(#glow)"
                            initial={{ pathLength: 0 }}
                            animate={{ 
                                pathLength: 1,
                                d: [
                                    "M0,120 C40,120 70,140 100,120 C140,90 170,100 210,70 C250,40 280,50 320,30 C360,10 380,20 400,10",
                                    "M0,120 C40,115 70,135 100,115 C140,85 170,95 210,65 C250,35 280,45 320,25 C360,5 380,15 400,5",
                                    "M0,120 C40,120 70,140 100,120 C140,90 170,100 210,70 C250,40 280,50 320,30 C360,10 380,20 400,10"
                                ]
                            }}
                            transition={{ 
                                pathLength: { duration: 2, ease: "easeOut", delay: 0.5 },
                                d: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />

                         {/* Pulsing Data Points */}
                         {[
                            { cx: 100, cy: [120, 115, 120] },
                            { cx: 210, cy: [70, 65, 70] },
                            { cx: 320, cy: [30, 25, 30] },
                         ].map((point, i) => (
                             <g key={i}>
                                {/* Node */}
                                <motion.circle
                                    cx={point.cx}
                                    cy={point.cy[0]}
                                    r="3"
                                    fill="#0B0E14"
                                    stroke="#14B8A6"
                                    strokeWidth="2"
                                    animate={{ 
                                        cy: point.cy,
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                {/* Radar Pulse */}
                                <motion.circle
                                    cx={point.cx}
                                    cy={point.cy[0]}
                                    r="8"
                                    fill="#14B8A6"
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        cy: point.cy,
                                        opacity: [0, 0.2, 0],
                                        scale: [1, 1.8, 1]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: i * 0.7
                                    }}
                                />
                             </g>
                         ))}

                        {/* Animated End Point */}
                        <motion.circle
                            cx="400"
                            cy="10"
                            r="4"
                            fill="#0B0E14"
                            stroke="#14B8A6"
                            strokeWidth="2"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ 
                                scale: 1, 
                                opacity: 1,
                                cy: [10, 5, 10]
                            }}
                            transition={{ 
                                scale: { delay: 2.5, duration: 0.3 },
                                cy: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                         <motion.circle
                            cx="400"
                            cy="10"
                            r="12"
                            fill="#14B8A6"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: [0, 0.4, 0],
                                scale: [1, 1.5, 0.5],
                                cy: [10, 5, 10]
                            }}
                            transition={{ 
                                opacity: { delay: 2.5, duration: 2, repeat: Infinity },
                                scale: { delay: 2.5, duration: 2, repeat: Infinity },
                                cy: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                            }}
                        />
                     </svg>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between mt-4 px-1 ml-8 md:ml-10 text-[8px] md:text-[10px] text-slate-500 font-bold font-mono">
                    {['Sat', 'Sun', 'Mon', 'Tus', 'Wen', 'The', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <span key={i}>{day}</span>
                    ))}
                </div>
            </div>

            {/* Decorative Top Left Window Controls */}
            <div className="absolute top-4 left-4 md:top-5 md:left-5 hidden md:flex gap-2 opacity-80">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-red-500/30 shadow-[0_0_8px_rgba(255,95,87,0.4)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-yellow-500/30 shadow-[0_0_8px_rgba(254,188,46,0.4)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-green-500/30 shadow-[0_0_8px_rgba(40,200,64,0.4)]" />
            </div>

        </div>
      </TiltCard>
    </div>
  );
};

const StatCard = ({ icon: Icon, iconColor, iconBg, label, value, badge, badgeColor, delay }: any) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.03)" }}
        className="bg-[#10131A] rounded-xl p-3 md:p-4 border border-white/5 transition-colors group cursor-default shadow-lg backdrop-blur-sm relative overflow-hidden"
    >
        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center mb-2 md:mb-3 ring-1 ring-inset ring-white/5`}>
            <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={2.5} />
        </div>
        <div className="text-slate-400 text-[8px] md:text-[10px] mb-0.5 md:mb-1 font-bold tracking-wide uppercase opacity-90">{label}</div>
        <div className="flex items-end justify-between gap-2">
            <div className="text-white text-base md:text-lg font-bold tracking-tight">{value}</div>
            <div className={`text-[8px] md:text-[10px] px-1.5 py-0.5 rounded-md font-bold ${badgeColor} ring-1 ring-inset ring-white/5`}>
                {badge}
            </div>
        </div>
    </motion.div>
);