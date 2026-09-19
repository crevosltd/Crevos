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
  { href: "/#hero", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#training", label: "Academy" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Get in Touch", isButton: true },
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
    link: "/webprojects",
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

export const projects = [
  {
    id: 1,
    title: "Signalist Stock tracker App",
    description:
      "Signalist is a full-stack stock companion built with Next.js (App Router). It lets users: Sign up and sign in (email + password), Build a personal watchlist, Search and browse stocks (via Finnhub), View stock details and watchlist status and Receive email automation (welcome email + daily market news summaries)",
    image: "/projects/signalist.png",
    tags: ["Nextjs", "Tailwind", "MongoDb", "Nodejs"],
    demoUrl: "https://signalist-stock-tracker-app-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/Signalist_stock-tracker-app.git",
  },
  {
    id: 2,
    title: "Crevos Website",
    description:
      "A modern, responsive website built with React, Tailwind CSS and GSAP, showcasing crevos services, portfolio, and appointment booking.",
    image: "/projects/crevos.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://crevosltd.com.ng",
    githubUrl: "https://github.com/crevosltd/Crevos.git",
  },
  {
    id: 3,
    title: "Adediran Nathaniel Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Tailwind CSS, showcasing Adediran Nathaniel's work, skills, and experience as a Blockchain Data Analyst and Researcher.",
    image: "/projects/angelnath.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://angelnath-portfolio.vercel.app",
    githubUrl: "https://github.com/only1angelnath/angelnath-portfolio.git",
  },
  {
    id: 4,
    title: "Police Radio Code App landing page",
    description:
      "This is a landing page for a app that is used to Decode Police, Fire, and Emergency Codes used by First Responders across the Globe. The app is only available in US, Australia, Canada and Uk",
    image: "/projects/policeradiocodeapp.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://policeradiocode.com/",
    githubUrl: "https://github.com/Snofts/PoliceRadioCodeApp.git",
  },
  {
    id: 5,
    title: "Brainwave website",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Brainwave.png",
    tags: ["React", "Tailwind"],
    demoUrl: "https://brainwave-pi-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/Brainwave.git",
  },
  {
    id: 6,
    title: "Zentry Landing Page",
    description:
      "This is a Gaming paltform landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that conveys the feel of gaming",
    image: "/projects/Zentry.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://zentry-awwward-website.vercel.app/",
    githubUrl: "https://github.com/Snofts/zentry-awward-website.git",
  },
  {
    id: 7,
    title: "Phenz Ecommerce Wordpress Website",
    description:
      "This is an Ecommerce website built with Wordpress, Html, CSS, JS, and woocommerce. The website is fully functional and mobile responsive with filters for products, user login, payment integration etc.",
    image: "/projects/Phenz.png",
    tags: ["Wordpress", "Html", "CSS", "JS"],
    demoUrl: "https://phenz.shop",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Phenz Fullstack Ecommerce",
    description:
      "This is a replicated Fullstack Ecommerce of Phenz website built with ReactJs, Tailwindcss, Express, MongoDB and Nodejs. The website is fully functional and mobile responsive with filters for products, user login, payment integration etc. NT: The backend will take time to load because it is hosted on Netlify.",
    image: "/projects/Phenz.png",
    tags: ["ReactJs", "Tailwindcss", "Express", "MongoDB", "Nodejs"],
    demoUrl: "https://phenz-ecommerce-frontend.vercel.app/",
    githubUrl: "https://github.com/Snofts/Phenz-Ecommerce.git",
  },
  {
    id: 9,
    title: "Contract Safety Agreement Form",
    description:
      "This is a contract safety agreement form built with Wordpress, HTML, CSS and JS. The form is used to collect information from users and store it in a database. The form is also used to generate a PDF document that is sent to the user via email.",
    image: "/projects/poshsafety.png",
    tags: ["Wordpress", "HTML", "CSS", "JS"],
    demoUrl: "https://app.poshsafety.com/dominium/",
    githubUrl: "#",
  },
  {
    id: 10,
    title: "Spylt Clone Landing Page",
    description:
      "This is a Spylt website landing page built with ReactJs, Tailwindcss and GSAP. The website is built with animations that are catchy and inviting customers to buy.",
    image: "/projects/Spylt.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://spylt-beta-beryl.vercel.app/",
    githubUrl: "https://github.com/Snofts/Spylt-.git",
  },
  {
    id: 11,
    title: "CodeX – AI Chat Assistant",
    description:
      "CodeX is a simple AI-powered chatbot web app built with Node.js and plain JavaScript, using the Groq API for fast and intelligent responses. Users can chat with an AI assistant in real-time through a clean and responsive frontend.",
    image: "/projects/Codex.png",
    tags: ["React", "Tailwind", "GSAP"],
    demoUrl: "https://code-x-self.vercel.app/",
    githubUrl: "https://github.com/Snofts/codeX.git",
  },
  {
    id: 12,
    title: "Promptopia",
    description:
      "Promptopia is a modern, full-stack web application built with Next.js 13, MongoDB, and Tailwind CSS. It allows users to create, share, and discover AI prompts.",
    image: "/projects/promptopia.png",
    tags: ["Next.js", "Tailwind", "GSAP"],
    demoUrl: "https://promptopia-rho-three-48.vercel.app/",
    githubUrl: "https://github.com/Snofts/promptopia.git",
  },
];



export const trainings = [
  {
    number: "01",
    title: "Digital Skills",
    description:
      "Master industry-standard software for design, video editing, and digital content creation.",
    color: "primary",
    numberClass: "bg-primary/70",
    items: ["Adobe Creative Suite", "Motion Graphics", "Web Development etc."],
  },
  {
    number: "02",
    title: "Financial Education",
    description:
      "Build practical investment skills, understand personal finance, and learn how to make better financial decisions.",
    color: "secondary",
    numberClass: "bg-secondary/70",
    items: ["Shares & Stocks", "Mutual Funds", "Savings & Investments"],
  },
  {
    number: "03",
    title: "Business Skills",
    description:
      "Management consultancy and professional development for creative entrepreneurs.",
    color: "accent",
    numberClass: "bg-accent/70",
    items: ["Social media management", "Client Relations", "Business Strategy"],
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