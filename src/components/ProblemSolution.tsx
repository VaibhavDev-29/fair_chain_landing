
import React from 'react';
import { ChartLine, Users, Package } from 'lucide-react';

const ProblemSolution = () => {
  return (
    <section id="solution" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Problem & Our Solution</h2>
          <p className="text-gray-600 text-center">
            The agricultural supply chain faces significant challenges that impact farmers, intermediaries, and consumers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Problem Section */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-4">The Problem</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-red-100 rounded-full w-8 h-8 text-red-600 mr-3 mt-1 flex-shrink-0">
                    1
                  </span>
                  <p className="text-gray-700">
                    <strong>Unfair Profit Distribution:</strong> Farmers often receive minimal returns for their produce while middlemen capture most profits.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-red-100 rounded-full w-8 h-8 text-red-600 mr-3 mt-1 flex-shrink-0">
                    2
                  </span>
                  <p className="text-gray-700">
                    <strong>Lack of Transparency:</strong> Consumers pay high prices without knowing the origin or value chain of their food.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center bg-red-100 rounded-full w-8 h-8 text-red-600 mr-3 mt-1 flex-shrink-0">
                    3
                  </span>
                  <p className="text-gray-700">
                    <strong>Information Asymmetry:</strong> Farmers lack market demand insights for better crop planning and pricing.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution Section */}
          <div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold text-fairgreen mb-4">Our Solution</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center bg-fairgreen/10 rounded-full w-10 h-10 text-fairgreen mr-3 mt-1 flex-shrink-0">
                    <ChartLine className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700">
                    <strong>AI-Driven Demand Forecasting:</strong> Leveraging ML models to predict market trends and help farmers plan better.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center bg-fairblue/10 rounded-full w-10 h-10 text-fairblue mr-3 mt-1 flex-shrink-0">
                    <Package className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700">
                    <strong>End-to-End Traceability:</strong> Complete visibility from farm to table with digital tracking and verification.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="inline-flex items-center justify-center bg-amber/10 rounded-full w-10 h-10 text-amber mr-3 mt-1 flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <p className="text-gray-700">
                    <strong>Fair Profit Distribution:</strong> Smart contract rules ensure equitable profit splits among all stakeholders.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
