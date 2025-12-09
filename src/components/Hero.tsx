import { ArrowRight, Cpu, MessageSquare, Building2, TrendingUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };
  
  // Updated contact navigation function
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/careers?scroll=contact');
  };
  
  return <motion.div className="relative w-full" initial="hidden" animate="visible" variants={containerVariants}>
      <div className={`banner-container bg-black relative overflow-hidden h-[60vh] sm:h-[60vh] md:h-[500px] lg:h-[550px] xl:h-[600px] w-full ${isMobile ? 'mt-[60px]' : ''}`}>
        <div className="absolute inset-0 bg-black w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className={`w-full h-full object-cover opacity-70 ${isMobile ? 'object-right' : 'object-center'}`}
            poster="/uploads/logo.png"
          >
            <source src="/uploads/background-video.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img
              src="/uploads/logo.png"
              alt="SBCG Pvt Limited"
              loading="lazy"
              decoding="async"
              className={`w-full h-full object-cover opacity-70 ${isMobile ?  'mt-object-right' : 'object-center'}`}
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-white"></div>
        </div>        
        <div className="banner-overlay bg-transparent pt-20 sm:pt-24 md:pt-32 w-full">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            <motion.div className="w-full max-w-3xl text-center" variants={itemVariants}>
              <motion.h1 className="banner-title text-white" variants={itemVariants}>Powering the Future with AI and Strategic Tech Innovation.</motion.h1>
              <motion.p className="banner-subtitle text-gray-300 mt-4 sm:mt-6" variants={itemVariants}>
                We integrate AI-powered solutions into business and investment workflows helping organizations optimize financial and operational decisions.
              </motion.p>
              <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center" variants={itemVariants}>
                {/* Styled as a button but using an anchor tag for service navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all shadow-lg hover:shadow-xl hover:shadow-gray-300/20 flex items-center justify-center group text-sm sm:text-base font-medium"
                  onClick={e => {
                    e.preventDefault();
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                {/* Updated Contact Us button to use the new navigation */}
                <button 
                  className="w-full sm:w-auto min-h-[44px] px-6 sm:px-8 py-3 bg-[#000f60] text-white rounded-md flex items-center justify-center group text-sm sm:text-base font-medium shadow-lg hover:shadow-xl hover:shadow-gray-300/20 transform transition-transform transition-opacity duration-300 hover:-translate-y-1 hover:opacity-90"
                  onClick={handleContactClick} 
                >
                  Contact Us
                  <MessageSquare className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4" variants={containerVariants} initial="hidden" animate="visible" transition={{
        delay: 0.6
      }}>
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Cpu className="w-5 h-5 md:w-6 md:h-6 text-[#28afdf]" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Digital Solutions</h3>
            <p className="text-gray-600 text-xs md:text-sm">Custom software, AI chatbots, cybersecurity, and digital transformation.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#47bf4a]" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Sales Optimization</h3>
            <p className="text-gray-600 text-xs md:text-sm">Performance analysis and strategic planning to amplify team competencies and achieve organizational objectives.</p>
          </motion.div>
          
          <motion.div className="bg-white p-4 md:p-5 rounded-xl shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md" variants={itemVariants}>
            <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 flex items-center justify-center rounded-lg text-gray-500 mb-2 md:mb-3">
              <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#d118f9]" />
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-gray-800">Investment Advisory</h3>
            <p className="text-gray-600 text-xs md:text-sm">Luxury real estate partnerships with Emaar & HMR Waterfront, plus strategic REIT guidance for diversified portfolios.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
};

export default Hero;