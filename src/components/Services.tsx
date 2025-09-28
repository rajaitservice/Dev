
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
      description: 'Expert deployment and configuration of Splunk for real-time monitoring, troubleshooting, and data visualization.',
      icon: <Search className="h-7 w-7" />
    },
    {
      title: 'Splunk Optimization',
      description: 'Fine-tune your Splunk environment for peak performance, scalability, and cost efficiency.',
      icon: <Settings className="h-7 w-7" />
    },
    {
      title: 'Data Pipeline Development',
      description: 'Build robust ETL processes and data pipelines that transform raw data into valuable business assets.',
      icon: <Database className="h-7 w-7" />
    },
    {
      title: 'Big Data Solutions',
      description: 'Implement scalable big data architectures using modern technologies like Hadoop, Spark, and cloud-native solutions.',
      icon: <Server className="h-7 w-7" />
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics, machine learning, and visualization.',
      icon: <LineChart className="h-7 w-7" />
    },
    {
      title: 'Custom Integration',
      description: 'Seamlessly connect your data sources and systems with tailored integration solutions and APIs.',
      icon: <Code className="h-7 w-7" />
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive consulting services focused on Splunk implementation and Data Engineering to help your business leverage the full potential of your data assets.
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
