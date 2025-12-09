
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-[#111827] text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#000f60]">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Curious about how AI can transform your business? Reach out to our team to explore innovative solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CEO's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/uploads/team/Abbas.jpg"
                alt="Abbas Ali Iqbal"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Abbas Ali Iqbal</h3>
              <p className="text-gray-600 mb-4">CEO and Founder</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:abbas@sbcg.co" className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80">
                  <Mail className="w-5 h-5 text-[#22b5f6] mr-2 hover:text-[#22b5f6] hover-opacity-80" />
                  abbas@sbcg.co
                </a>
                <a 
                  href="https://www.linkedin.com/in/abbas-ali-iqbal/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                >
                  <Linkedin className="w-5 h-5 text-[#22b5f6] mr-2 hover:text-[#22b5f6] hover-opacity-80" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Director's Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/uploads/team/Raza.jpeg"
                alt="Raza Abbas Iqbal"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Raza Abbas Iqbal</h3>
              <p className="text-gray-600 mb-4">Director</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:raza@sbcg.co" className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80">
                  <Mail className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                  raza@sbcg.co
                </a>
                <a 
                  href="https://www.linkedin.com/in/raza-abbas-iqbal-012791213/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                >
                  <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                  LinkedIn Profile
                </a>
                <a href="tel:+02134331502" className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80">
                  <Phone className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                  021-34331502
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
