
import { ArrowLeft, CheckCircle, ArrowRight, Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Cpu, BarChart2, Users, FileText, Layout, Settings, CheckSquare, Smartphone, Globe } from 'lucide-react';
import SEO from '@/components/SEO';

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="SBCG - About Us"
        description="SBCG is a comprehensive business solutions provider offering management consulting, digital transformation, AI-powered healthcare solutions, and premium investment opportunities across multiple industries."
        keywords={[
          // Company Core
          'SBCG', 'Strategic Business Consulting Group', 'business solutions provider', 'trusted business partner',
          'comprehensive business services', 'multi-industry expertise', 'client growth partner', 'business success',
          
          // Management Consulting
          'management consulting', 'business consulting', 'strategic consulting', 'trusted allies',
          'performance enhancement', 'strategic alignment', 'industry best practices', 'team empowerment',
          'sales consulting', 'retail strategy', 'management training', 'organizational goals',
          'competitive business landscapes', 'industry relationships', 'business transformation',
          
          // Technology Services
          'SBCG Technologies', 'digital transformation', 'software development', 'web development',
          'mobile application development', 'enterprise solutions', 'AI-managed services', 'digital age solutions',
          'custom software development', 'enterprise-grade solutions', 'digital landscape navigation',
          'comprehensive technology services', 'business digitization', 'technology partner',
          
          // Healthcare & Genomics
          'systems biology', 'computational genomics', 'bioinformatics', 'healthcare innovation',
          'genomics-based diagnosis', 'personalized treatment plans', 'artificial intelligence healthcare',
          'healthcare treatments', 'patient outcomes', 'biology expertise', 'computer science',
          'mathematics', 'engineering', 'healthcare revolution', 'AI healthcare solutions',
          
          // Investment Services
          'SBCG Investments', 'investment opportunities', 'wealth management', 'financial services',
          'investment advisory', 'portfolio management', 'investment strategy', 'financial growth',
          
          // Digital Marketing
          'SEO services', 'PPC campaigns', 'content development', 'e-commerce marketing',
          'branding services', 'digital marketing strategies', 'customized marketing solutions',
          'digital success', 'online marketing', 'brand development',
          
          // Values & Approach
          'integrity', 'ethics', 'trusted partnerships', 'client commitment', 'long-term success',
          'innovative solutions', 'strategic partnerships', 'business empowerment', 'global solutions',
          'developing nations', 'comprehensive mission', 'growth partnership', 'business excellence',
          
          // Industry Focus
          'multiple industries', 'cross-industry expertise', 'diverse business needs', 'industry solutions',
          'business landscape navigation', 'market adaptation', 'industry trends', 'competitive advantage'
        ]}
      />
        
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              About SBCG
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                We're a team of innovators that offer strategic consulting, AI-driven healthcare solutions, and investment opportunities, aiming to enhance business performance and foster innovation.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-gray-600">
                    At SBCG, our mission spans across healthcare, business consulting, and digital transformation. In healthcare, we focus on advancing disease diagnosis and treatment through Systems Biology & Computational Genomics, aiming to make scientific progress accessible, especially in developing nations. In business consulting, we position ourselves as trusted partners who empower teams, boost performance, and align operations with proven industry practices to secure long-term success. With SBCG, we extend this vision into digital transformation, delivering tailored solutions in web and mobile development as well as enterprise systems, equipping organizations to navigate the challenges of the digital age.
                  </p>
                  <p className="text-gray-600">
                    Beyond providing services, we aspire to build lasting partnerships rooted in integrity and ethics, fully committed to driving the growth and success of our clients.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Innovation:</strong> We push boundaries to create solutions that weren't possible before.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#ff5310] mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Quality:</strong> We're committed to excellence in every solution we deliver.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#d118f9] mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Collaboration:</strong> We work closely with our clients to ensure their unique needs are met.</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CheckCircle className="h-5 w-5 text-[#28afdf] mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Impact:</strong> We measure success by the tangible differences our technology makes in the real world.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Work</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Our work at SBCG is an extension of our mission, bringing together our expertise in healthcare, business consulting, and digital transformation to offer comprehensive solutions. In healthcare, our work involves harnessing the power of Systems Biology & Computational Genomics. We use advanced technologies to improve disease diagnosis and treatments, assist in drug development, and pioneer predictive personalized medicine. We’re committed to making these innovations accessible to all, with a special emphasis on aiding developing nations.
                  </p>
                  <p className="text-gray-600 mb-4">
                    In business consulting, we operate as trusted allies to our clients, providing guidance on strategic alignment, performance enhancement, and industry trend adaptation. Our work is designed to foster long-term success for our clients, ensuring their teams stay relevant and effective in a dynamic business environment. As part of SBCG Technologies, our work revolves around powering digital transformation for businesses. We provide a wide range of services, including software development, web and mobile application development, and enterprise solutions. Our AI-managed services and support ensure businesses are equipped to thrive in the digital age.
                  </p>
                  <p className="text-gray-600">
                    At SBCG, we’re not just a service provider – we’re a committed partner. Every aspect of our work reflects this commitment to our clients’ growth and success, guided by the high standards of ethics and morals that define us.
                  </p>
                </div>
              </motion.div>
              

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Empowering Training Programs:</strong> Offering a wide range of management training courses to align team efforts with organizational goals.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FileText className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Comprehensive Business Solutions:</strong> Providing tailored consultancy in sales and retail strategy to navigate competitive business landscapes.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BarChart2 className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>AI-driven Healthcare:</strong> Harnessing artificial intelligence and bioinformatics to revolutionize healthcare treatments and patient outcomes.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckSquare className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Strategic Business Consultation:</strong> Equipping businesses with comprehensive plans and strategies to foster robust industry relationships.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Global Impact:</strong> Delivering solutions that resonate globally and empowering businesses particularly in developing nations.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Layout className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Trusted Partnership:</strong> Standing as a reliable partner guiding clients towards success in business domains.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Settings className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Software Development:</strong> Providing custom software development services for efficient and successful digital transformation.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Smartphone className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Web & Mobile Application Development:</strong> Creating dynamic web and mobile applications to cater to a diverse range of business needs.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FileText className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Enterprise Solutions:</strong> Offering enterprise-grade solutions to address the unique challenges of businesses in the digital age.
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <BarChart2 className="w-6 h-6 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <strong>Comprehensive Digital Services:</strong> From SEO and PPC to content development, e-commerce marketing, and branding, we drive digital success with customized strategies.
                    </div>
                  </div>

                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Our team integrates expertise in AI-driven business solutions, strategic consulting, and other technologies to deliver transformative, industry-specific solutions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      name: "Raza Iqbal",
                      role: "CIO and Director",
                      bio: (<a 
                              href="https://www.linkedin.com/in/raza-abbas-iqbal-012791213/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Raza.jpeg"
                    },
                    // {
                    //   name: "Abbas Ali Iqbal",
                    //   role: "CEO and Founder",
                    //   bio: (<a 
                    //           href="https://www.linkedin.com/in/abbas-ali-iqbal/" 
                    //           target="_blank"
                    //           rel="noopener noreferrer"
                    //           className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                    //         >
                    //         <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                    //           LinkedIn Profile
                    //         </a>),
                    //   image: "/uploads/team/Abbas.jpg"
                    // },
                    {
                      name: "Erum Iqbal",
                      role: "Director Human Resources",
                      bio: (<a 
                              href="https://www.linkedin.com/in/erum-a-iqbal-4a610a151/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Erum.png"
                    },
                    {
                      name: "Muslim Reza Mooman CFA",
                      role: "Director Finance & Strategy",
                      bio: (<a 
                              href="https://www.linkedin.com/in/muslimrezamooman/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/MuslimReza.png"
                    },
                    // {
                    //   name: "Ahmad Jamal Khan",
                    //   role: "Senior Consultant & Trainer",
                    //   bio: (<a 
                    //           href="https://www.linkedin.com/in/ahmad-jamal-khan-25bb9015/" 
                    //           target="_blank"
                    //           rel="noopener noreferrer"
                    //           className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                    //         >
                    //           <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                    //           LinkedIn Profile
                    //         </a>),
                    //   image: "/uploads/team/Ahmed.png"
                    // },
                    {
                      name: "Syed Zahid Gillani",
                      role: "Director Corporate Development",
                      bio: (<a 
                              href="https://www.linkedin.com/in/syed-zahid-gillani-92507573/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Syed.png"
                    },
                    // {
                    //   name: "Sarfraz Hussain Mayo",
                    //   role: "Senior Consultant & Trainer",
                    //   bio: (<a 
                    //           href="https://www.linkedin.com/in/sarfraz-hussain-mayo-8863aa45/" 
                    //           target="_blank"
                    //           rel="noopener noreferrer"
                    //           className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                    //         >
                    //           <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                    //           LinkedIn Profile
                    //         </a>),
                    //   image: "/uploads/team/Sarfraz.jpg"
                    // },
                    {
                      name: "Mashood Qureshi",
                      role: "Consultant & Trainer",
                      bio: (<a 
                              href="https://www.linkedin.com/in/mashoodqureshi/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Mashood.png"
                    },
                    {
                      name: "Danyal Qasim",
                      role: "Investment Advisor",
                      bio: (<a 
                              href="https://www.linkedin.com/in/danyalfkhan/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Danyal.jpg"
                    },
                    {
                      name: "Sohail Yaqoob",
                      role: "Senior Consultant & Trainer",
                      bio: (<a 
                              href="https://www.linkedin.com/in/sohailyaqoob/" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-gray-700 hover:text-[#22b5f6] hover-opacity-80"
                            >
                              <Linkedin className="w-5 h-5 mr-2 text-[#22b5f6] hover:text-[#22b5f6] hover-opacity-80" />
                              LinkedIn Profile
                            </a>),
                      image: "/uploads/team/Sohail.png"
                    },
                    {
                      name: "Alizain Wahab",
                      role: "Senior Consultant & Trainer",
                      bio: "",
                      image: "/uploads/team/Ali.jpg"
                    }

                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Join Our Team
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
