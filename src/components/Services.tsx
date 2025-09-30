
import { Database, LineChart, Code, Settings, Server, Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all group bg-white">
      <CardHeader>
        <div className="h-14 w-14 rounded-lg bg-brand-light flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors">
          <div className="text-brand-blue group-hover:text-white transition-colors">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Splunk Implementation',
      description: 'Seamless deployment and configuration of Splunk Enterprise and Splunk Cloud for real-time monitoring, troubleshooting, and powerful data visualization.',
      icon: <Search className="h-7 w-7" />
    },
    {
      title: 'Splunk Optimization',
      description: 'Fine-tuning your Splunk environment for performance, scalability, and cost efficiency, ensuring your investment delivers maximum ROI.',
      icon: <Settings className="h-7 w-7" />
    },
    {
      title: 'Splunk Enterprise Security (ES) & UBA Integration',
      description: 'Enhance your security posture by implementing Splunk ES and Splunk UBA, enabling advanced threat detection, risk-based alerting, and behavioral analytics.',
      icon: <Database className="h-7 w-7" />
    },
    {
      title: 'Custom Data Onboarding',
      description: 'Expert onboarding of diverse data sources, CIM mapping, and data model acceleration to ensure clean, actionable insights.',
      icon: <Server className="h-7 w-7" />
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, machine learning, and visualization.',
      icon: <LineChart className="h-7 w-7" />
    },
    {
      title: 'Training & Knowledge Transfer',
      description: 'Empowering your team through hands-on enablement and training, ensuring long-term success with Splunk.',
      icon: <Code className="h-7 w-7" />
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end consulting services dedicated to Splunk — helping organizations maximize value from their machine data through expert implementation, optimization, and integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
