import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Send 
} from 'lucide-react';

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string | React.ReactNode }) => (
  <div className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-electric-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="bg-electric-blue/10 p-2 rounded-lg mr-4">
      <div className="text-electric-blue w-6 h-6">
        {icon}
      </div>
    </div>
    <div>
      <h4 className="font-medium text-navy-900">{title}</h4>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const SocialLink = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-white p-3 rounded-full shadow-md text-navy-900 hover:text-electric-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    aria-label={label}
  >
    {icon}
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-400 opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get in <span className="text-electric-blue">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your next project? Reach out to us and our team will get back to you shortly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div data-aos="fade-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ContactItem 
                icon={<MapPin />} 
                title="Office Address" 
                content="[Office Location Placeholder]" 
              />
              <ContactItem 
                icon={<Phone />} 
                title="Phone" 
                content={<a href="tel:09030356191\" className="hover:text-electric-blue transition-colors">09030356191</a>} 
              />
              <ContactItem 
                icon={<Mail />} 
                title="Email" 
                content={<a href="mailto:alhassannexusservicesltd@gmail.com\" className="hover:text-electric-blue transition-colors">alhassannexusservicesltd@gmail.com</a>} 
              />
              <ContactItem 
                icon={<Clock />} 
                title="Working Hours" 
                content="Monday – Friday: 9:00 AM – 5:00 PM" 
              />
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <SocialLink 
                  href="https://facebook.com/alhassannexus" 
                  icon={<Facebook className="w-5 h-5" />} 
                  label="Facebook" 
                />
                <SocialLink 
                  href="https://instagram.com/alhassannexus" 
                  icon={<Instagram className="w-5 h-5" />} 
                  label="Instagram" 
                />
                <SocialLink 
                  href="https://linkedin.com/company/alhassannexus" 
                  icon={<Linkedin className="w-5 h-5" />} 
                  label="LinkedIn" 
                />
                <SocialLink 
                  href="https://twitter.com/alhassannexus" 
                  icon={<Twitter className="w-5 h-5" />} 
                  label="Twitter" 
                />
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-300"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-300"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-300"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-electric-blue hover:bg-electric-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;