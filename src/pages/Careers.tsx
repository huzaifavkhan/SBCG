import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import SEO from '@/components/SEO';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = "service_9mcse81";
const EMAILJS_TEMPLATE_ID = "template_i3mtaqk";
const EMAILJS_PUBLIC_KEY = "LNpPsUzATg6f5Gtiv";

const Careers = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we need to scroll to contact form
    const urlParams = new URLSearchParams(location.search);
    const scrollToContact = urlParams.get('scroll') === 'contact';

    if (scrollToContact) {
      // Scroll to top first, then scroll to contact form after a short delay
      window.scrollTo(0, 0);
      
      // Wait for the page to render, then scroll to the contact form
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          // Calculate header height and add some padding
          const headerHeight = 80; // Adjust this value based on your header height
          const elementPosition = contactForm.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Normal behavior - just scroll to top
      window.scrollTo(0, 0);
    }
  }, [location.search]);

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '',
    honeypot: '', // Add honeypot field
    timestamp: Date.now() // Add timestamp field
  });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState<string>();
  const [formStartTime] = useState<number>(Date.now()); // Track when form was opened

  const validatePhone = (phone: string) => {
    const regex = /^(?:\+92|0)?3\d{2}-?\d{7}$/;
    return regex.test(phone);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
    // Clear any previous success/error messages when user starts typing
    if (submitted) setSubmitted(false);
    if (submitError) setSubmitError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let tempErrors = { name: '', email: '', phone: '', message: '' };
    let hasError = false;

    // Basic validation
    if (!formData.name.trim()) {
      tempErrors.name = 'Full Name is required';
      hasError = true;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      hasError = true;
    }
    if (!phone) {
      tempErrors.phone = 'Phone number is required';
      hasError = true;
    } else if (!validatePhone(phone)) {
      tempErrors.phone = 'Invalid phone number';
      hasError = true;
    }
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
      hasError = true;
    }

    setErrors(tempErrors);

    if (!hasError) {
      setIsSubmitting(true);
      
      try {
        // Bot protection checks
        // 1. Honeypot check - if filled, it's likely a bot
        if (formData.honeypot) {
          console.log('Bot detected via honeypot');
          setSubmitError(true);
          setTimeout(() => {
            setSubmitError(false);
          }, 5000);
          setIsSubmitting(false);
          return;
        }
        
        // 2. Time-based check - Submission should take at least 3 seconds (too fast is likely a bot)
        const timeDiff = Date.now() - formData.timestamp;
        if (timeDiff < 3000) {
          console.log(`Bot detected: Form submitted too quickly (${timeDiff}ms)`);
          // Show a user-friendly message for quick submissions
          tempErrors.message = 'Please take a moment to review your message before submitting.';
          setErrors(tempErrors);
          setIsSubmitting(false);
          return;
        }
        
        console.log('Sending email with EmailJS...');
        
        // Prepare template parameters for EmailJS to match the email template
        // Remove honeypot and timestamp fields before sending
        const templateParams = {
          name: formData.name,
          email: formData.email,
          phone: phone,
          message: formData.message,
          time: new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZoneName: 'short'
          })
        };

        console.log('Template params:', templateParams);
        console.log('Using service:', EMAILJS_SERVICE_ID);
        console.log('Using template:', EMAILJS_TEMPLATE_ID);
        console.log('Using public key:', EMAILJS_PUBLIC_KEY);

        // Send email using EmailJS
        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        console.log('Email sent successfully:', response);
        
        setSubmitted(true);
        
        // Reset form with new timestamp
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          message: '',
          honeypot: '',
          timestamp: Date.now()
        });
        setPhone('');
        
        // Show success message for 5 seconds, then hide it
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);

      } catch (error) {
        console.error('Error sending email:', error);
        
        // More detailed error logging
        if (error && typeof error === 'object' && 'text' in error) {
          console.error('Error details:', (error as any).text);
        }
        
        setSubmitError(true);
        
        // Show error message for 5 seconds, then hide it
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="SBCG - Careers"
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
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>

              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  We're looking for passionate innovators to help us elevate business performance through AI-driven solutions and advanced technologies.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  We welcome both full-time professionals and interns who are passionate about crafting transformative, AI-integrated strategies and technologies.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join SBCG?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-gray-900">
                    {[
                      { title: "Innovation", description: "Contribute to AI-powered business solutions that redefine industry standards." },
                      { title: "Impact", description: "Create AI-driven solutions that enhance business performance, efficiency, and decision-making." },
                      { title: "Growth", description: "Develop your skills in a rapidly expanding field with diverse challenges." }
                    ].map((benefit, i) => {
                      const colors = ["text-[#47bf4a]", "text-[#ff5310]", "text-[#d118f9]"];
                      const gradients = [
                        "bg-gradient-to-r from-green-50 to-blue-50 border border-green-400",
                        "bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-400",
                        "bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-400"
                      ];
                      return (
                        <div
                          key={i}
                          className={`p-6 rounded-lg border border-gray-100 h-full ${gradients[i]}`}
                        >
                          <h3 className={`font-bold text-lg mb-2 ${colors[i]}`}>
                            {benefit.title}
                          </h3>
                          <p className={`${colors[i]}`}>{benefit.description}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Contact Form Section */}
                  <motion.div
                    id="contact-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 rounded-xl border border-gray-200 p-8 shadow-sm mt-12"
                  >
                    <h3 className="font-bold text-2xl text-center text-gray-900 mb-6">Get in Touch</h3>
                    <p className="text-center text-gray-600 mb-10">
                      Interested in joining or collaborating? Fill out the form or use our contact details.
                    </p>

                    {/* Success and Error Messages with smooth animations */}
                    <AnimatePresence>
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            duration: 0.4
                          }}
                          className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 shadow-sm"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                          >
                            <p className="font-medium flex items-center justify-center">
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                                className="mr-2 text-green-600"
                              >
                                ✓
                              </motion.span>
                              Message sent successfully!
                            </p>
                            <p className="text-sm mt-1">We've received your message and will get back to you soon.</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 30,
                            duration: 0.4
                          }}
                          className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 shadow-sm"
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-center"
                          >
                            <p className="font-medium flex items-center justify-center">
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
                                className="mr-2 text-red-600"
                              >
                                ✗
                              </motion.span>
                              Message failed to send
                            </p>
                            <p className="text-sm mt-1">There was a problem sending your message. Please try again later.</p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Full Name <span className="text-red-500">*</span></label>
                          <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22b5f6] focus:outline-none"
                            disabled={isSubmitting}
                          />
                          {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email Address <span className="text-red-500">*</span></label>
                          <input
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22b5f6] focus:outline-none"
                            disabled={isSubmitting}
                          />
                          {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <PhoneInput
                            placeholder="Enter phone number"
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            disabled={isSubmitting}
                          />
                          {errors.phone && <p className="text-red-500 mt-1 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Message <span className="text-red-500">*</span></label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell us about yourself or your inquiry..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22b5f6] focus:outline-none"
                            disabled={isSubmitting}
                          />
                          {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
                        </div>

                        {/* Honeypot field - hidden from real users but bots will fill it */}
                        <div className="hidden">
                          <label>Leave this empty</label>
                          <input
                            name="honeypot"
                            type="text"
                            value={formData.honeypot}
                            onChange={handleChange}
                            tabIndex={-1}
                            autoComplete="off"
                          />
                        </div>

                        {/* Hidden timestamp field */}
                        <input
                          name="timestamp"
                          type="hidden"
                          value={formData.timestamp}
                        />

                        <motion.button
                          whileHover={!isSubmitting ? { y: -5, scale: 1.03 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3 bg-[#000f60] text-white font-semibold rounded-lg shadow-md
                          transition-colors duration-300 ease-in-out hover:shadow-xl hover:opacity-90
                          disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </motion.button>
                      </form>

                      {/* Contact Info */}
                      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h4>
                        <div className="space-y-4 text-gray-700">
                          <div>
                            <p className="font-medium flex items-center mb-2">
                              <Phone className="w-5 h-5 mr-2 text-[#22b5f6]" /> Phone Numbers
                            </p>
                            <ul className="ml-7 space-y-1 text-gray-600">
                              <li>021-34331500</li>
                              <li>021-34331501</li>
                              <li>021-34331502</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-medium flex items-center mb-2">
                              <Mail className="w-5 h-5 mr-2 text-[#22b5f6]" /> Email Address
                            </p>
                            <p className="ml-7 text-gray-600">info@sbcg.co</p>
                          </div>

                          <div>
                            <p className="font-medium flex items-center mb-2">
                              <MapPin className="w-5 h-5 mr-2 text-[#22b5f6]" /> Address
                            </p>
                            <p className="ml-7 text-gray-600">
                              Mezzanine floor - II, Faiyaz Center, Shahra-e-Faisal, Block 3-A Sindhi Muslim CHS (SMCHS) <br />
                              Karachi, 75400, Pakistan
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Map Embed */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-12 w-full h-[450px] rounded-xl overflow-hidden shadow-md"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3063.89596542667!2d67.05092037460214!3d24.860060777929466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e9d8f0e55f3%3A0xcec3e1a1bd6eb80c!2sWorkstream%20Automation%20(Pvt)%20Limited!5e1!3m2!1sen!2s!4v1756489304489!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;