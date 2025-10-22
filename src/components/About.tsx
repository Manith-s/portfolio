import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              A software engineer and data scientist obsessed with building systems that make databases faster, models smarter, and complex problems surprisingly simple.
            </p>
            <p>
              Specializing in the intersection of backend architecture, data engineering, and AI. I architect solutions that transform abstract problems into elegant, scalable systems.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              My work spans financial infrastructure, microservices orchestration, and intelligent data systems—where every optimization is a small victory against entropy.
            </p>

            <div className="pt-8">
              <Button 
                asChild 
                size="lg" 
                className="rounded-full w-48 h-48 text-xl"
                style={{ backgroundColor: '#EF4444', color: 'white' }}
              >
                <Link to="/about">About me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
