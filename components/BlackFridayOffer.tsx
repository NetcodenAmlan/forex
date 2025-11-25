import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const BlackFridayOffer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const glowX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <section className="py-40 px-6 overflow-hidden flex justify-center perspective-1000">
      <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-[1000px]"
      >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 rounded-[3.2rem] blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" style={{ transform: "translateZ(-50px)" }} />
            
            <div className="relative bg-[#050505] rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/10 shadow-2xl group preserve-3d">
                
                {/* Auto Shimmer */}
                <div className="absolute inset-0 translate-x-[-100%] animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none z-0" />

                {/* Dynamic Background Sheen */}
                <motion.div 
                    className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                        background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.2), transparent 50%)`,
                        transform: "translateZ(0px)"
                    }}
                />

                <div className="relative z-10" style={{ transform: "translateZ(80px)" }}>
                    <div className="text-center mb-16">
                        <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-yellow-500 mb-8 cursor-pointer"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-bold uppercase tracking-wider">Limited Slots Only</span>
                        </motion.div>
                        
                        <h2 className="text-5xl md:text-9xl font-bold text-white tracking-tighter mb-8 drop-shadow-2xl">
                            50% OFF
                        </h2>
                        <p className="text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
                            Full SmartSwitch™ program at half the cost. <br/>
                            Leap ahead before 2026 begins.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
                        {[
                            "50% OFF Setup Fee", 
                            "Free $1,000 Migration Audit", 
                            "24/7 Post-Migration Support", 
                            "Priority Slot Allocation"
                        ].map((offer, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors cursor-default"
                                style={{ transform: "translateZ(40px)" }}
                            >
                                <div className="bg-teal-500/20 p-2 rounded-full">
                                    <Check className="w-5 h-5 text-teal-400" />
                                </div>
                                <span className="text-lg text-white">{offer}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full md:w-auto px-16 py-6 bg-white text-black font-bold text-xl rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-shadow duration-300 relative overflow-hidden"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <span className="relative z-10">Claim Your Slot Now</span>
                            <div className="absolute inset-0 bg-zinc-200 translate-y-full hover:translate-y-0 transition-transform duration-300 z-0" />
                        </motion.button>
                        <p className="text-zinc-600 mt-6 text-sm">Only 10 slots available.</p>
                    </div>
                </div>
            </div>
      </motion.div>
    </section>
  );
};

export default BlackFridayOffer;