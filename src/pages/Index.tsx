
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import WhySBCG from '@/components/WhySBCG';
import NewsPreview from '@/components/NewsPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="SBCG - Home" 
        description="SBCG Technologies: SBCG is a comprehensive business solutions provider offering management consulting, digital transformation, AI-powered healthcare solutions, and premium investment opportunities across multiple industries."
        imageUrl="/uploads/logo.png"
      />
      <Hero />
      <Features />
      <WhySBCG />
      <Services />
    </PageLayout>
  );
};

export default Index;
