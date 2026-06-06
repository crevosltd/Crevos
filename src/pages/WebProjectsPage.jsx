import React, { useState } from "react";
import { ArrowRight, ExternalLink} from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
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

const WebProjectsPage = () => {
  return (
    <main className="bg-dark text-light antialiased overflow-x-hidden">
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-primary font-medium tracking-wider text-sm uppercase mb-4 block">
              Selected Work
            </span>

            <h1 className="font-hero text-4xl md:text-5xl font-bold text-white mb-6">
              Web Projects
            </h1>

            <p className="text-gray-400 max-w-2xl text-lg">
              A collection of websites, landing pages, web apps, and full-stack
              projects crafted with attention to detail, performance, and user
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-56 overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col min-h-[330px]">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4 pt-6 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                        aria-label={`View ${project.title} GitHub repository.`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebProjectsPage;