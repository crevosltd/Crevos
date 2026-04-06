import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// Import all your images
import graphicsImg from '../assets/graphics.png';
import motionImg from '../assets/adobe-after-effects.png';        // change filename as needed
import videoImg from '../assets/reels-video.png';
import photographyImg from '../assets/camera.png';
import codingImg from '../assets/coding.png';
import uiuxImg from '../assets/figma.png';
import illustrationImg from '../assets/illustration.png';
import socialImg from '../assets/social-media.png';
import academyImg from '../assets/graduate.png';

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
  title, 
  description, 
  color = "primary" 
}) {
  const cardRef = useRef(null);

  // useEffect(() => {
  //   if (!cardRef.current) return;

  //   gsap.from(cardRef.current, {
  //     scrollTrigger: {
  //       trigger: cardRef.current,
  //       start: "top top",
  //       toggleActions: "play none none reverse",
  //       markers: true,
  //     },
  //     opacity: 0,
  //     y: 30,
  //     duration: 0.6,
  //     ease: "power2.out"
  //   });
  // }, []);

  useEffect(() => {
  if (!cardRef.current) return;

  gsap.fromTo(
    cardRef.current,
    {
      opacity: 0,      // Starting state
      y: 60,           // Starts 60px below (you can use negative for above: y: -60)
    },
    {
      opacity: 1,      // Ending state
      y: 0,            // Moves to its original position
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",        // When the top of the card reaches 85% of viewport
        toggleActions: "play none none reverse",  // Play on enter, reverse on leave
      }
    }
  );

}, []);

  const colorClasses = {
    primary: "bg-primary/20 text-primary hover:border-primary/50 from-primary/10",
    secondary: "bg-secondary/20 text-secondary hover:border-secondary/50 from-secondary/10",
    accent: "bg-accent/20 text-accent hover:border-accent/50 from-accent/10",
  };

  const currentColor = colorClasses[color] || colorClasses.primary;
  const iconSrc = iconMap[iconKey];

  return (
    <div 
      ref={cardRef}
      className={`service-card group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-${currentColor}/50 relative overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.split(' ')[3]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className="relative z-10">
          {iconSrc ? (
            <img src={iconSrc} alt={title} className="w-12 h-12 object-contain" />
          ) : (
            <span className="text-2xl">📌</span> // fallback
          )}
        {/* </div> */}
        <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}