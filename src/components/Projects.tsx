import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-Learning Platform for Katsina State University",
      description: "A comprehensive e-learning platform that enables students to access course materials, submit assignments, and interact with instructors online. The system includes video conferencing, automated grading, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS"],
      category: "Web Development",
      client: "Katsina State University",
      duration: "6 months",
      liveUrl: "https://elearning.ktsu.edu.ng",
      features: [
        "Real-time video conferencing",
        "Automated assignment submission and grading",
        "Progress tracking and analytics",
        "Mobile-responsive design",
        "Integration with existing university systems"
      ]
    },
    {
      title: "Inventory Management System for Alhaji Foods",
      description: "A custom inventory management solution that streamlines stock tracking, order processing, and supplier management. The system includes barcode scanning, automated reordering, and detailed reporting capabilities.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Python", "Django", "PostgreSQL", "React Native", "Docker"],
      category: "Software Development",
      client: "Alhaji Foods Ltd",
      duration: "4 months",
      liveUrl: "https://inventory.alhajifoods.com",
      features: [
        "Barcode scanning integration",
        "Real-time stock tracking",
        "Automated reordering system",
        "Supplier management portal",
        "Custom reporting dashboard"
      ]
    },
    {
      title: "Network Infrastructure for Katsina General Hospital",
      description: "A complete network infrastructure overhaul including secure WiFi, CCTV surveillance, and integrated communication systems. The project improved network reliability and security while reducing operational costs.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Cisco", "Ubiquiti", "Fortinet", "Windows Server", "VMware"],
      category: "Networking & Infrastructure",
      client: "Katsina General Hospital",
      duration: "3 months",
      features: [
        "Hospital-wide WiFi coverage",
        "CCTV surveillance system",
        "Secure network segmentation",
        "Backup power systems",
        "24/7 monitoring and support"
      ]
    },
    {
      title: "E-Commerce Platform for Northern Crafts",
      description: "A modern e-commerce platform for traditional crafts and products, featuring secure payment processing, inventory management, and a user-friendly interface for both customers and vendors.",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "Web Development",
      client: "Northern Crafts Cooperative",
      duration: "5 months",
      liveUrl: "https://northerncrafts.ng",
      features: [
        "Multi-vendor marketplace",
        "Secure payment processing",
        "Real-time inventory tracking",
        "Vendor dashboard",
        "Mobile app integration"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400 opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-electric-blue">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise in delivering innovative solutions across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-navy-800 rounded-xl overflow-hidden shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-electric-blue text-sm">{project.category}</p>
                  </div>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-electric-blue transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-electric-blue transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-navy-700 text-sm rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between text-sm text-gray-400">
                  <span>Client: {project.client}</span>
                  <span>Duration: {project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 