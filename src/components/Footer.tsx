
import React from 'react';
import { Leaf, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-fairgreen mr-2" />
              <span className="text-xl font-bold">FairChain</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming agricultural supply chains with transparency, fairness, and AI-driven insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-fairgreen transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-fairgreen transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-fairgreen transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-fairgreen transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-fairgreen transition-colors">Features</a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-fairgreen transition-colors">Our Solution</a>
              </li>
              <li>
                <a href="#technology" className="text-gray-400 hover:text-fairgreen transition-colors">Technology</a>
              </li>
              <li>
                <a href="#impact" className="text-gray-400 hover:text-fairgreen transition-colors">Impact</a>
              </li>
            </ul>
          </div>

          {/* For Stakeholders */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Stakeholders</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-fairgreen transition-colors">For Farmers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-fairgreen transition-colors">For Intermediaries</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-fairgreen transition-colors">For Consumers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-fairgreen transition-colors">Partner With Us</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: badalkrdev+fairchain@gmail.com</li>
              <li>Phone: 7004559534 </li>
              <li>Address: Boring Road Patna , 800001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FairChain. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-fairgreen text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-fairgreen text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-fairgreen text-sm transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
