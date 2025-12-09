import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Clients = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock client logos - in a real implementation, these would be actual client logos
  const clients = [
    { name: "HBL", logo: "/uploads/clients/bank-hbl.png" },
    { name: "Meezan Bank", logo: "/uploads/clients/bank-meezan.png" },
    { name: "NBP Funds", logo: "/uploads/clients/bank-nbp.png" },
    { name: "Faysal Bank", logo: "/uploads/clients/faysal-bank.png" },
    { name: "MCB Bank", logo: "/uploads/clients/bank-mcb.png" },
    { name: "Bank Alfalah", logo: "/uploads/clients/bank-alfalah.png" },
    { name: "Alfalah Investments", logo: "/uploads/clients/alfalah-investment.png" },
    { name: "Bank Al Habib", logo: "/uploads/clients/bank-al-habib.png" },
    { name: "JS Bank", logo: "/uploads/clients/js-bank.png" },
    { name: "JS Investments", logo: "/uploads/clients/js-investment.png" },
    { name: "Jubilee Bank", logo: "/uploads/clients/jubilee.png" },
    { name: "PPL", logo: "/uploads/clients/ppl.png" },
    { name: "Silk Bank", logo: "/uploads/clients/silk-bank.png" },
    { name: "UBL", logo: "/uploads/clients/ubl-bank.png" },
    { name: "Habib Metropolitan Bank", logo: "/uploads/clients/habib-metro-bank.png" },
    { name: "MedoBill", logo: "/uploads/clients/medobill.jpeg" },    
    { name: "SwiftSocial", logo: "/uploads/clients/swiftsocial.jpeg" },
    { name: "StorePulseAI", logo: "/uploads/clients/storepulse-ai.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <PageLayout>
      <SEO 
        title="SBCG - Our Clients"
        description="SBCG proudly serves leading organizations across multiple industries, providing innovative solutions and strategic partnerships."
        keywords={['SBCG clients', 'business partnerships', 'client portfolio', 'trusted partners']}
      />
      
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Our Clients
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                We are proud to partner with leading organizations across various industries, providing innovative solutions that drive growth and success.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                {clients.slice(0, 18).map((client, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-center justify-center"
                  >
                    <div className="bg-white p-0 rounded-xl shadow-md border border-gray-100 
                              hover:shadow-lg transition-all duration-300 
                              hover:-translate-y-1 w-full h-50 overflow-hidden">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-primary/5 rounded-xl p-8 border border-primary/10">
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Trusted by Industry Leaders</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Our commitment to excellence and innovation has earned us the trust of leading organizations 
                    across banking, healthcare, technology, and consulting sectors. We continue to build lasting 
                    partnerships that drive mutual success and sustainable growth.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Clients;