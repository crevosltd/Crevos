import { Helmet } from "react-helmet-async";

const SITE_URL = "https://crevosltd.com.ng";

export default function SEO({
  title = "CREVOS LTD | Creative & Digital Agency",
  description = "CREVOS LTD delivers creative and digital excellence through branding, graphic design, web development and digital solutions.",
  canonical,
  image,
  imageAlt = "CREVOS LTD",
  type = "website",
  articleSchema,
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CREVOS LTD",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Creative and digital agency offering graphic design, branding, web development, UI/UX design, motion graphics, video editing, photography, illustration, social media management and creative training.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CREVOS LTD",
    url: SITE_URL,
    serviceType: [
      "Graphic Design",
      "Web Development",
      "UI UX Design",
      "Motion Graphics",
      "Video Editing",
      "Photography",
      "Illustration",
      "Social Media Management",
    ],
  };

  const publishedTime = articleSchema?.datePublished;
  const modifiedTime = articleSchema?.dateModified;

  const structuredData = [
    organizationSchema,
    serviceSchema,
    ...(articleSchema ? [articleSchema] : []),
  ];

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="graphic design agency, branding agency, web development company, UI UX design, motion graphics, video editing services, social media management, illustration services, photography services, digital marketing agency, creative agency Nigeria, website design Nigeria, logo design, brand identity design, creative training academy, CREVOS LTD"
      />

      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <meta name="author" content="CREVOS LTD" />

      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="CREVOS LTD" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {canonical && <meta property="og:url" content={canonical} />}

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={imageAlt} />
        </>
      )}

      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {image && (
        <>
          <meta name="twitter:image" content={image} />
          <meta name="twitter:image:alt" content={imageAlt} />
        </>
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": structuredData,
          }).replace(/</g, "\\u003c"),
        }}
      />
    </Helmet>
  );
}
