
import React from 'react';
import { Smartphone, ChartLine, Database, Globe, Layers } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const TechIcon = ({ icon: Icon, label, color }: { 
  icon: React.ElementType; 
  label: string; 
  color: string;
}) => {
  return (
    <div className={`flex flex-col items-center p-3`}>
      <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center mb-2`}>
        <Icon className={`w-6 h-6 text-${color}`} />
      </div>
      <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
  );
};

const TechnologyCard = ({ title, description, items, color }: { 
  title: string;
  description: string;
  items: { name: string; description: string }[]; 
  color: string;
}) => {
  return (
    <div className={`glass-card p-6 rounded-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700 hover:border-${color} h-full`}>
      <h3 className={`text-xl font-bold mb-2 text-${color}`}>{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex flex-col">
            <span className="font-medium text-white">{item.name}</span>
            <span className="text-sm text-gray-400">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TechnologyStack = () => {
  const technologies = {
    mobile: {
      description: "Responsive interfaces for mobile platforms with seamless user experience",
      items: [
        { name: "React Native", description: "Cross-platform mobile app for farmers, intermediaries, and consumers" },
        { name: "Expo", description: "for builiding the robust react native apps" },
        { name: "TypeScript", description: "Type-safe development for reliable and maintainable code" },
        { name: "Native Wind", description: "Utility-first styling for consistent UI components like tailwind" },
        { name: "Glustack UI", description: "A UI library for the native components like shadcn" },
        
      ]
    },
    WebApplication: {
      description: "Responsive interfaces for mobile platforms with seamless user experience",
      items: [
        { name: "React ", description: "UI for farmers, intermediaries, and consumers" },
        { name: "Tailwind", description: "Utility-first styling for consistent UI components" },
        { name: "TypeScript", description: "Type-safe development for reliable and maintainable code" },
        { name: "Nexjs", description: "For the web interfaces." },
        { name: "Shadcn", description: "A UI library for the reusable components" },
        { name: "recharts", description: "For building interactive charts." },
        
      ]
    },
    backend: {
      description: "Robust server architecture to handle complex supply chain operations and data processing",
      items: [
        { name: "Node.js", description: "Scalable runtime for handling concurrent marketplace transactions" },
        { name: "Express", description: "Backend framework which helps us to build robust api endpoints" },
        { name: "Prisma", description: "Object realtional mapper for the postgress implemetation" },
        { name: "Postgres", description: "Efficient data storage using neondb" },
        { name: "JWT", description: "Auth implementation with jsonwebtoken" },
        { name: "RESTful APIs", description: "Standardized endpoints for third-party integrations" }
      ]
    },
    aiml: {
      description: "Advanced algorithms for predictive analytics and market intelligence",
      items: [
        { name: "Prophet", description: "Time series forecasting for agricultural market trends" },
        { name: "LSTM", description: "Deep learning models for complex seasonal pattern recognition" },
        { name: "XGBoost", description: "Gradient boosting for price prediction with multiple variables" },
        { name: "TensorFlow", description: "Machine learning framework for image recognition of produce quality" }
      ]
    },
    infrastructure: {
      description: "Scalable cloud infrastructure with continuous deployment and monitoring",
      items: [
        { name: "Docker", description: "Containerization for consistent environments across deployment" },
        { name: "Railway", description: "Plaform for hosting the apis" },
        { name: "Vercel", description: "Plaform for hosting the frontend" },
        { name: "Expo Eas", description: "For building the android or ios artifacts(APK)" },

      ]
    }
  };

  return (
    <section id="technology" className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-fairgreen/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-fairblue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="px-4 py-1 bg-fairblue/10 text-fairblue rounded-full text-sm font-medium mb-4 inline-block">
            Our Tech
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Powered by Advanced Technology</h2>
          <p className="text-gray-400">
            We've built FairChain on a foundation of cutting-edge technologies to ensure scalability,
            security, and intelligence across the agricultural supply chain.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <TechIcon icon={Smartphone} label="Mobile & Web" color="fairgreen" />
          <TechIcon icon={Database} label="Databases" color="fairblue" />
          <TechIcon icon={ChartLine} label="AI/ML Models" color="amber" />
          <TechIcon icon={Globe} label="Cloud Services" color="fairgreen" />
          <TechIcon icon={Layers} label="DevOps" color="fairblue" />
        </div>

        <Separator className="bg-gray-800 my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechnologyCard 
            title="Mobile Technologies" 
            description={technologies.mobile.description}
            items={technologies.mobile.items} 
            color="fairgreen" 
          />
          <TechnologyCard 
            title="Backend Services" 
            description={technologies.backend.description}
            items={technologies.backend.items} 
            color="fairblue" 
          />
          <TechnologyCard 
            title="Web Application" 
            description={technologies.WebApplication.description}
            items={technologies.WebApplication.items} 
            color="amber" 
          />
          <TechnologyCard 
            title="AI/ML Models" 
            description={technologies.aiml.description}
            items={technologies.aiml.items} 
            color="fairgreen" 
          />
          <TechnologyCard 
            title="Infrastructure & DevOps" 
            description={technologies.infrastructure.description}
            items={technologies.infrastructure.items} 
            color="fairblue" 
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
