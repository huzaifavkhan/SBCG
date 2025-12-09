import ServicePageLayout from '@/components/ServicePageLayout';
import { Users, Target, Briefcase, LineChart, MessageCircle, Star, TrendingUp, ClipboardCheck,
  Award, Shield, Lightbulb, Zap, ChartBar, UserCheck, Settings, Rocket, CheckCircle, 
  ArrowRight, FileText, Search, Cog, BarChart3, GraduationCap, Building2, TrendingDown,
  Check
} from 'lucide-react';
import SEO from '@/components/SEO';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const ManagementConsultingAndTraining = () => {
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
      case 4:
        return "opacity-100 translate-y-0 shadow-md border-orange-200 bg-orange-50";
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
      case 4:
        return "bg-orange-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const trainingPrograms = [
    {
      title: "Personal Excellence and Personal Branding",
      icon: Award,
      color: "#28afdf",
      description: "Comprehensive programs to enhance self-leadership, build confidence, and develop a compelling professional image that drives career advancement and personal effectiveness.",
      keyAreas: [
        "Professional image development and executive presence",
        "Personal brand strategy and differentiation",
        "Confidence building and self-leadership mastery",
        "Career advancement planning and goal achievement"
      ]
    },
    {
      title: "Consultative Selling Skills",
      icon: MessageCircle,
      color: "#47bf4a",
      description: "Advanced training in building stronger client relationships through value-driven sales conversations, strategic questioning techniques, and consultative approaches.",
      keyAreas: [
        "Value-based selling methodologies",
        "Strategic questioning and active listening",
        "Client needs assessment and solution mapping",
        "Building long-term client partnerships"
      ]
    },
    {
      title: "Managing Teams and Goal Setting",
      icon: Users,
      color: "#8430f7",
      description: "Leadership development programs that guide managers to set clear objectives, align teams effectively, and deliver measurable business outcomes.",
      keyAreas: [
        "Strategic goal setting and OKR frameworks",
        "Team alignment and performance management",
        "Motivational leadership techniques",
        "Accountability systems and tracking"
      ]
    },
    {
      title: "Sales Process Program for Frontline Sales Force",
      icon: Target,
      color: "#ff5310",
      description: "Structured sales methodology training designed specifically for frontline teams to maximize customer engagement and conversion rates.",
      keyAreas: [
        "End-to-end sales process mastery",
        "Customer journey mapping and touchpoint optimization",
        "Objection handling and closing techniques",
        "Pipeline management and forecasting"
      ]
    },
    {
      title: "Basic & Advanced Communication Training Program",
      icon: MessageCircle,
      color: "#ffc208",
      description: "Comprehensive communication skills development from foundational principles to advanced persuasion and influence techniques.",
      keyAreas: [
        "Effective verbal and non-verbal communication",
        "Persuasive presentation and storytelling",
        "Difficult conversation management",
        "Cross-cultural communication excellence"
      ]
    },
    {
      title: "Service Excellence",
      icon: Star,
      color: "#d118f9",
      description: "Customer service training focused on exceeding expectations, building loyalty, and creating memorable customer experiences.",
      keyAreas: [
        "Customer-centric mindset development",
        "Service recovery and complaint resolution",
        "Exceeding customer expectations consistently",
        "Building customer loyalty and advocacy"
      ]
    },
    {
      title: "Sales for Non-Sales Staff",
      icon: Briefcase,
      color: "#28afdf",
      description: "Equipping non-sales employees with essential sales awareness and customer engagement skills to support organizational revenue goals.",
      keyAreas: [
        "Sales fundamentals for technical teams",
        "Cross-functional sales support",
        "Customer interaction best practices",
        "Revenue-focused mindset development"
      ]
    },
    {
      title: "Sales Management Program for Leadership",
      icon: UserCheck,
      color: "#47bf4a",
      description: "Transforming sales leaders into strategic coaches who drive performance through effective team management and leadership excellence.",
      keyAreas: [
        "Sales team coaching and mentoring",
        "Performance management and KPI tracking",
        "Strategic sales planning and forecasting",
        "Leadership transition and role excellence"
      ]
    }
  ];

  const consultingServices = [
    {
      phase: "Phase 1",
      phaseNumber: 1,
      title: "Observation & Analysis",
      icon: Search,
      color: "green-500",
      bgColor: "green-50",
      borderColor: "green-200",
      description: "Comprehensive assessment of current sales processes, team dynamics, and organizational capabilities to identify improvement opportunities.",
      deliverables: [
        "In-depth sales process audit and gap analysis",
        "Sales team performance assessment and benchmarking",
        "Customer journey and touchpoint evaluation",
        "Competitive landscape and market positioning analysis",
        "Detailed findings report with actionable insights"
      ]
    },
    {
      phase: "Phase 2",
      phaseNumber: 2,
      title: "Sales Process Strategy Development & Retail Development Strategy Formulation",
      icon: FileText,
      color: "blue-500",
      bgColor: "blue-50",
      borderColor: "blue-200",
      description: "Strategic planning and design of customized sales processes and retail strategies aligned with organizational goals and market realities.",
      deliverables: [
        "Customized sales process framework and methodology",
        "Retail development strategy and expansion roadmap",
        "Sales playbook and best practice documentation",
        "Performance metrics and KPI framework",
        "Change management and communication plan"
      ]
    },
    {
      phase: "Phase 3",
      phaseNumber: 3,
      title: "Implementation of Sales Leadership & Frontend Strategies",
      icon: Cog,
      color: "purple-500",
      bgColor: "purple-50",
      borderColor: "purple-200",
      description: "Execution phase where strategic plans are deployed, teams are trained, and new processes are embedded into daily operations.",
      deliverables: [
        "Phased implementation roadmap and timeline",
        "Team training and capability development programs",
        "Process integration with existing systems",
        "Performance monitoring and feedback mechanisms",
        "Quick wins identification and execution"
      ]
    },
    {
      phase: "Phase 4",
      phaseNumber: 4,
      title: "Strategy Transformation & Implementation Architecture",
      icon: Rocket,
      color: "orange-500",
      bgColor: "orange-50",
      borderColor: "orange-200",
      description: "Long-term transformation support ensuring sustainable adoption, continuous improvement, and scalable growth architecture.",
      deliverables: [
        "Transformation governance and steering framework",
        "Continuous improvement mechanisms",
        "Scale and replication architecture",
        "Leadership coaching for sustained impact",
        "Performance optimization and refinement"
      ]
    }
  ];

  useEffect(() => {
    roadmapSectionsRef.current = consultingServices.map((_, i) => roadmapSectionsRef.current[i] || null);
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
      title="Management Consulting & Training"
      subtitle="Strategic business consulting and professional training programs"
      imageUrl="/uploads/managment-banner.jpg"
      darkMode={true}
    >
      <SEO 
        title="SBCG - Management Consulting & Training"
        description="Transform your sales processes and retail strategies with SBCG's comprehensive management consulting and training programs. Expert sales leadership development, process optimization, and strategic consulting services."
        keywords={[
          'management consulting', 'business training', 'sales consulting', 'leadership development',
          'organizational consulting', 'strategic consulting', 'sales leadership training', 'sales process optimization',
          'sales team development', 'performance improvement consulting', 'strategic planning services', 
          'business performance consulting', 'sales technique training', 'corporate training solutions',
          'business transformation consulting', 'management consulting services', 'professional development training',
          'executive coaching', 'team performance optimization', 'sales leadership performance improvement',
          'strategic business consulting solutions', 'corporate training and development programs',
          'business process improvement consulting', 'sales team strategic planning', 'leadership development programs',
          'organizational performance consulting', 'business consulting firm', 'training and development company',
          'strategic advisory services', 'performance consulting solutions', 'business improvement consultants',
          'improve sales performance', 'develop leadership skills', 'optimize business processes',
          'transform organizational culture', 'enhance team productivity', 'SBCG consulting',
          'frontend team training', 'sales process consulting', 'organizational goals alignment',
          'business strategy consulting', 'corporate performance training', 'management training programs',
          'retail development strategy', 'consultative selling', 'personal branding', 'service excellence',
          'sales management program', 'communication training', 'sales for non-sales staff'
        ]}
      />

      <h2 className="text-3xl font-bold mb-6">Management Consulting & Training by SBCG</h2>
      
      {/* Background Section */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-gray-700 space-y-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">Transforming Sales Processes & Retail Strategies</h3>
        <p>
          At SBCG, we strive to empower businesses by transforming their sales processes and retail strategies. 
          We recognize the intense competition across industries and the pivotal role that sales and retail 
          development play in driving success. Our Sales Process Consulting and Retail Development Strategy 
          services are meticulously designed to equip businesses with the skills, strategies, and knowledge 
          required to navigate the rapidly evolving market landscape.
        </p>
        <p>
          Our approach focuses on identifying and rectifying behaviors that impact the performance of 
          Sales Leadership and frontend teams. By examining Sales and the Sales Process, we craft 
          strategic plans that amplify the core competencies of your sales team, thereby enabling 
          them to implement sales techniques in alignment with your organizational goals and objectives.
        </p>
      </div>

      {/* Key Value Propositions */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
          <TrendingDown className="h-8 w-8 text-blue-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">High-Pressure Environment Management</h4>
          <p className="text-gray-700 text-sm">Expert guidance in managing high-pressure market and internal environments for enhanced results and team resilience.</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
          <Lightbulb className="h-8 w-8 text-green-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Pioneering Innovation</h4>
          <p className="text-gray-700 text-sm">Developing innovative sales strategies that position your organization ahead of market competition.</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
          <UserCheck className="h-8 w-8 text-purple-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Leader-to-Coach Transformation</h4>
          <p className="text-gray-700 text-sm">Transition of sales leaders into effective coaches who drive sustainable team performance.</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200">
          <MessageCircle className="h-8 w-8 text-orange-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Enhanced Coaching Conversations</h4>
          <p className="text-gray-700 text-sm">Improved coaching conversations with stakeholders and management for better alignment and outcomes.</p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-lg border border-pink-200">
          <Star className="h-8 w-8 text-pink-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Team Motivation Excellence</h4>
          <p className="text-gray-700 text-sm">Creating motivated sales and service teams that consistently exceed performance targets.</p>
        </div>
        
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-lg border border-indigo-200">
          <Building2 className="h-8 w-8 text-indigo-600 mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Long-term Success Partnership</h4>
          <p className="text-gray-700 text-sm">Securing your business's long-term success in competitive market landscapes as your trusted partner.</p>
        </div>
      </div>
      
{/* Training Programs Section */}
      <h3 className="text-2xl font-semibold mb-4 mt-12">Comprehensive Training Programs</h3>
      <p className="text-gray-600 mb-6">
        SBCG delivers transformational training programs that develop individual excellence, enhance team 
        capabilities, and drive organizational performance. Our programs are designed for lasting impact 
        and measurable results.
      </p>
      
      <div className="space-y-6 my-8">
        {trainingPrograms.map((program, index) => (
          <div 
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon and Title Row */}
            <div className="flex items-center gap-4 mb-3">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  <program.icon className="h-6 w-6" style={{ color: program.color }} />
                </div>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl font-semibold text-gray-900">{program.title}</h4>
              </div>
            </div>

            {/* Description - Full Width */}
            <p className="text-gray-600 mb-4">{program.description}</p>

            {/* Full-width gray box */}
            <div className="bg-gray-50 p-4 rounded-lg w-full">
              <h5 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                Key Learning Areas:
              </h5>
              <ul className="space-y-2">
                {program.keyAreas.map((area, areaIndex) => (
                  <li key={areaIndex} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Management Consulting Services Section */}
      <h3 className="text-2xl font-semibold mb-4 mt-12">Management Consulting Services</h3>
      <p className="text-gray-600 mb-6">
        Our consulting approach follows a proven four-phase methodology that ensures comprehensive transformation 
        from initial assessment through sustained implementation and continuous improvement.
      </p>
      
      <div className="relative mt-12" ref={roadmapRef} style={{ opacity: 0 }}>
        <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
        
        <div className="space-y-10 relative">
          {consultingServices.map((service, index) => (
            <div
              key={service.phaseNumber}
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
                    activePhase === service.phaseNumber
                      ? `bg-${service.color} text-white scale-110 shadow-lg`
                      : "bg-white text-gray-700 border border-gray-300 hover:scale-105"
                  )}
                  onClick={() => setActivePhase(service.phaseNumber)}
                >
                  <span className="font-bold">{service.phaseNumber}</span>
                </div>
                
                <h4 className="text-xl font-bold mb-2 mt-3 md:mt-0 text-gray-900">
                  {service.phase}: {service.title}
                </h4>
                <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
                
                <button
                  onClick={() => setActivePhase(service.phaseNumber)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activePhase === service.phaseNumber
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {activePhase === service.phaseNumber ? "Currently Viewing" : "View Details"}
                </button>
              </div>
              
              <div
                className={cn(
                  "md:w-1/2 rounded-xl p-5 shadow-sm border transition-all duration-300 cursor-pointer",
                  activePhase === service.phaseNumber
                    ? getActivePhaseStyles(service.phaseNumber)
                    : "opacity-50 md:opacity-30 hover:opacity-70 border-gray-100 bg-white"
                )}
                onClick={() => setActivePhase(service.phaseNumber)}
              >
                <h5 className="font-semibold mb-3 text-gray-700 text-left">Key Deliverables:</h5>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, delIndex) => (
                    <li key={delIndex} className="flex items-start text-left">
                      <span className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-2",
                        activePhase === service.phaseNumber 
                          ? getActiveCheckmarkStyles(service.phaseNumber)
                          : "bg-gray-100 text-gray-700"
                      )}>
                        <Check className="w-3 h-3" />
                      </span>
                      <span className="text-gray-700 text-sm">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg my-12 text-gray-700 border border-gray-100">
        <h4 className="text-xl font-semibold mb-4">Our Consulting Principles</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Comprehensive assessment and strategic planning tailored to your business</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Hands-on implementation support with dedicated consultants</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Continuous monitoring and optimization throughout transformation</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Change management and stakeholder engagement at every stage</span>
          </li>
          <li className="flex items-start">
            <CheckCircle className="h-5 w-5 text-[#47bf4a] mt-0.5 mr-2 flex-shrink-0" />
            <span>Sustainable frameworks designed for long-term success and scalability</span>
          </li>
        </ul>
      </div>

      {/* Engagement Process */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg my-12 border-2 border-blue-200">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Engaging With Our Consulting Services</h3>
        <p className="text-gray-700 mb-6">
          Collaborate with SBCG to revolutionize your sales process and retail development strategy. 
          Secure your business's long-term success in the competitive market landscape with us as 
          your trusted partner.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
            <h4 className="font-semibold text-gray-900 mb-2">Initial Consultation</h4>
            <p className="text-gray-600 text-sm">Discuss your challenges, objectives, and vision with our consulting experts.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
            <h4 className="font-semibold text-gray-900 mb-2">Customized Proposal</h4>
            <p className="text-gray-600 text-sm">Receive a tailored consulting and training plan designed for your specific needs.</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
            <h4 className="font-semibold text-gray-900 mb-2">Partnership & Execution</h4>
            <p className="text-gray-600 text-sm">Begin your transformation journey with dedicated support and expert guidance.</p>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Transformational Benefits</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <MessageCircle className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Enhanced Strategic Communication</h4>
            <p className="text-gray-600">Advanced training ensures clear, impactful, and persuasive interactions with clients, stakeholders, and team members at all organizational levels.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Star className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Transformational Leadership Development</h4>
            <p className="text-gray-600">Sales managers evolve into strategic coaches, dramatically improving team motivation, engagement, and sustainable performance results.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <TrendingUp className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Accelerated Sales Performance Growth</h4>
            <p className="text-gray-600">Streamlined strategies, optimized processes, and enhanced team capabilities lead to measurable revenue growth and market expansion.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <ClipboardCheck className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Strategic Execution Excellence</h4>
            <p className="text-gray-600">Perfect alignment between strategic vision and tactical implementation ensures sustainable impact and long-term organizational success.</p>
          </div>
        </div>

        <div className="flex items-start">
          <Shield className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Resilient Sales Processes</h4>
            <p className="text-gray-600">Build robust, adaptable sales frameworks that perform consistently across different market conditions and competitive pressures.</p>
          </div>
        </div>

        <div className="flex items-start">
          <BarChart3 className="h-6 w-6 text-gray-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-gray-600">Measurable Performance Improvements</h4>
            <p className="text-gray-600">Track and demonstrate tangible improvements in key metrics including conversion rates, deal sizes, sales cycles, and team productivity.</p>
          </div>
        </div>
      </div>
      
      {/* Outcome */}
      <h3 className="text-2xl font-semibold mb-4 mt-8">Expected Outcomes</h3>
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-l-4 border-orange-500">
        <p className="text-gray-700 mb-4">
          By engaging with SBCG's Management Consulting & Training services, organizations achieve
          resilient sales processes, motivated teams, and leaders who coach for long-term impact.
          Our comprehensive approach addresses both immediate performance challenges and long-term 
          strategic positioning.
        </p>
        <p className="text-gray-700">
          Our programs drive consistent performance improvements, strategic alignment, and sustainable
          competitive advantages in today's high-pressure market environments. Clients experience
          measurable improvements in sales performance, team engagement, and leadership effectiveness
          within the first quarter of implementation, with compounding benefits that accelerate over time.
        </p>
      </div>
    </ServicePageLayout>
  );
};

export default ManagementConsultingAndTraining;