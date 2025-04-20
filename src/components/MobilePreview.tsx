
import React from 'react';
import { Smartphone, ArrowRight, Users, ChartLine, ShoppingCart, Tractor } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const MobilePreview = () => {
  return (
    <section id="mobile-preview" className="section-padding bg-gray-900 relative overflow-hidden py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-fairblue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-fairgreen/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1 bg-fairblue/10 text-fairblue rounded-full text-sm font-medium mb-4 inline-block">
            Mobile Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">FairChain in Your Pocket</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our intuitive mobile application provides personalized experiences for farmers, intermediaries, and consumers, 
            offering real-time insights, market data, and seamless interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
          <div className="flex justify-center  ">
              <img src="/images/mob.png" alt="" />
          </div>

       
          <div className="flex justify-center">
            <img src="/images/mob2.png" alt="" />
          </div>

         
        </div>

        <div className="text-center mt-12">
          {/* <button className="inline-flex items-center px-6 py-3 bg-fairblue hover:bg-fairblue-600 text-white rounded-full transition-colors">
            Explore Mobile App <ArrowRight className="ml-2 w-4 h-4" />
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;

