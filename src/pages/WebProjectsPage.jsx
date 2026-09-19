import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import SEO from "../components/Seo";
import { projects } from "../assets/assets";

const WebProjectsPage = () => {
  return (
    <main className="bg-dark text-light antialiased overflow-x-hidden">
      <SEO
        title="Web Development Portfolio | CREVOS LTD"
        description="Explore responsive websites, web applications and digital solutions designed and developed by CREVOS LTD."
        canonical="https://crevosltd.com.ng/webprojects"
        image="public/projects/crevos.png"
      />
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
                    loading="lazy"
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
