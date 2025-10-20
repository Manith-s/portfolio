import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              A software engineer with a passion for innovation and cutting-edge technology.
            </p>
            <p>
              Particularly interested in the intersection of art, design, and software. I believe that these disciplines can be combined to create truly transformative experiences.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Currently the founding full stack software engineer @Catapult a DeFi startup.
            </p>
            <p>
              My projects have received multiple awards in the past, and I am always looking for new and innovative ways to use my skills to make a positive impact on the world.
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
