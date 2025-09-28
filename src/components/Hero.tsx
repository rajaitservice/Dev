
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-brand-light to-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-8 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Data Into <span className="text-gradient">Actionable Insights</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Expert IT consulting specializing in Splunk implementation and Data Engineering solutions to unlock the full potential of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Data Analytics Dashboard" 
                className="rounded-3xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
