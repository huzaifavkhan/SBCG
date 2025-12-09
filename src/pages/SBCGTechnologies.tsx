import ServicePageLayout from '@/components/ServicePageLayout';
import SEO from '@/components/SEO';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Globe, Smartphone, Database, Bot, Shield, BarChart3, Users, Search,
  PenTool, Megaphone, Target, ShoppingCart, Zap, LineChart, Award, 
  Sparkles, User, Brain, Cog, TrendingUp, CheckCircle, Star,
  Check, Heart
} from 'lucide-react';

const SBCGTechnologies = () => {
  const [activePhase, setActivePhase] = useState(1);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const roadmapSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Helper functions for dynamic styling
  const getActivePhaseStyles = (phaseId: number) => {
    switch (phaseId) {
      case 1:
        return "opacity-100 translate-y-0 shadow-md border-green-200 bg-green-50";
      case 2:
        return "opacity-100 translate-y-0 shadow-md border-blue-200 bg-blue-50";
      case 3:
        return "opacity-100 translate-y-0 shadow-md border-purple-200 bg-purple-50";
      default:
        return "opacity-100 translate-y-0 shadow-md border-gray-200 bg-gray-50";
    }
  };

  const getActiveCheckmarkStyles = (phaseId: number) => {
    switch (phaseId) {
      case 1:
        return "bg-green-500 text-white";
      case 2:
        return "bg-blue-500 text-white";
      case 3:
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Implementation phases data
  const implementationPhases = [
    {
      id: 1,
      title: "Foundation and Initial Deployment",
      description: "We set up the core AI infrastructure and integrate initial functionalities to establish a solid foundation for your digital transformation.",
      steps: [
        "Core AI infrastructure setup and configuration", 
        "Initial system integration and testing", 
        "Basic automation deployment", 
        "Foundation security protocols implementation"
      ],
      color: "green-500",
      bgColor: "green-50",
      borderColor: "green-200"
    },
    {
      id: 2,
      title: "Comprehensive Integration",
      description: "We extend AI applications throughout more business processes, enhancing presence across various departments and operational areas.",
      steps: [
        "Cross-departmental system integration", 
        "Advanced AI features deployment", 
        "Process optimization implementation", 
        "Inter-system communication establishment"
      ],
      color: "blue-500",
      bgColor: "blue-50",
      borderColor: "blue-200"
    },
    {
      id: 3,
      title: "Complete Operational Deployment",
      description: "We fully deploy AI solutions to maximize the transformation of business operations and achieve comprehensive digital excellence.",
      steps: [
        "Full-scale AI solution deployment", 
        "Complete workflow automation", 
        "Advanced analytics and reporting setup", 
        "Performance optimization and fine-tuning"
      ],
      color: "purple-500",
      bgColor: "purple-50",
      borderColor: "purple-200"
    }
  ];

  useEffect(() => {
    roadmapSectionsRef.current = implementationPhases.map((_, i) => roadmapSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('animate-fade-in');
          (entries[0].target as HTMLElement).style.opacity = '1';
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (roadmapRef.current) {
      observer.observe(roadmapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;

      roadmapSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });

      if (closestSection !== null) {
        setActivePhase(closestSection + 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ServicePageLayout
      title="SBCG Technologies"
      subtitle="Digital transformation and AI-powered business solutions"
      imageUrl="/uploads/tech-banner.png"
      darkMode={true}
    >
      <SEO 
        title="SBCG - SBCG Technologies" 
        description="Comprehensive digital transformation services including AI solutions, web development, mobile apps, ERP systems, and digital marketing to streamline operations and drive growth."
        type="article"
        keywords={[
          'AI solutions', 'generative AI', 'digital transformation', 'web development', 'mobile app development',
          'ERP solutions', 'chatbot development', 'cybersecurity AI', 'data analytics', 'machine learning',
          'talent recruitment AI', 'financial AI services', 'e-commerce platforms', 'supply chain optimization',
          'healthcare AI', 'content generation AI', 'business process automation', 'customer support automation',
          'digital marketing', 'SEO optimization', 'PPC campaigns', 'brand development', 'content marketing',
          'BPO solutions', 'inbound outbound services', 'operational efficiency', 'cost reduction solutions',
          'business automation', 'AI-powered analytics', 'predictive analytics', 'customer engagement',
          'scalable solutions', 'regulatory compliance', 'data security', 'SBCG Technologies',
          'artificial intelligence consulting', 'business intelligence', 'process optimization',
          'technology solutions', 'digital innovation', 'smart business solutions', 'medical billing AI',
          'claims management', 'healthcare revenue cycle', 'outbound calling AI', 'HIPAA compliance'
        ]}
      />
      
      <h2 className="text-3xl font-bold mb-6">SBCG Technologies: Transforming Business Through Innovation</h2>
      
      {/* Background Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-gray-700 space-y-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Addressing Modern Business Challenges</h3>
        <p>
          Today's businesses grapple with numerous challenges that hinder their operational efficiency and growth. 
          These challenges typically involve the inefficient management of routine tasks, an overload of data with 
          limited actionable outcomes, and insufficient scalability in customer interactions and overall operations.
        </p>
        <p>
          Such limitations not only hinder productivity but also restrict the company's flexibility to adapt to 
          evolving market demands and customer preferences. SBCG Technologies addresses these critical pain points 
          with cutting-edge AI and digital solutions.
        </p>
      </div>
      
      {/* AI Solutions Section */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Generative AI Solutions</h3>
      <p className="text-gray-600 mb-6">
        In response to these widespread issues, we offer our cutting-edge Generative AI solutions. Our AI tools are 
        specifically designed to enhance business operations by automating mundane tasks, deriving insightful analytics 
        from extensive datasets, and improving customer engagement.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Brain className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Task Automation</h4>
            <p className="text-gray-600">AI technology automates time-intensive and repetitive tasks, freeing up personnel for strategic endeavors.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Bot className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Intelligent Customer Support</h4>
            <p className="text-gray-600">Advanced chatbots handle customer inquiries with efficiency, ensuring consistent and superior service experience.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <BarChart3 className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Enhanced Data Analysis</h4>
            <p className="text-gray-600">Solutions dive deep into large data pools to extract valuable insights, promoting strategic decision-making.</p>
          </div>
        </div>
      </div>

      {/* Technology Services */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Technology Development Services</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Globe className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Web Development</h4>
            <p className="text-gray-600">Engaging, user-friendly websites that serve as the digital face of your business with modern design and functionality.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Smartphone className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Mobile App Development</h4>
            <p className="text-gray-600">Intuitive mobile applications designed to keep you connected with customers on the go, enhancing engagement and accessibility.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Database className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">ERP Solutions</h4>
            <p className="text-gray-600">Comprehensive Enterprise Resource Planning solutions to streamline business processes and improve operational efficiency.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Shield className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI Cybersecurity</h4>
            <p className="text-gray-600">Machine learning algorithms to detect and prevent cyber threats, enhancing security measures and protecting sensitive data.</p>
          </div>
        </div>
      </div>

      {/* Specialized AI Solutions */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Specialized AI Applications</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI Talent Recruitment</h4>
            <p className="text-gray-600">Natural language processing and machine learning platform to automate recruitment, helping businesses find and screen candidates efficiently.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <LineChart className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI Financial Services</h4>
            <p className="text-gray-600">Automated investment platforms, robo-advisors, and AI-driven risk assessment tools for personalized financial recommendations.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Cog className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Supply Chain Optimization</h4>
            <p className="text-gray-600">AI platform that analyzes data, predicts demand, and streamlines logistics to reduce costs and improve efficiency.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <User className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Human-Like AI Avatars</h4>
            <p className="text-gray-600">Hyper-realistic AI avatars that deliver face-to-face live interactions, automate customer support, onboarding, and training, and provide personalized, engaging experiences across web, mobile, and kiosks.</p>
          </div>
        </div>
      </div>

    <div className="max-w-full mx-auto">
      {/* Featured Solution - AI-Powered Medical Billing Outbound Calling */}
      <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8 rounded-2xl my-12 border-2 border-purple-200 shadow-lg">
        <div className="mb-6">
          <div className="flex items-start gap-6 mb-4">
            <div className="flex-shrink-0">
              <svg className="w-9 h-9 -mt-1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="10" r="3" fill="#8B5CF6"/>
                <circle cx="75" cy="20" r="3" fill="#9F52F0"/>
                <circle cx="90" cy="40" r="3" fill="#B548EA"/>
                <circle cx="95" cy="65" r="3" fill="#CB3EE4"/>
                <circle cx="85" cy="85" r="3" fill="#E034DE"/>
                <circle cx="65" cy="95" r="3" fill="#EC4899"/>
                <circle cx="35" cy="95" r="3" fill="#EC4899"/>
                <circle cx="15" cy="85" r="3" fill="#E034DE"/>
                <circle cx="5" cy="65" r="3" fill="#CB3EE4"/>
                <circle cx="10" cy="40" r="3" fill="#B548EA"/>
                <circle cx="25" cy="20" r="3" fill="#9F52F0"/>
                <circle cx="50" cy="25" r="2.5" fill="#8B5CF6"/>
                <circle cx="70" cy="35" r="2.5" fill="#A74FEE"/>
                <circle cx="80" cy="55" r="2.5" fill="#C342E6"/>
                <circle cx="75" cy="75" r="2.5" fill="#DF35DE"/>
                <circle cx="55" cy="85" r="2.5" fill="#EC4899"/>
                <circle cx="35" cy="80" r="2.5" fill="#DF35DE"/>
                <circle cx="25" cy="60" r="2.5" fill="#C342E6"/>
                <circle cx="30" cy="35" r="2.5" fill="#A74FEE"/>
              </svg>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-2xl font-bold text-gray-900">AI-Powered Medical Billing Outbound Calling</h4>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-purple-700 mb-3">
            Automated Claims Appeals & Revenue Recovery for US Healthcare Providers
          </p>
          <p className="text-gray-700 mb-4">
            Our AI-powered outbound calling solution revolutionizes healthcare revenue cycle management with cutting-edge 
            technology, achieving 95% claim success rates and reducing administrative burden for US clinics and healthcare providers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
            <div className="text-sm text-gray-600">Appeal Success Rate (Average)</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-pink-200">
            <div className="text-3xl font-bold text-pink-600 mb-1">85%</div>
            <div className="text-sm text-gray-600">Reduction in Manual Follow-Up</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Uninterrupted Calling & Help</div>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <h5 className="font-semibold text-gray-900 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600" />
            Core Capabilities
          </h5>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">Clinical evidence integration with specific medical necessity citations and policy language</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">HCPCS & ICD-10 compliance trained on up-to-date US healthcare codes</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">Unlimited concurrent rebuttal calls handling massive call volumes 24/7</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">Dynamic negotiation flow adapting arguments in real-time based on payer responses</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">Transparent audit trails with instant transcripts and approval codes</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">Graceful human escalation for complex disputes with full patient context</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-purple-200 mb-4">
          <h5 className="font-semibold text-gray-900 mb-2">Why Our Solution Stands Out</h5>
          <p className="text-gray-700 text-sm mb-2">
            Built by medical billing experts and AI engineers, our outbound calling solution directly addresses the critical 
            problem of insurance claim denials. The platform combines deep healthcare domain knowledge with state-of-the-art 
            large language models to ensure providers get paid for the vital work they do.
          </p>
          <p className="text-gray-700 text-sm">
            From automated denial analysis to conducting persuasive appeals calls backed by medical literature 
            and payer guidelines, our system handles the entire appeals process, allowing healthcare providers to 
            focus entirely on patient care while we recover their revenue.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Healthcare AI</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs font-medium rounded-full">Revenue Cycle Management</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Claims Automation</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">HIPAA Compliant</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Outbound Calling AI</span>
        </div>
      </div>
    </div>

      {/* Digital Marketing & BPO Services */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Digital Marketing & Business Process Solutions</h3>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Search className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">SEO Optimization</h4>
            <p className="text-gray-600">Website optimization to improve search engine visibility, driving more traffic and potential customers to your business.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Target className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">PPC Campaign Management</h4>
            <p className="text-gray-600">Pay-per-click campaigns designed to deliver immediate results, driving targeted traffic to your website.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Megaphone className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Brand Development</h4>
            <p className="text-gray-600">Building strong brand identity that sets you apart from competitors and resonates with your target audience.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <ShoppingCart className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">E-commerce Solutions</h4>
            <p className="text-gray-600">AI-based e-commerce platforms with personalized recommendations, intelligent search, and chatbot-driven customer support.</p>
          </div>
        </div>
      </div>
      
      {/* Enhanced Interactive Implementation Roadmap */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Implementation Roadmap</h3>
      <p className="text-gray-600 mb-8">
        Our structured approach ensures seamless digital transformation through carefully planned phases, 
        each building upon the previous to create a comprehensive AI-powered business ecosystem.
      </p>
      
      <div className="relative mt-12" ref={roadmapRef} style={{ opacity: 0 }}>
        <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
        
        <div className="space-y-10 relative">
          {implementationPhases.map((phase, index) => (
            <div
              key={phase.id}
              ref={el => roadmapSectionsRef.current[index] = el}
              className={cn(
                "relative flex flex-col md:flex-row md:items-center gap-6",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
              )}
            >
              <div className="md:w-1/2">
                <div
                  className={cn(
                    "md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer",
                    activePhase === phase.id
                      ? `bg-${phase.color} text-white scale-110 shadow-lg`
                      : "bg-white text-gray-700 border border-gray-300 hover:scale-105"
                  )}
                  onClick={() => setActivePhase(phase.id)}
                >
                  <span className="font-bold">{phase.id}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-2 mt-3 md:mt-0 text-gray-900">
                  Phase {phase.id}: {phase.title}
                </h4>
                <p className="text-gray-600 mb-3 text-sm">{phase.description}</p>
                
                <button
                  onClick={() => setActivePhase(phase.id)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activePhase === phase.id
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {activePhase === phase.id ? "Currently Viewing" : "View Details"}
                </button>
              </div>
              
              <div
                className={cn(
                  "md:w-1/2 rounded-xl p-5 shadow-sm border transition-all duration-300 cursor-pointer",
                  activePhase === phase.id
                    ? getActivePhaseStyles(phase.id)
                    : "opacity-50 md:opacity-30 hover:opacity-70 border-gray-100 bg-white"
                )}
                onClick={() => setActivePhase(phase.id)}
              >
                <h5 className="font-semibold mb-3 text-gray-700 text-left">Key Activities:</h5>
                <ul className="space-y-2">
                  {phase.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start text-left">
                      <span className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-2",
                        activePhase === phase.id 
                          ? getActiveCheckmarkStyles(phase.id)
                          : "bg-gray-100 text-gray-700"
                      )}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg my-12 text-gray-700 border border-gray-100">
        <h4 className="text-xl font-semibold mb-4">Our Implementation Principles</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Phased deployment approach to minimize business disruption</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Continuous monitoring and optimization throughout each phase</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Stakeholder training and change management support</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Risk assessment and mitigation at every implementation stage</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Scalable architecture designed for future growth and expansion</span>
          </li>
        </ul>
      </div>
      
      {/* Benefits */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Transformational Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <TrendingUp className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Operational Efficiency Gains</h4>
            <p className="text-gray-600">Automation and process optimization significantly cut down on both time and operational costs, improving overall productivity.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Star className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Superior Customer Experience</h4>
            <p className="text-gray-600">AI-driven solutions handle customer interactions with precision and responsiveness, enhancing satisfaction and loyalty.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Zap className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Adaptability and Scalability</h4>
            <p className="text-gray-600">Solutions designed to scale seamlessly with business growth and adapt to new operational challenges as they arise.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Award className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Compliance and Regulatory Efficiency</h4>
            <p className="text-gray-600">AI tools improve your ability to meet regulatory requirements more efficiently while maintaining the highest data security standards.</p>
          </div>
        </div>
      </div>

      {/* Industry Applications */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Industry-Specific Applications</h3>
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-[#47bf4a] flex items-start">
          <Heart className="h-6 w-6 text-[#47bf4a] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Healthcare AI Solutions</h4>
            <p className="text-gray-600">Automated medical diagnosis, patient monitoring, treatment recommendations, and revenue cycle management to improve accuracy, efficiency, and patient outcomes.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-[#28afdf] flex items-start">
          <ShoppingCart className="h-6 w-6 text-[#28afdf] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">E-commerce Intelligence</h4>
            <p className="text-gray-600">Personalized product recommendations, intelligent search capabilities, and enhanced customer shopping experiences that boost sales.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-[#d118f9] flex items-start">
          <LineChart className="h-6 w-6 text-[#d118f9] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Predictive Analytics</h4>
            <p className="text-gray-600">AI algorithms to forecast customer behavior, market trends, and demand patterns for data-driven business decisions.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-[#ff5310] flex items-start">
          <Target className="h-6 w-6 text-[#ff5310] mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">AI Marketing Automation</h4>
            <p className="text-gray-600">Optimize marketing campaigns, increase customer engagement, and improve conversion rates through intelligent automation.</p>
          </div>
        </div>
      </div>
      
      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Expected Outcomes</h3>
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
        <p className="text-gray-700 mb-4">
          Through SBCG Technologies' comprehensive digital transformation services, businesses achieve 
          streamlined operations, enhanced customer experiences, and sustainable competitive advantages. 
          Our AI-powered solutions transform business operations into data-driven, scalable, and 
          highly efficient frameworks.
        </p>
        <p className="text-gray-700">
          Organizations experience significant reductions in processing times, improved customer satisfaction, 
          enhanced regulatory compliance, and substantial cost savings. Our solutions are built to the highest 
          standards of data security and meet specific industry regulations, ensuring both operational 
          excellence and peace of mind.
        </p>
      </div>

      {/* Additional Services Note */}
      <div className="bg-gray-100 p-6 rounded-lg mt-8 flex items-start">
        <Sparkles className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Comprehensive Support</h4>
          <p className="text-gray-600">
            Beyond technology development, we offer reliable support management services, BPO solutions, 
            comprehensive inbound and outbound services, and complete digital marketing strategies to 
            ensure your business operations run smoothly and effectively.
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default SBCGTechnologies;