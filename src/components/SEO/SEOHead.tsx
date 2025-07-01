import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Raithal Adventures - Himalayan Trekking & Homestay in Uttarakhand",
  description = "Experience authentic Himalayan adventures with Raithal Adventures. Expert-guided treks to Dayara Bugyal, Kedartal, Gomukh Tapovan & more. Traditional homestay in Raithal village, Uttarakhand.",
  keywords = "Himalayan trekking, Uttarakhand treks, Dayara Bugyal trek, Kedartal trek, Gomukh Tapovan, Raithal homestay, Garhwal Himalayas, mountain trekking India, adventure tourism Uttarakhand",
  image = "https://raithaladventuresgallery.wordpress.com/wp-content/uploads/2025/06/img20240810074356.jpg",
  url = "https://raithaladventures.in",
  type = "website",
  author = "Raithal Adventures",
  publishedTime,
  modifiedTime
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Raithal Adventures",
    "description": description,
    "url": url,
    "logo": "https://raithaladventures.in/logo.png",
    "image": image,
    "telephone": "+91-8970308534",
    "email": "raithaladventures@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Raithal Village",
      "addressLocality": "Uttarkashi",
      "addressRegion": "Uttarakhand",
      "postalCode": "249141",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.8629",
      "longitude": "78.5622"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Uttarakhand, India"
    },
    "serviceType": ["Trekking", "Adventure Tourism", "Homestay", "Mountain Guiding"],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/raithal_barbeque_homestaye/",
      "https://www.facebook.com/raithaladventures"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Raithal Adventures" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@raithaladventures" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      <meta name="application-name" content="Raithal Adventures" />
      <meta name="apple-mobile-web-app-title" content="Raithal Adventures" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Geo Meta Tags */}
      <meta name="geo.region" content="IN-UT" />
      <meta name="geo.placename" content="Raithal, Uttarakhand" />
      <meta name="geo.position" content="30.8629;78.5622" />
      <meta name="ICBM" content="30.8629, 78.5622" />
    </Helmet>
  );
};

export default SEOHead;