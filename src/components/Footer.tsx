import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const EMAILJS_SERVICE_ID = "service_9mcse81";
      const EMAILJS_TEMPLATE_ID = "template_4hb2h5p";
      const EMAILJS_PUBLIC_KEY = "LNpPsUzATg6f5Gtiv";
      
      const templateParams = {
        from_name: "Website Subscriber",
        email: email, // This will be substituted as {{email}} in your EmailJS template
        message: `New subscription request from the website footer.`,
        to_name: 'SBCG Team',
        reply_to: email,
        subscription_date: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        unsubscribe_link: "https://sbcg.co/unsubscribe", // Add your actual unsubscribe URL
        update_preferences_link: "https://sbcg.co/preferences" // Add your actual preferences URL
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error sending subscription:", error);
      
      toast({
        title: "Error",
        description: "There was a problem subscribing. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
  <footer id="contact" className="bg-[#111827] text-white pt-16 pb-8 w-full">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        <div className="lg:col-span-2">
          <img 
            src="/uploads/white-logo.png" 
            alt="SBCG Logo" 
            className="h-16 w-auto mb-6"
          />
          <p className="text-gray-300 mb-6">
            SBCG is a strategic business consulting and AI solutions company helping organizations accelerate digital transformation. Our tech division delivers enterprise-grade AI systems, automation frameworks, and managed services that enhance operational efficiency and customer experience and the ways organizations operate.
          </p>
          <p className="text-gray-300 mb-6 flex items-start">
            <MapPin className="w-5 h-5 mr-2 shrink-0" color="#ff5310" />
            <span className="-mt-0.5">
              Mezzanine floor - II, Faiyaz Center, Shahra-e-Faisal, Block 3-A Sindhi Muslim CHS (SMCHS)<br />
              Karachi, 75400, Pakistan
            </span>
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/company/sbcg-pvt-limited/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Company</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Subscribe to our newsletter</h3>
          <form className="space-y-4" onSubmit={handleSubscribe}>
            <div>
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : (
                <>
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </form>
          <div className="mt-6 text-white">
            <h4 className="font-semibold">Phone Numbers</h4>
            <p className="flex items-center">
              <Phone className="w-5 h-5 mr-2" color="#ff5310" />
              021-34331500
            </p>
            <p className="flex items-center ml-7">
              021-34331501
            </p>
            <p className="flex items-center ml-7">
              021-34331502
            </p>

            <h4 className="font-semibold mt-4">Email Address</h4>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2" color="#ff5310" />
              info@sbcg.co
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} S.B.C.G. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

};

export default Footer;