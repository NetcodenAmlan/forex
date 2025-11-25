import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';

const Introduction: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const yPos = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <SectionWrapper className="py-40 relative z-20">
      <div ref={targetRef} className="max-w-[1200px] mx-auto px-6">
        
        <div className="mb-32">
            <motion.span 
                style={{ opacity: textOpacity }}
                className="block text-teal-500 font-mono text-sm tracking-[0.3em] uppercase mb-6"
            >
                The New Standard
            </motion.span>
            <motion.h2 
                style={{ opacity: textOpacity, y: yPos }}
                className="text-4xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tighter max-w-4xl"
            >
                Brokers everywhere are done with frustration. <span className="text-zinc-600">SmartSwitch™ ends that era — forever.</span>
            </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
            <div className="relative">
                 <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-500 to-transparent opacity-20" />
                 <div className="pl-10 py-4">
                     <p className="text-2xl text-zinc-300 font-light leading-relaxed">
                        It helps you switch without losing a single trade, client, or moment. No downtime. No data loss. No stress. Just a sleek, powerful system ready to grow your brokerage instantly.
                     </p>
                 </div>
            </div>
            <div className="space-y-8">
                <h3 className="text-xl font-medium text-white border-b border-white/10 pb-4">Perfect For:</h3>
                <ul className="space-y-6">
                    {["Brokers stuck with slow, outdated CRMs", "Teams struggling with inefficiency", "Businesses ready to scale fast before year-end"].map((item, i) => (
                        <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 text-lg text-zinc-400"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Introduction;