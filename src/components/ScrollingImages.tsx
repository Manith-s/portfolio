import { useEffect, useState } from "react";

const ScrollingImages = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollOffset(scrollY * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techImages = [
    "StyleSync PCA",
    "Architecture Diagram", 
    "Catapult Trading",
    "M31 Controller",
    "Tech Stack",
    "Mobile App",
    "UI Design",
    "Code Editor"
  ];

  return (
    <section className="py-16 overflow-hidden bg-background">
      {/* First row - scrolls left */}
      <div className="mb-8">
        <div 
          className="flex gap-8 whitespace-nowrap"
          style={{
            transform: `translateX(-${scrollOffset}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {[...techImages, ...techImages].map((name, index) => (
            <div 
              key={`row1-${index}`}
              className="flex-shrink-0 w-[400px] h-[280px] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* Second row - scrolls right */}
      <div>
        <div 
          className="flex gap-8 whitespace-nowrap"
          style={{
            transform: `translateX(${scrollOffset - 200}px)`,
            transition: 'transform 0.1s linear'
          }}
        >
          {[...techImages, ...techImages].map((name, index) => (
            <div 
              key={`row2-${index}`}
              className="flex-shrink-0 w-[400px] h-[280px] bg-muted rounded-2xl flex items-center justify-center text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingImages;
