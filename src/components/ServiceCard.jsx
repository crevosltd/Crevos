import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all your images
import graphicsImg from '../assets/graphics-design.png';
import motionImg from '../assets/adobe-after-effects.png';        // change filename as needed
import videoImg from '../assets/reels-video.png';
import photographyImg from '../assets/camera.png';
import codingImg from '../assets/coding-folder.png';
import uiuxImg from '../assets/figma.png';

const iconMap = {
  graphics: graphicsImg,
  motion: motionImg,
  video: videoImg,
  photography: photographyImg,
  coding: codingImg,
  uiux: uiuxImg,
};

export default function ServiceCard({ 
  iconKey, 
  title, 
  description, 
  color = "primary" 
}) {
  const cardRef = useRef(null);

//   useEffect(() => {
//     if (!cardRef.current) return;

//     gsap.from(cardRef.current, {
//       scrollTrigger: {
//         trigger: cardRef.current,
//         start: "top 85%",
//         toggleActions: "play none none reverse"
//       },
//       opacity: 0,
//       y: 30,
//       duration: 0.6,
//       ease: "power2.out"
//     });
//   }, []);

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