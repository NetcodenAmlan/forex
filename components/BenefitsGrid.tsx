import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { LayoutGrid, LifeBuoy, Zap, Users, Shield, MousePointer2 } from 'lucide-react';

const BenefitsGrid: React.FC = () => {
  return (
    <section className="bg-black py-32 px-6">
        <div className="max-w-7xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
                Why Brokers Switch.
            </h2>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            <BenefitCard 
                icon={LayoutGrid} 
                title="Functionality" 
                desc="Tired of paying high fees for outdated tech? SmartSwitch™ increases capability while reducing costs."
                className="md:col-span-2"
            />
            <BenefitCard 
                icon={LifeBuoy} 
                title="Support" 
                desc="If it takes 48 hours to get a reply, you’re a perfect match for our 24/7 support."
            />
            <BenefitCard 
                icon={Zap} 
                title="Innovation" 
                desc="Feel trapped? SmartSwitch™ opens the door to rapid innovation."
            />
            <BenefitCard 
                icon={Users} 
                title="Full Team" 
                desc="You get engineers + onboarding specialists + success managers."
                className="md:col-span-2"
            />
            <BenefitCard 
                icon={Shield} 
                title="Security" 
                desc="A safe, structured, audited migration path for your core infrastructure."
                className="md:col-span-2"
            />
            <BenefitCard 
                icon={MousePointer2} 
                title="Hands-Off" 
                desc="A “done-for-you” migration where we handle everything."
            />
        </div>
    </section>
  );
};

const BenefitCard = ({ icon: Icon, title, desc, className = "" }: any) => (
    <SpotlightCard className={`p-8 md:p-12 ${className}`}>
        <Icon className="w-8 h-8 text-white mb-6" strokeWidth={1.5} />
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
    </SpotlightCard>
);

export default BenefitsGrid;