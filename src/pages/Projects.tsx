import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "StyleSync",
      description: "AI-powered style analysis and recommendation system using PCA",
      year: "2023",
    },
    {
      id: 2,
      title: "Catapult Trading",
      description: "DeFi trading dashboard with advanced analytics",
      year: "2023",
    },
    {
      id: 3,
      title: "M31 MIDI Controller",
      description: "Custom-built MIDI controller with companion mobile app",
      year: "2022",
    },
    {
      id: 4,
      title: "Axo",
      description: "Interactive prototype for creative expression",
      year: "2022",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-16">Projects</h1>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="border-b border-border pb-16 last:border-0">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="aspect-video bg-muted rounded-2xl">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      {project.title}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <h2 className="text-4xl font-bold mt-2 mb-4">{project.title}</h2>
                    <p className="text-lg text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
