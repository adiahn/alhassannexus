import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const keyValues = [
    { title: 'Innovation', description: 'We leverage cutting-edge technology to deliver forward-thinking solutions' },
    { title: 'Reliability', description: 'Our systems and services are built to be dependable and robust' },
    { title: 'Expertise', description: 'Our team consists of skilled professionals with deep industry knowledge' },
    { title: 'Client-Centric', description: 'We prioritize understanding and meeting our clients\' unique needs' }
  ];

  return (
    <section id="about" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full bg-circuit-pattern"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About <span className="text-electric-blue">Alhassan Nexus</span>
                  </h2>
                  
                  <p className="text-gray-300 mb-6">
                    Alhassan Nexus Services Ltd is dedicated to delivering scalable, secure, and efficient ICT services tailored to client needs. As a forward-thinking ICT company, we combine technical expertise with a deep understanding of business challenges to create solutions that drive growth and innovation.
                  </p>
                  
                  <p className="text-gray-300 mb-8">
                    Our team of experts is committed to excellence in every project, ensuring that our clients receive the highest quality services and support. We believe in building long-term partnerships based on trust, transparency, and outstanding results.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {keyValues.map((value, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="text-electric-blue h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-white">{value.title}</h4>
                          <p className="text-sm text-gray-400">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-blue opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-lime-400 opacity-10 rounded-full blur-2xl"></div>
              </div>
              
              {/* Border decorations */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border border-electric-blue/30 rounded-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-32 h-32 border border-lime-400/30 rounded-xl"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Process workflow visualization */}
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Workflow</h3>
                  
                  <div className="space-y-8">
                    {[
                      { step: '01', title: 'Discovery', description: 'Understanding your needs and challenges' },
                      { step: '02', title: 'Planning', description: 'Designing the optimal solution architecture' },
                      { step: '03', title: 'Implementation', description: 'Building and deploying robust systems' },
                      { step: '04', title: 'Support', description: 'Ongoing maintenance and improvements' }
                    ].map((step, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4">
                          <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center text-electric-blue font-bold">
                            {step.step}
                          </div>
                          {index < 3 && (
                            <div className="w-0.5 h-12 bg-gray-700 mx-auto my-2"></div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{step.title}</h4>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-dashed border-electric-blue/30 rounded-full transform rotate-45 animate-spin-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-dashed border-lime-400/30 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;