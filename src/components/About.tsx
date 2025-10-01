
import { Check } from 'lucide-react';

const About = () => {
  const benefits = [
    'Expert team with 10+ years of Splunk consulting experience',
    'Certified Splunk Core Consultants and Architects',
    'End-to-end Splunk services: design, deployment, and optimization',
    'Integration with Enterprise Security and User Behavior Analytics (UBA)',
    'Proven success stories with enterprise Splunk clients',
    'Ongoing enablement, training, and knowledge transfer'
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
              We are a specialized IT consulting firm dedicated to empowering organizations with expert Splunk implementation, optimization, and support. Our focus is on helping businesses unlock the full potential of Splunk to improve visibility, security, and operational efficiency.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              With years of proven experience, our certified Splunk professionals deliver solutions tailored to your organization’s unique needs — whether on Splunk Enterprise or Splunk Cloud.
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
                src="/Dev/images/desk.avif" 
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
