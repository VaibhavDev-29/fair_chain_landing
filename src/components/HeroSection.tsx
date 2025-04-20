
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-fairgreen/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-fairblue/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="px-4 py-1 bg-gradient-to-r from-fairgreen/20 to-fairgreen/10 text-fairgreen rounded-full text-sm font-medium mb-6 inline-block animate-fade-down opacity-0 [animation-delay:0.1s] [animation-fill-mode:forwards]">
            Hackathon Project 2025
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-down opacity-0 [animation-delay:0.2s] [animation-fill-mode:forwards]">
            <span className="text-white">Reimagining Agriculture</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fairgreen via-amber to-fairblue">with Fair Chain</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-up opacity-0 [animation-delay:0.4s] [animation-fill-mode:forwards]">
            A revolutionary concept connecting farmers, intermediaries, and consumers through an AI-powered marketplace 
            designed to ensure fair prices and transparent supply chains.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 [animation-delay:0.6s] [animation-fill-mode:forwards]">
            {/* <Button size="lg" className="bg-gradient-to-r from-fairgreen to-fairgreen/80 hover:from-fairgreen/90 hover:to-fairgreen/70 text-white px-8">
              View Demo
            </Button> */}
            <Button size="lg" variant="outline" className="border-fairblue text-fairblue hover:bg-fairblue/10">
          <Link to={"https://github.com/badalkr2004/fair-chain"}>
              GitHub Repo
          </Link>
            </Button>
          </div>
          
          <div className="mt-16 animate-fade-in opacity-0 [animation-delay:1s] [animation-fill-mode:forwards]">
            <button 
              onClick={scrollToFeatures}
              className="text-gray-400 hover:text-fairgreen transition-colors flex flex-col items-center"
            >
              <span className="mb-2">Explore Features</span>
              <ArrowDown className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJWMGgydjM0em0tNCAwSDE4VjBoMnYzNHptLTQgMEgxNFYwaDJ2MzR6bS00IDBIMTBWMGgydjM0em0tNCAwSDZWMGgydjM0em0tNCAwSDJWMGgydjM0eiIvPjwvZz48L2c+PC9zdmc+')] opacity-5 z-0"></div>
    </section>
  );
};

export default HeroSection;
