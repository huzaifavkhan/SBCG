
import { useState, useRef, useEffect, TouchEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    id: 1,
    title: "Management Consulting & Training",
    brand: "SBCG",
    description: "Strategic business consulting focusing on sales leadership, process improvement, and team performance enhancement. We identify and rectify behaviors that impact performance while crafting strategic plans to amplify core competencies.",
    tags: ["Sales Leadership", "Process Improvement", "Strategic Planning", "Team Performance"],
    imageUrl: "/uploads/managment-banner.jpg",
    isFeatured: true,
    link: "/services/management-consulting-training",
    },
  {
    id: 2,
    title: "SBCG Technologies",
    brand: "AI & Digital Solutions",
    description: "Comprehensive technology solutions including AI-driven applications, web development, mobile apps, ERP systems, cybersecurity, and data analytics to transform business operations and enhance efficiency.",
    tags: ["AI Solutions", "Web Development", "ERP Systems", "Cybersecurity"],
    imageUrl: "/uploads/tech-banner.png",
    link: "/services/sbcg-technologies"
  },
  // {
  //   id: 3,
  //   title: "Systems Biology & Computational Genomics",
  //   brand: "Healthcare Innovation",
  //   description: "Advanced AI-powered healthcare solutions for diagnostic accuracy, predictive health modeling, personalized medicine, and drug development through genomics insights and bioinformatics strategies.",
  //   tags: ["AI Diagnostics", "Predictive Health", "Personalized Medicine", "Drug Development"],
  //   imageUrl: "/uploads/biology-banner.jpg",
  //   link: "/services/systems-biology-computational-genomics"
  // },
  // {
  //   id: 4,
  //   title: "SBCG Investments",
  //   brand: "Real Estate & Investment Advisory",
  //   description: "Specialized investment advisory services focusing on luxury real estate projects, REITs portfolio management, and strategic partnerships with leading developers like Emaar and HMR Waterfront.",
  //   tags: ["Real Estate", "REITs", "Investment Advisory", "Portfolio Management"],
  //   imageUrl: "/uploads/investment-banner.jpg",
  //   link: "/services/sbcg-investments"
  // },
];

const Services = () => {
  const [activeServices, setActiveService] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const minSwipeDistance = 50;

  useEffect(() => {
    if (isInView && !isHovering) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isInView, isHovering]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveService(prev => (prev + 1) % services.length);
    } else if (isRightSwipe) {
      setActiveService(prev => (prev - 1 + services.length) % services.length);
    }
  };

    const getCardAnimationClass = (index: number) => {
      if (index === activeServices) return "scale-100 opacity-100 z-20";
      return "scale-90 opacity-0";
    };
  
  return <section id="services" ref={servicesRef} className="bg-white py-[50px] w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-[#ff5310] rounded-full text-sm font-medium">
            Customer Cases
          </div>
          <h2 className="text-3xl font-bold mb-3">
            From Strategy to Growth
          </h2>
          <p className="text-gray-600">
            Explore how SBCG delivers tailored consulting and training solutions that drive sustainable performance and business transformation across industries.                    </p>
          {isMobile && (
            <div className="flex items-center justify-center mt-4 animate-pulse-slow">
              <div className="flex items-center text-[#ff5310]">
                <ChevronLeft size={16} />
                <p className="text-sm mx-1">Swipe to navigate</p>
                <ChevronRight size={16} />
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="relative h-[550px] overflow-hidden" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          ref={carouselRef}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`absolute top-0 w-full max-w-2xl transform transition-all duration-500 ${getCardAnimationClass(index)}`} 
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Card className="overflow-hidden h-[500px] border border-gray-100 shadow-sm hover:shadow-md flex flex-col">
                  <div 
                    className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${service.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">{service.brand.toUpperCase()}</h3>
                      <div className="w-12 h-1 bg-white mb-2"></div>
                      <p className="text-white/90 text-sm">{service.title}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-gray-500 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-medium">{service.brand}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-50 text-[#28afdf] rounded-full text-xs animate-pulse-slow" 
                            style={{ animationDelay: `${idx * 300}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={service.link} 
                        className="text-[#ff5310] flex items-center  relative overflow-hidden group"
                        onClick={() => {
                          if (service.link.startsWith('/')) {
                            window.scrollTo(0, 0);
                          }
                        }}
                      >
                        <span className="relative z-10 text-[#ff5310]">Learn more</span>
                        <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1 hover:text-[#ff5310] text-[#ff5310]" />
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#ff5310] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {!isMobile && (
            <>
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ff5310] rounded-full flex items-center justify-center text-white hover:bg-[#ff5310] z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveService(prev => (prev - 1 + services.length) % services.length)}
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#ff5310] rounded-full flex items-center justify-center text-white hover:bg-[#ff5310] z-30 shadow-md transition-all duration-300 hover:scale-110" 
                onClick={() => setActiveService(prev => (prev + 1) % services.length)}
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
          
          <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
            {services.map((_, idx) => (
              <button 
                key={idx} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeServices === idx ? 'bg-[#ff5310] w-5' : 'bg-[#ff5310] opacity-30 hover:bg-[#ff5310] hover:opacity-100'}`} 
                onClick={() => setActiveService(idx)}
                aria-label={`Go to service ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>;
};

export default Services;
