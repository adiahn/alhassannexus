import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import ceoImg from '../img/ceo.png';
import ctoImg from '../img/cto.jpg';
import amina from '../img/amina.jpg';
import ismail from '../img/ismail.jpeg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
  phone?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Hassan Sada Sa'ad",
      role: "Chief Executive Officer",
      bio: "With over 10 years of experience in technology and business leadership, Hassan drives our company's vision and strategic direction. His expertise in digital transformation and business development has been instrumental in our growth.",
      image: ceoImg,
      linkedin: "https://linkedin.com/in/hassan-sada-saad",
      email: "hassan@alhassannexus.com",
      phone: "+234 903 035 6191"
    },
    {
      name: "Adnan M. Mukhtar",
      role: "Chief Technology Officer",
      bio: "Adnan brings extensive expertise in software architecture and system design. With a strong background in enterprise solutions and cloud infrastructure, he leads our technical strategy and innovation initiatives.",
      image: ctoImg,
      linkedin: "https://linkedin.com/in/adnan-mukhtar",
      email: "adnan@alhassannexus.com"
    },
    {
      name: "Amina Ibrahim",
      role: "Lead Software Developer",
      bio: "Amina brings 6 years of expertise in full-stack development, with a focus on scalable web applications and mobile solutions. She leads our development team and ensures code quality standards.",
      image: amina,
      linkedin: "https://linkedin.com/in/amina-ibrahim",
      email: "amina@alhassannexus.com"
    },
    {
      name: "Yusuf Bello",
      role: "Network & Security Specialist",
      bio: "Yusuf is our cybersecurity expert with certifications in CCNA and CompTIA Security+. He oversees our network infrastructure and security protocols, ensuring robust protection for our clients.",
      image: ismail,
      linkedin: "https://linkedin.com/in/yusuf-bello",
      email: "yusuf@alhassannexus.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400 opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Meet Our <span className="text-electric-blue">Team</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experts combines technical excellence with deep industry knowledge to deliver exceptional solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
                <p className="text-electric-blue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-electric-blue transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-600 hover:text-electric-blue transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                  {member.phone && (
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-gray-600 hover:text-electric-blue transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 