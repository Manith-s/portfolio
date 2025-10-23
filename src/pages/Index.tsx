import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechShowcase from "@/components/TechShowcase";
import ScrollingImages from "@/components/ScrollingImages";
import CursorFollower from "@/components/CursorFollower";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorFollower />
      <Header />
      <Hero />
      <TechShowcase />
      <ScrollingImages />
      <About />
      
      {/* View Projects Section */}
      <section className="py-32 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Database whisperer | Backend architect | Data systems engineer | Fascinated by the elegant complexity of systems that scale and the art of making difficult problems look easy.
          </p>
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-6">
            <Link to="/projects">View Projects</Link>
          </Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
