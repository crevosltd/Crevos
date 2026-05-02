import graphicsImg from "../assets/Graphics-service.jpg";
import motionImg from "../assets/Motion-service.jpg";
import videoImg from "../assets/Editing-service.jpg";
import photographyImg from "../assets/photograpy-service.jpg";
import codingImg from "../assets/Coding-service.jpg";
import uiuxImg from "../assets/UIUX-service.jpg";
import illustrationImg from "../assets/Illustration-service.jpg";
import socialImg from "../assets/Social-service.jpg";
import academyImg from "../assets/Academy-service.jpg";
import bridgewave from "./Bridgewave.PNG"
import Aurora from "../assets/Aurora.png"
import Fadom from "../assets/fadom.png"
import Mayo from "../assets/Mayo.jpg"

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#training", label: "Academy" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Get in Touch", isButton: true },
];

export const services = [
  {
    iconKey: "graphics",
    title: "Graphic Design",
    description:
      "Brand identity, marketing materials, and visual storytelling that captivates and converts.",
    color: "primary",
    image: graphicsImg,
    link: "https://drive.google.com/file/d/1PZoZmApnyx26W1ozHjKc2YppghC4uFXe/view?usp=sharing",
  },
  {
    iconKey: "motion",
    title: "Motion Graphics",
    description:
      "Dynamic animations and visual effects that bring your brand story to life.",
    color: "secondary",
    image: motionImg,
    link: "https://www.behance.net/gallery/191749893/Motion-Graphics",
  },
  {
    iconKey: "video",
    title: "Video Editing",
    description:
      "Professional post-production, color grading, and storytelling through seamless cuts.",
    color: "accent",
    image: videoImg,
    link: "https://www.behance.net/gallery/204850993/Video-Editing",
  },
  {
    iconKey: "photography",
    title: "Photography",
    description:
      "Commercial, product, and portrait photography with artistic vision and technical precision.",
    color: "primary",
    image: photographyImg,
    link: "",
  },
  {
    iconKey: "coding",
    title: "Coding & Development",
    description:
      "Web development, applications, and digital solutions built with modern technologies.",
    color: "secondary",
    image: codingImg,
    link: "",
  },
  {
    iconKey: "uiux",
    title: "UI/UX Design",
    description:
      "User-centered interface design that balances aesthetics with intuitive functionality.",
    color: "accent",
    image: uiuxImg,
    link: "https://sociatap.com/matthewbabalola",
  },
  {
    iconKey: "illustration",
    title: "Illustration & Digital Art",
    description:
      "Custom illustrations, digital paintings, and artistic visuals that tell compelling stories including Children book illustration.",
    color: "primary",
    image: illustrationImg,
    link: "https://drive.google.com/file/d/1DYIzX0JnHw6eZtZxHiMDDb5cHELs3aMl/view?usp=sharing",
  },
  {
    iconKey: "social",
    title: "Social Media Management",
    description:
      "Strategic social media campaigns, content creation, and community engagement that grow your brand.",
    color: "secondary",
    image: socialImg,
    link: "",
  },
  {
    iconKey: "academy",
    title: "Crevos Academy",
    description:
      "Professional training and workshops in digital skills, traditional arts, and creative entrepreneurship.",
    color: "accent",
    image: academyImg,
    link: "",
  },
];

// src/data/testimonials.js
export const testimonials = [
  {
    id: 1,
    name: "Fadom Beauty",
    // role: "Creative Director, Lumina Studios",
    image: Fadom, // replace with real images later
    quote:
      "A complete digital transformation. From a stunning brand identity and social media management to a seamless booking website, the team handled it all.  The Result: We moved from manual scheduling to a fully automated system, significantly reducing booking friction and giving us a professional edge in the beauty market.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aurora Recovery Therapy",
    // role: "Founder, ",
    image: Aurora,
    quote:
      "Incredible versatility. They delivered a high-performing booking app, handled our graphics, and produced video content that truly resonates with our clients.The Result: The new app streamlined our patient intake process, while the high-quality video content boosted our social media engagement and brand trust across all platforms",
    rating: 5,
  },
  {
    id: 3,
    name: "MAYOSHUB",
    // role: "CEO, Adire Heritage",
    image: Mayo,
    quote:
      "The consistency in our branding and social media presence has been night and day. They took over our social media posting and strategy with total professionalism. The Result: Our online presence became more cohesive and active, resulting in better brand visibility and a more engaged community without us having to lift a finger",
    rating: 5,
  },
];

export const partners = [
  {
    id: 1,
    name: "Bridgewave",
    logo: bridgewave
  }
]