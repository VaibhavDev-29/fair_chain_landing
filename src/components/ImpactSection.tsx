
import React from 'react';

const ImpactSection = () => {
  const impactMetrics = [
    { number: "60%", description: "More income for farmers compared to traditional channels" },
    { number: "40%", description: "Reduction in food waste through better demand forecasting" },
    { number: "90%", description: "End-to-end transparency in the agricultural supply chain" },
    { number: "10k+", description: "Farmers empowered across the agricultural ecosystem" },
  ];

  return (
    <section id="impact" className="section-padding bg-fairgreen text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-fairgreen to-fairgreen-700 opacity-90 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-64 h-64 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-white/90">
            FairChain is creating a more equitable and sustainable agricultural ecosystem for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover-scale">
              <div className="text-4xl font-bold mb-2">{metric.number}</div>
              <p className="text-white/90">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Join Us in Transforming Agriculture</h3>
          <p className="mb-8 text-white/90">
            Whether you're a farmer looking for fair prices, a business seeking transparent sourcing, or a consumer who cares about where your food comes from – FairChain is for you.
          </p>
          {/* <button className="px-8 py-3 bg-white text-fairgreen font-semibold rounded-full hover:bg-white/90 transition-colors">
            Become Part of FairChain
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
