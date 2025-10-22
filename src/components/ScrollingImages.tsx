const ScrollingImages = () => {
  const techImages = [
    "SQL Query Engine",
    "Database Architecture", 
    "Python Backend",
    "React Frontend",
    "AWS Cloud",
    "Docker Container",
    "API Design",
    "Machine Learning",
    "PostgreSQL",
    "FastAPI",
    "Node.js",
    "TypeScript",
  ];

  return (
    <section className="py-16 overflow-hidden bg-muted/30">
      <div className="space-y-8">
        {/* First row - scrolls right - duplicated for seamless loop */}
        <div className="flex gap-8">
          <div className="flex gap-8 animate-scroll-right">
            {[...techImages, ...techImages].map((tech, index) => (
              <div
                key={`row1-${index}`}
                className="inline-flex items-center justify-center min-w-[300px] h-40 bg-muted rounded-2xl px-8 flex-shrink-0"
              >
                <span className="text-xl font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - scrolls left - duplicated for seamless loop */}
        <div className="flex gap-8">
          <div className="flex gap-8 animate-scroll-left">
            {[...techImages, ...techImages].map((tech, index) => (
              <div
                key={`row2-${index}`}
                className="inline-flex items-center justify-center min-w-[300px] h-40 bg-muted rounded-2xl px-8 flex-shrink-0"
              >
                <span className="text-xl font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingImages;
