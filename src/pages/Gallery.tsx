import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Gallery = () => {
  const galleryItems = [
    { id: 1, title: "System Architecture Diagrams", type: "Design" },
    { id: 2, title: "Database Schema Visualizations", type: "Technical" },
    { id: 3, title: "API Design Patterns", type: "Code" },
    { id: 4, title: "ML Model Performance Charts", type: "Data" },
    { id: 5, title: "Query Execution Plans", type: "Analysis" },
    { id: 6, title: "Microservices Architecture", type: "Design" },
    { id: 7, title: "Data Pipeline Flows", type: "Technical" },
    { id: 8, title: "Optimization Metrics", type: "Analysis" },
    { id: 9, title: "Code Structure Diagrams", type: "Documentation" },
    { id: 10, title: "Performance Benchmarks", type: "Data" },
    { id: 11, title: "Infrastructure Design", type: "Cloud" },
    { id: 12, title: "Algorithm Visualizations", type: "CS Theory" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CursorFollower />
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Hero */}
          <div className="mb-16 text-center">
            <h1 className="text-8xl font-bold mb-6 leading-none">web gallery</h1>
            <h2 className="text-4xl font-bold mb-4">Design Gallery</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of my technical work, visualizations, and system designs featuring various approaches to solving complex problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer relative"
              >
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-6xl font-black opacity-20 mb-4 group-hover:opacity-30 transition-opacity">
                    {"{ }"}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <span className="text-sm text-muted-foreground font-mono">{item.type}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-sm">View Project →</span>
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

export default Gallery;
