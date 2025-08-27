import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  schemaData?: object;
}

const SEOHead = ({ 
  title = "VertaTech Solutions - Leading Kenya's Digital Transformation",
  description = "Expert technology solutions in Kenya. Specializing in networking, security systems, CCTV installation, custom software development, and digital transformation services.",
  keywords = "technology solutions Kenya, networking services, CCTV installation, software development, digital transformation, IT consulting, cybersecurity, web development, system integration",
  canonical,
  ogImage = "/lovable-uploads/3fb719b7-6de4-44bf-a1d6-899c1c8c18b8.png",
  schemaData
}: SEOHeadProps) => {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonicalUrl = canonical || currentUrl;

  const defaultSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VertaTech Solutions",
    "description": description,
    "url": "https://vertatechsolutions.co.ke",
    "logo": ogImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254720496076",
      "contactType": "customer service",
      "areaServed": "KE",
      "availableLanguage": ["English", "Swahili"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressRegion": "Nairobi"
    },
    "sameAs": [
      "https://www.linkedin.com/company/vertatech-solutions",
      "https://twitter.com/vertatech_ke"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Network Installation & Configuration",
        "description": "Professional network setup and configuration services"
      },
      {
        "@type": "Service", 
        "name": "CCTV & Security Systems",
        "description": "Security camera systems and monitoring solutions"
      },
      {
        "@type": "Service",
        "name": "Custom Software Development", 
        "description": "Web applications, mobile apps, and enterprise systems"
      },
      {
        "@type": "Service",
        "name": "IT Consulting & Support",
        "description": "Strategic technology guidance and technical support"
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="VertaTech Solutions" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="VertaTech Solutions" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@vertatech_ke" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#4F46E5" />
      <meta name="msapplication-TileColor" content="#4F46E5" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData || defaultSchemaData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;