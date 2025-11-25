import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import TargetAudience from './components/TargetAudience';
import Stats from './components/Stats';
import BlackFridayOffer from './components/BlackFridayOffer';
import FeatureTable from './components/FeatureTable';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import { FluidBackground } from './components/ui/FluidBackground';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-teal-500 selection:text-black relative">
      <FluidBackground />
      <Hero />
      <Introduction />
      <Timeline />
      <TargetAudience />
      <Stats />
      <BlackFridayOffer />
      <FeatureTable />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;