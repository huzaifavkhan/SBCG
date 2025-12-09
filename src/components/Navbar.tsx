import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileServicesOpen(false); // Reset services dropdown when closing menu
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Updated contact navigation function
  const handleContactClick = () => {
    navigate('/careers?scroll=contact');
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full backdrop-blur-md",
        isScrolled ? "bg-white/70 shadow-sm" : "bg-white"
      )}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/uploads/logo.png" alt="SBCG Logo" loading="eager" decoding="async" className={cn("h-12 w-auto", isScrolled ? "" : " brightness-100")} />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-black")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[500px]">
                      <li>
                        <Link to="/services/management-consulting-training" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Management Consulting & Training</div>
                          <p className="text-sm text-gray-500">Strategic business consulting and professional training programs</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/sbcg-technologies" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">SBCG Technologies</div>
                          <p className="text-sm text-gray-500">Digital transformation and software development services</p>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/services/systems-biology-computational-genomics" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Systems Biology & Computational Genomics</div>
                          <p className="text-sm text-gray-500">AI-driven healthcare and bioinformatics solutions</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/sbcg-investments" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">SBCG Investments</div>
                          <p className="text-sm text-gray-500">High-yield investment opportunities and financial insights</p>
                        </Link>
                      </li> */}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/clients">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                      Clients
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                {/* <NavigationMenuItem>
                  <Link to="/news">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                      News
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                
                <NavigationMenuItem>
                  <Link to="/careers">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-black hover:text-white" : "text-black hover:text-white bg-transparent hover:bg-[#ff5310]")}>
                      Careers
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <button onClick={handleContactClick} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-[#000f60] text-white hover:white hover:opacity-80" : "bg-[#000f60] text-white hover:bg-[#000f60] hover:opacity-80")}>
                    Contact Us
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-black" : "text-black")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - With Services Dropdown */}
      <motion.div 
        className="md:hidden w-full overflow-hidden"
        initial={false}
        animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={cn("px-3 pt-2 pb-3 space-y-1 shadow-sm", isScrolled ? "bg-white/90" : "bg-white")}>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            <Link to="/" className={cn("block px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
              Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Link to="/about" className={cn("block px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
              About Us
            </Link>
          </motion.div>
          
          {/* Services with dropdown */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.15 }}
          >
            <button 
              onClick={toggleMobileServices}
              className={cn("flex items-center justify-between w-full px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")}
            >
              <span>Services</span>
              <motion.div
                animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            
            {/* Services Submenu */}
            <motion.div
              initial={false}
              animate={isMobileServicesOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pl-4 space-y-1 mt-1">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={isMobileServicesOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Link 
                    to="/services/management-consulting-training" 
                    className={cn("block px-3 py-2 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="font-medium text-xs">Management Consulting & Training</div>
                    <p className="text-xs text-gray-500 mt-0.5">Strategic business consulting and professional training programs</p>
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={isMobileServicesOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <Link 
                    to="/services/sbcg-technologies" 
                    className={cn("block px-3 py-2 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsMobileServicesOpen(false);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="font-medium text-xs">SBCG Technologies</div>
                    <p className="text-xs text-gray-500 mt-0.5">Digital transformation and software development services</p>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <Link to="/clients" className={cn("block px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
              Clients
            </Link>
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.25 }}
          >
            <Link to="/news" className={cn("block px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
              News
            </Link>
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.25 }}
          >
            <Link to="/careers" className={cn("block px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-black hover:text-white hover:bg-[#ff5310]" : "text-black hover:text-white hover:bg-[#ff5310]")} onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo(0, 0);
            }}>
              Careers
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <button onClick={handleContactClick} className={cn("block w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-200", isScrolled ? "text-white bg-[#000f60] hover:bg-[#000f60] hover:opacity-80" : "text-white bg-[#000f60] hover:bg-[#000f60] hover:opacity-80")}>
              Contact Us
            </button>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;