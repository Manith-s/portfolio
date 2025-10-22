import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "SQL Query Optimization Engine",
      description: "Local offline SQL analysis, explanation & optimization using FastAPI, PostgreSQL, and LLM integration",
      year: "2024",
      category: "Backend / AI",
      slug: "sql-query-engine",
    },
    {
      id: 2,
      title: "CryptoForecast",
      description: "Bitcoin price prediction using LSTM networks and reinforcement learning with 74% directional accuracy",
      year: "2021",
      category: "Machine Learning",
      slug: "cryptoforecast",
    },
    {
      id: 3,
      title: "HydroYield",
      description: "IoT-integrated smart hydroponic system for crop yield prediction with 85% accuracy",
      year: "2022",
      category: "IoT / ML",
      slug: "hydroyield",
    },
    {
      id: 4,
      title: "University Scheduler",
      description: "Constraint-based course scheduling system using OR-Tools and Node.js",
      year: "2025",
      category: "Full Stack",
      slug: "university-scheduler",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-6xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-muted-foreground mb-16">Projects where code meets intelligence</p>
          
          <div className="space-y-2">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="block border-b border-border pb-8 pt-8 hover:bg-muted/30 transition-all duration-300 px-6 rounded-lg"
              >
                <div className="grid md:grid-cols-[1fr,auto] gap-8 items-center">
                  <div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <h2 className="text-4xl font-bold mt-2 mb-3 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-2">{project.description}</p>
                    <span className="text-sm font-mono text-accent">{project.category}</span>
                  </div>
                  
                  {hoveredProject === project.id && (
                    <div className="aspect-video w-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center animate-fade-in">
                      <div className="text-center">
                        <div className="text-4xl font-black opacity-50">{project.id}</div>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
