import React from 'react';
import { ArrowRight } from 'lucide-react';

const FooterCTA: React.FC = () => {
  return (
    <footer className="py-40 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        
        <h2 className="text-[12vw] leading-[0.8] font-bold text-white/5 tracking-tighter select-none pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            SMARTSWITCH
        </h2>

        <div className="relative mt-20">
             <h3 className="text-5xl md:text-7xl font-bold text-white mb-12 tracking-tighter">
                Don’t Let Your CRM <br/> Hold You Back.
            </h3>
            
            <p className="text-2xl text-zinc-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
                Join <span className="text-white">SmartSwitch™</span>. The industry’s fastest onboarding program.
            </p>

            <button className="group relative px-12 py-6 bg-white text-black font-bold rounded-full text-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center gap-4">
                    Book Your Free Demo Now
                    <ArrowRight className="w-6 h-6" />
                </div>
            </button>
        </div>
        
        <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-sm uppercase tracking-widest font-mono">
            <p>© 2025 SmartSwitch™ by ForexCRM</p>
            <p>Move Smart. Trade Smarter.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;