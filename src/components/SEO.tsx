import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isNewsPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SBCG',
  description = 'SBCG Technologies: SBCG is a comprehensive business solutions provider offering management consulting, digital transformation, AI-powered healthcare solutions, and premium investment opportunities across multiple industries.',
  type = 'website',
  name = 'SBCG',
  imageUrl = '/uploads/logo.png',
  publishDate,
  modifiedDate,
  author,
  category,
  isNewsPost: isNewsPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://sbcg.co${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://sbcg.co${imageUrl}`;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SBCG',
    url: 'https://sbcg.co',
    logo: 'https://sbcg.co/uploads/logo.png',
    description: 'Strategic business consulting, AI-powered healthcare solutions, digital transformation, and investment advisory services. Transforming businesses through innovative technology and proven methodologies',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@sbcg.co'
    },
    sameAs: [
      'https://www.linkedin.com/company/sbcg-pvt-limited/',
    ]
  };

  // Enhanced NewsPosting JSON-LD structured data
  const newsPostStructuredData = isNewsPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'NewsPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'SBCG',
      url: 'https://sbcg.co'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SBCG',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sbcg.co/uploads/logo.png',
        width: 512,
        height: 512
      },
      url: 'https://sbcg.co'
    },
    description: description,
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;


  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isNewsPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SBCG" />
      <meta property="og:locale" content="en_US" />
      {isNewsPost && category && <meta property="article:section" content={category} />}
      {isNewsPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isNewsPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isNewsPost && <meta property="article:publisher" content="https://sbcg.co" />}

      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {newsPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(newsPostStructuredData)}
        </script>
      )}    
    </Helmet>
  );
};

export default SEO;
