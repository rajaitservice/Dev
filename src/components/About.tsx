
import { Check } from 'lucide-react';

const About = () => {
  const benefits = [
    'Expert team with 10+ years of industry experience',
    'Certified Splunk architects and data engineers',
    'End-to-end implementation and support',
    'Custom solutions tailored to your business needs',
    'Proven track record with enterprise clients',
    'Ongoing training and knowledge transfer'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">Raja IT Service</span>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              We are a specialized IT consulting firm focused on helping organizations harness the power of their data through expert Splunk implementation and cutting-edge Data Engineering solutions.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Our team of certified professionals brings years of experience across industries, delivering tailored solutions that drive operational efficiency and uncover valuable business insights.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-brand-blue rounded-full p-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-3xl transform -rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Team Collaboration" 
                className="rounded-3xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
