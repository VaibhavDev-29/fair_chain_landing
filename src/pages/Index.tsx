
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSolution from '@/components/ProblemSolution';
import FeaturesSection from '@/components/FeaturesSection';
import TechnologyStack from '@/components/TechnologyStack';
import ImpactSection from '@/components/ImpactSection';
import Footer from '@/components/Footer';
import MobilePreview from '@/components/MobilePreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <TechnologyStack />
      <MobilePreview />
      <ImpactSection />
      <Footer />
    </div>
  );
};

export default Index;
