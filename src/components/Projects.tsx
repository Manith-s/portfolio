import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectImages = [
    { id: 1, title: "StyleSync PCA", alt: "StyleSync PCA Analysis" },
    { id: 2, title: "StyleSync Diagram", alt: "StyleSync Architecture Diagram" },
    { id: 3, title: "Catapult Trading", alt: "Catapult Trading Dashboard" },
    { id: 4, title: "M31 Controller", alt: "M31 MIDI Controller" },
    { id: 5, title: "M31 Specs", alt: "M31 Technical Specifications" },
    { id: 6, title: "Axo Prototype", alt: "Axo Prototype Design" },
    { id: 7, title: "M31 App", alt: "M31 Mobile Application" },
    { id: 8, title: "StyleSync Hero", alt: "StyleSync Hero Design" },
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="aspect-video bg-muted rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                {project.title}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
