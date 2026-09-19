import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, canonical, image }) {

    const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CREVOS LTD",
    url: "https://crevosltd.com.ng",
    logo: "https://crevosltd.com.ng/logo.png",
    description:
      "Creative and digital agency offering graphic design, branding, web development, UI/UX design, motion graphics, video editing, photography, illustration, social media management and creative training.",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CREVOS LTD",
    url: "https://crevosltd.com.ng",
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
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="
            graphic design agency,
            branding agency,
            web development company,
            ui ux design,
            motion graphics,
            video editing services,
            social media management,
            illustration services,
            photography services,
            digital marketing agency,
            creative agency nigeria,
            website design nigeria,
            logo design,
            brand identity design,
            creative training academy,
            crevos ltd"
      />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {image && <meta property="og:image" content={image} />}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}
