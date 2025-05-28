import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const moveX = (x - 0.5) * 30;
      const moveY = (y - 0.5) * 30;
      
      const elements = heroRef.current.querySelectorAll('.animate-on-mouse');
      elements.forEach((el) => {
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy-900"
      style={{ 
        backgroundImage: 'linear-gradient(135deg, #0A2342 0%, #13294b 100%)',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-5 w-96 h-96 bg-electric-blue opacity-10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400 opacity-10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        
        {/* Grid pattern with animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-on-mouse transition-transform duration-300 ease-out"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-16 h-16 border-2 border-electric-blue opacity-20 rounded-lg transform rotate-45 animate-float-slow animate-on-mouse"></div>
        <div className="absolute top-[40%] right-[15%] w-24 h-24 border-2 border-lime-400 opacity-20 rounded-full animate-float-medium animate-on-mouse"></div>
        <div className="absolute bottom-[25%] left-[20%] w-20 h-20 border-2 border-purple-500 opacity-20 transform rotate-12 animate-float-fast animate-on-mouse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="lg:w-1/2 space-y-8">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight opacity-0 animate-fade-in"
              style={{ animation: 'fadeIn 0.8s ease-out forwards' }}
            >
              <span className="block transform translate-y-8 opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.2s forwards' }}>
                Empowering Businesses
              </span>
              <span className="block text-electric-blue transform translate-y-8 opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.4s forwards' }}>
                through Smart Tech Solutions
              </span>
            </h1>
            
            <p 
              className="text-xl text-gray-300 max-w-xl transform translate-y-8 opacity-0"
              style={{ animation: 'slideUp 0.8s ease-out 0.6s forwards' }}
            >
              From Web Development to Cloud Infrastructure, Alhassan Nexus Services Ltd. drives your digital future.
            </p>
            
            <div 
              className="flex flex-wrap gap-4 transform translate-y-8 opacity-0"
              style={{ animation: 'slideUp 0.8s ease-out 0.8s forwards' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-electric-blue hover:bg-electric-blue-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
            <div 
              className="relative transform translate-y-8 opacity-0"
              style={{ animation: 'slideUp 0.8s ease-out 1s forwards' }}
            >
              <div className="w-full max-w-lg h-auto">
                <div className="relative bg-gradient-to-br from-navy-800/80 to-navy-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl animate-on-mouse transition-transform duration-300 ease-out">
                  <div className="grid grid-cols-2 gap-4">
                    {['Web', 'Software', 'Cloud', 'Security'].map((item, index) => (
                      <div 
                        key={index}
                        className="bg-navy-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        style={{ animation: `fadeIn 0.5s ease-out ${1.2 + index * 0.1}s forwards` }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-electric-blue/20 flex items-center justify-center mb-3">
                          <div className="w-6 h-6 bg-electric-blue rounded-md"></div>
                        </div>
                        <h3 className="text-white font-medium">{item}</h3>
                      </div>
                    ))}
                  </div>
                  
                  <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-electric-blue to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-dashed border-electric-blue/30 rounded-xl transform rotate-6 animate-spin-slow"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-dashed border-lime-400/30 rounded-xl transform -rotate-12 animate-float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;