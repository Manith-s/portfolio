import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    const timer = setTimeout(() => setIsAnimating(true), 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  const text1 = "Creativity is";
  const text2 = "my craft";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Blue dot cursor follower */}
      <div
        className="fixed w-4 h-4 bg-accent rounded-full pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-7xl w-full relative">
        {/* Animated scattered text */}
        <div className={`text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] tracking-tight transition-all duration-1000 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative h-[clamp(6rem,20vw,16rem)]">
            {text1.split('').map((char, index) => {
              const randomX = Math.sin(index * 2.5) * 100;
              const randomY = Math.cos(index * 1.8) * 150;
              
              return (
                <span
                  key={`text1-${index}`}
                  className="absolute inline-block transition-all duration-700 ease-out"
                  style={{
                    left: `${(index / text1.length) * 70}%`,
                    top: `${Math.sin(index) * 20}%`,
                    transform: `translate(${randomX * scrollProgress}px, ${randomY * scrollProgress}px) rotate(${scrollProgress * (index % 2 ? 45 : -45)}deg)`,
                    opacity: 1 - scrollProgress * 0.3,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
          <div className="relative h-[clamp(6rem,20vw,16rem)]">
            {text2.split('').map((char, index) => {
              const randomX = Math.cos(index * 2.2) * 120;
              const randomY = Math.sin(index * 1.5) * 180;
              
              return (
                <span
                  key={`text2-${index}`}
                  className="absolute inline-block transition-all duration-700 ease-out"
                  style={{
                    left: `${(index / text2.length) * 50}%`,
                    top: `${Math.cos(index) * 20 + 20}%`,
                    transform: `translate(${randomX * scrollProgress}px, ${randomY * scrollProgress}px) rotate(${scrollProgress * (index % 2 ? -45 : 45)}deg)`,
                    opacity: 1 - scrollProgress * 0.3,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 right-12 flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors group"
        aria-label="Scroll down"
      >
        Scroll
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
