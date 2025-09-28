
import { Facebook, X, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-2xl font-bold text-gradient">Raja IT Service</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Innovating with curiosity, automating with purpose, delivering IT solutions that exceed expectations.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-brand-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="X" className="hover:text-brand-teal transition-colors">
                <X className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-brand-teal transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-brand-teal transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-brand-teal transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Raja IT Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
