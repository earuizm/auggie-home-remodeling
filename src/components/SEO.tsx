import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
    const siteTitle = "Auggie's Home Remodeling";
    const fullTitle = `${title} | ${siteTitle}`;
    const siteUrl = 'https://www.auggieshomeremodeling.com'; // Replace with actual domain when live
    const currentUrl = canonical ? canonical : window.location.href;

    // Schema.org Structured Data for Local Business
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Auggie's Home Remodeling",
        "image": `${siteUrl}/auggie-logo-nbg.webp`,
        "description": "Family-owned home remodeling serving Chicago and North Shore since 1999. Specializing in kitchen, bathroom, and basement renovations.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chicago",
            "addressRegion": "IL",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 42.0411, // Evanston/Wilmette area (more accurate for North Shore focus)
            "longitude": -87.6901
        },
        "url": siteUrl,
        "telephone": "+18473027344",
        "email": "auggiesremodeling@gmail.com",
        "sameAs": [
            "https://www.facebook.com/auggiesremodeling", // Placeholder if not known, good to have structure
            "https://www.instagram.com/auggiesremodeling"
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "15:00"
            }
        ],
        "priceRange": "$$"
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
