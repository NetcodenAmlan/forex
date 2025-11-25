import React from 'react';

const FeatureTable: React.FC = () => {
  const features = [
    { label: "72-Hour Migration", value: "Be live in just 3 days" },
    { label: "Zero Downtime", value: "Trade without interruption" },
    { label: "Custom Branding", value: "Your system, your design" },
    { label: "RMS Settings", value: "Advanced risk controls" },
    { label: "Multi-Level IB", value: "Maximize partnerships" },
    { label: "MAMM / PAMM", value: "Attract pro traders" },
    { label: "Prop Trading", value: "Boost retention" },
    { label: "VOIP & Expense", value: "Smart analytics" },
    { label: "AI Marketing", value: "Automated insights" },
    { label: "Advanced Reports", value: "Grow confidently" },
    { label: "Team Training", value: "Full speed Day 1" },
  ];

  return (
    <section className="py-40 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-between mb-20 border-b border-white/10 pb-6">
            <h2 className="text-2xl font-mono text-zinc-500 uppercase tracking-widest">
                System Specifications
            </h2>
            <span className="text-teal-500 font-mono">v.2026.1</span>
        </div>

        <div className="grid grid-cols-1">
            {features.map((f, i) => (
                <div key={i} className="group grid md:grid-cols-[1fr_1fr] py-8 border-b border-white/5 hover:bg-white/[0.02] transition-colors px-4">
                    <span className="text-2xl font-medium text-white tracking-tight group-hover:text-teal-400 transition-colors">
                        {f.label}
                    </span>
                    <span className="text-lg text-zinc-500 font-light md:text-right font-mono">
                        {f.value}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;