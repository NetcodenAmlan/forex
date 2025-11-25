import React from 'react';
import { TiltCard } from './ui/TiltCard';

const audienceData = [
    { title: "Stuck with slow CRMs", desc: "Immediate upgrade to a modern, fast ecosystem." },
    { title: "Losing clients?", desc: "Traders leave when onboarding is slow. We stop that." },
    { title: "Fear the downtime", desc: "Eliminated with our Zero Downtime Guarantee." },
    { title: "Ready to scale", desc: "If you're planning expansion, current CRM may choke." },
    { title: "High fees, low tech", desc: "Reduce cost and increase capability." },
    { title: "Slow support", desc: "If it takes 48 hours to get a reply… switch to us." },
    { title: "Trapped with vendor", desc: "Bad service? Hidden costs? We open the door." },
    { title: "Not just software", desc: "Get engineers + onboarding specialists + success managers." },
    { title: "Avoid risky migrations", desc: "A safe, structured, audited migration path." },
    { title: "Hands-off migration", desc: "A 'done-for-you' migration where we handle everything." }
];

const TargetAudience: React.FC = () => {
  return (
    <section className="py-40 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10">
             <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter">
                Perfect For <br/> Brokers Who...
            </h2>
            <p className="text-zinc-500 text-lg mt-6 md:mt-0">10 Reasons to Switch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {audienceData.map((item, i) => (
                <TiltCard key={i} className={`h-full ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}>
                    <div className="h-full p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] shadow-xl hover:bg-[#111] transition-colors">
                        <span className="text-teal-500 font-mono text-xs mb-4 block tracking-widest">0{i+1}</span>
                        <h3 className="text-xl md:text-2xl font-medium text-white mb-4">{item.title}</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed font-light opacity-80">
                            {item.desc}
                        </p>
                    </div>
                </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;