import React from 'react';
import { 
  Globe, 
  Code, 
  Network, 
  Shield, 
  GraduationCap, 
  Headphones, 
  Cloud 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, items, index }) => {
  return (
    <div 
      className="group bg-white hover:bg-navy-900 shadow-lg hover:shadow-xl rounded-xl p-6 transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-electric-blue"
      data-aos="fade-up"
      data-aos-delay={100 * index}
    >
      <div className="flex flex-col h-full">
        <div className="p-3 rounded-xl bg-electric-blue/10 w-fit mb-4 group-hover:bg-electric-blue/20 transition-all duration-300">
          <div className="text-electric-blue w-6 h-6">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-navy-900 group-hover:text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-300 mb-4 transition-colors duration-300">{description}</p>
        
        <ul className="mt-auto space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-electric-blue">•</span>
              <span className="text-gray-700 group-hover:text-gray-200 transition-colors duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: 'Web Development',
      description: 'Custom websites tailored to your business needs.',
      items: ['Corporate, School, NGO websites', 'E-commerce platform development']
    },
    {
      icon: <Code className="w-full h-full" />,
      title: 'Software Development',
      description: 'Bespoke solutions for your unique challenges.',
      items: ['Custom apps and solutions', 'Android & iOS mobile apps']
    },
    {
      icon: <Network className="w-full h-full" />,
      title: 'Networking & Infrastructure',
      description: 'Robust network architecture for your business.',
      items: ['LAN/WAN setup', 'IT architecture design']
    },
    {
      icon: <Shield className="w-full h-full" />,
      title: 'Cybersecurity Services',
      description: 'Protect your valuable digital assets.',
      items: ['Data & Network security', 'Firewalls and system protection']
    },
    {
      icon: <GraduationCap className="w-full h-full" />,
      title: 'ICT Training & Capacity Building',
      description: 'Empower your team with digital skills.',
      items: ['Staff, students, freelancers', 'Digital literacy, bootcamps']
    },
    {
      icon: <Headphones className="w-full h-full" />,
      title: 'IT Consultancy & Support',
      description: '24/7 technical assistance and guidance.',
      items: ['Device/software advisory', '24/7 client tech support']
    },
    {
      icon: <Cloud className="w-full h-full" />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for your growing business.',
      items: ['Data storage & cloud computing', 'Migration & cloud management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400 opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our <span className="text-electric-blue">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive ICT solutions designed to elevate your business and drive digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              items={service.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;