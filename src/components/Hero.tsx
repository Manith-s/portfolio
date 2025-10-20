import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Start animation after a brief delay
    const timer = setTimeout(() => setIsAnimating(true), 500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
            {text1.split('').map((char, index) => (
              <span
                key={`text1-${index}`}
                className="absolute inline-block animate-float-letter"
                style={{
                  animationDelay: `${index * 0.05}s`,
                  left: `${(index / text1.length) * 70}%`,
                  top: `${Math.sin(index) * 20}%`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
          <div className="relative h-[clamp(6rem,20vw,16rem)]">
            {text2.split('').map((char, index) => (
              <span
                key={`text2-${index}`}
                className="absolute inline-block animate-float-letter"
                style={{
                  animationDelay: `${(index + text1.length) * 0.05}s`,
                  left: `${(index / text2.length) * 50}%`,
                  top: `${Math.cos(index) * 20 + 20}%`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
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
