import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <div className="max-w-7xl w-full">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.95] tracking-tight">
          <span className="block">Creativity is</span>
          <span className="block">my craft</span>
        </h1>
        <h2 className="text-[clamp(2rem,8vw,6rem)] font-black leading-[0.95] tracking-tight mt-8">
          <span className="block">abstract</span>
          <span className="block">thinking is</span>
          <span className="block">my passion</span>
        </h2>
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
