import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// Import all your images
import graphicsImg from "../assets/graphics.png";
import motionImg from "../assets/adobe-after-effects.png"; // change filename as needed
import videoImg from "../assets/reels-video.png";
import photographyImg from "../assets/camera.png";
import codingImg from "../assets/coding.png";
import uiuxImg from "../assets/figma.png";
import illustrationImg from "../assets/illustration.png";
import socialImg from "../assets/social-media.png";
import academyImg from "../assets/graduate.png";

const iconMap = {
  graphics: graphicsImg,
  motion: motionImg,
  video: videoImg,
  photography: photographyImg,
  coding: codingImg,
  uiux: uiuxImg,
  illustration: illustrationImg,
  social: socialImg,
  academy: academyImg,
};

export default function ServiceCard({
  iconKey,
  image,
  title,
  description,
  color = "primary",
}) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  const colorClasses = {
    primary: "bg-primary text-primary border-primary",
    secondary: "bg-secondary text-secondary border-secondary",
    accent: "bg-accent text-accent border-accent",
  };

  const currentColor = colorClasses[color] || colorClasses.primary;
  const iconSrc = iconMap[iconKey];

  return (
    <div
      ref={cardRef}
      className="service-card group bg-primary/10 rounded-2xl overflow-hidden shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/20" />

        
      </div>
      <div
          className={`absolute top-35 z-2000 left-6 w-14 h-14 rounded-full ${currentColor.split(" ")[0]} flex items-center justify-center shadow-lg border-4 border-primary/10`}
        >
          {iconSrc ? (
            <img src={iconSrc} alt={title} className="w-7 h-7 object-contain" />
          ) : (
            <span className="text-2xl">📌</span>
          )}
        </div>

      <div className="pt-10 px-6 pb-7">
        <h3 className="font-display text-xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
