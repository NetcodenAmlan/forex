import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-40 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
            <div>
                 <p className="text-3xl md:text-5xl font-medium text-white leading-tight mb-10 tracking-tight">
                    “We moved to SmartSwitch™ in 72 hours — and it felt like teleporting into the future.”
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                        <div className="text-white font-bold">Artem K.</div>
                        <div className="text-zinc-500">CEO</div>
                    </div>
                </div>
            </div>
            <div>
                 <p className="text-3xl md:text-5xl font-medium text-white leading-tight mb-10 tracking-tight">
                    “I was scared to migrate. SmartSwitch™ made it effortless. Not a single issue.”
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800" />
                    <div>
                        <div className="text-white font-bold">Daniel R.</div>
                        <div className="text-zinc-500">UAE Founder</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;