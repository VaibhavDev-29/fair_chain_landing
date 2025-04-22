
import React from 'react';
import { Users, Leaf, ChartLine, Package, Database, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

const FeatureCard = ({ icon, title, description, gradient }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) => {
  return (
    <Card className={`p-6 rounded-xl hover:scale-105 transition-transform duration-300 bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-gray-700`}>
      <div className={`inline-flex items-center justify-center rounded-xl w-12 h-12 ${gradient} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-white" />,
      title: "Smart Farmer Dashboard",
      description: "Real-time market insights and AI-driven recommendations for optimal crop planning and pricing.",
      gradient: "bg-gradient-to-br from-fairgreen/30 to-fairgreen/10"
    },
    {
      icon: <ChartLine className="w-6 h-6 text-white" />,
      title: "AI Price Forecasting",
      description: "Advanced machine learning models predict market trends and demand patterns for better decision making.",
      gradient: "bg-gradient-to-br from-fairblue/30 to-fairblue/10"
    },
    {
      icon: <Package className="w-6 h-6 text-white" />,
      title: "Traceability",
      description: "Track produce journey from farm to consumer with our innovative digital passport system.",
      gradient: "bg-gradient-to-br from-amber/30 to-amber/10"
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Fair Profit Distribution",
      description: "Smart contract system ensures transparent and equitable profit sharing among stakeholders.",
      gradient: "bg-gradient-to-br from-fairgreen/30 to-fairgreen/10"
    },
    {
      icon: <Database className="w-6 h-6 text-white" />,
      title: "Secure Transactions",
      description: "JWT-powered authentication and PostgreSQL database ensure secure and reliable operations.",
      gradient: "bg-gradient-to-br from-fairblue/30 to-fairblue/10"
    },
    {
      icon: <Layers className="w-6 h-6 text-white" />,
      title: "Cross-Platform Access",
      description: "Seamless experience across web (Next.js) and mobile (React Native) platforms.",
      gradient: "bg-gradient-to-br from-amber/30 to-amber/10"
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-gray-900">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fairgreen/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fairblue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1 bg-gradient-to-r from-fairblue/20 to-fairblue/10 text-fairblue rounded-full text-sm font-medium mb-4 inline-block">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Innovative Technology Stack</h2>
          <p className="text-gray-400">
            Built with modern technologies to create a seamless, secure, and scalable agricultural marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
