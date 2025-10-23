import { Database, Cloud, Code, Cpu, Server, GitBranch, Box, Workflow, Lock, Zap, Terminal, Layers } from "lucide-react";

const ScrollingImages = () => {
  const techRow1 = [
    { name: "PostgreSQL", icon: Database },
    { name: "Docker", icon: Box },
    { name: "Python", icon: Code },
    { name: "FastAPI", icon: Zap },
    { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitBranch },
  ];

  const techRow2 = [
    { name: "Node.js", icon: Server },
    { name: "APIs", icon: Workflow },
    { name: "Machine Learning", icon: Cpu },
    { name: "TypeScript", icon: Terminal },
    { name: "SQL", icon: Database },
    { name: "Microservices", icon: Layers },
  ];

  return (
    <section className="py-16 overflow-hidden bg-muted/30">
      <div className="space-y-8">
        {/* First row - scrolls right */}
        <div className="flex gap-8">
          <div className="flex gap-8 animate-scroll-right">
            {[...techRow1, ...techRow1, ...techRow1].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`row1-${index}`}
                  className="inline-flex flex-col items-center justify-center min-w-[280px] h-40 bg-gradient-to-br from-muted to-muted/50 rounded-2xl px-8 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50"
                  style={{ 
                    transform: 'perspective(1000px) rotateX(2deg)',
                  }}
                >
                  <Icon className="w-12 h-12 mb-3 text-primary" strokeWidth={1.5} />
                  <span className="text-xl font-semibold">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second row - scrolls left */}
        <div className="flex gap-8">
          <div className="flex gap-8 animate-scroll-left">
            {[...techRow2, ...techRow2, ...techRow2].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`row2-${index}`}
                  className="inline-flex flex-col items-center justify-center min-w-[280px] h-40 bg-gradient-to-br from-muted to-muted/50 rounded-2xl px-8 flex-shrink-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border/50"
                  style={{ 
                    transform: 'perspective(1000px) rotateX(2deg)',
                  }}
                >
                  <Icon className="w-12 h-12 mb-3 text-primary" strokeWidth={1.5} />
                  <span className="text-xl font-semibold">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingImages;
