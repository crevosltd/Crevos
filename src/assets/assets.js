import graphicsImg from "../assets/Graphics-service.jpg";
import motionImg from "../assets/Motion-service.jpg";
import videoImg from "../assets/Editing-service.jpg";
import photographyImg from "../assets/photograpy-service.jpg";
import codingImg from "../assets/Coding-service.jpg";
import uiuxImg from "../assets/UIUX-service.jpg";
import illustrationImg from "../assets/Illustration-service.jpg";
import socialImg from "../assets/Social-service.jpg";
import academyImg from "../assets/Academy-service.jpg";

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
  },
  {
    iconKey: "motion",
    title: "Motion Graphics",
    description:
      "Dynamic animations and visual effects that bring your brand story to life.",
    color: "secondary",
    image: motionImg,
  },
  {
    iconKey: "video",
    title: "Video Editing",
    description:
      "Professional post-production, color grading, and storytelling through seamless cuts.",
    color: "accent",
    image: videoImg,
  },
  {
    iconKey: "photography",
    title: "Photography",
    description:
      "Commercial, product, and portrait photography with artistic vision and technical precision.",
    color: "primary",
    image: photographyImg,
  },
  {
    iconKey: "coding",
    title: "Coding & Development",
    description:
      "Web development, applications, and digital solutions built with modern technologies.",
    color: "secondary",
    image: codingImg,
  },
  {
    iconKey: "uiux",
    title: "UI/UX Design",
    description:
      "User-centered interface design that balances aesthetics with intuitive functionality.",
    color: "accent",
    image: uiuxImg,
  },
  {
    iconKey: "illustration",
    title: "Illustration & Digital Art",
    description:
      "Custom illustrations, digital paintings, and artistic visuals that tell compelling stories including Children book illustration.",
    color: "primary",
    image: illustrationImg,
  },
  {
    iconKey: "social",
    title: "Social Media Management",
    description:
      "Strategic social media campaigns, content creation, and community engagement that grow your brand.",
    color: "secondary",
    image: socialImg,
  },
  {
    iconKey: "academy",
    title: "Crevos Academy",
    description:
      "Professional training and workshops in digital skills, traditional arts, and creative entrepreneurship.",
    color: "accent",
    image: academyImg,
  },
];

// src/data/testimonials.js
export const testimonials = [
  {
    id: 1,
    name: "Aisha Bello",
    role: "Creative Director, Lumina Studios",
    image: "/assets/testimonial1.jpg", // replace with real images later
    quote:
      "Crevos transformed our brand identity completely. Their blend of digital expertise and traditional artistry is unmatched. The team delivered beyond our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Okonkwo",
    role: "Founder, TechNova",
    image: "/assets/testimonial2.jpg",
    quote:
      "Working with Crevos on our motion graphics and UI/UX was a game changer. Their attention to detail and creative vision helped us stand out in a competitive market.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Yusuf",
    role: "CEO, Adire Heritage",
    image: "/assets/testimonial3.jpg",
    quote:
      "The Crevos Academy training was exceptional. My team gained practical skills in both digital tools and traditional textile design. Highly recommended!",
    rating: 5,
  },
];
