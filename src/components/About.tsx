import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 relative aspect-video rounded-2xl overflow-hidden bg-muted">
          <iframe
            src="https://player.vimeo.com/video/362997602?h=1234567890&autoplay=1&loop=1&muted=1&background=1"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Portfolio Video"
          />
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            A software engineer with a passion for innovation and cutting-edge technology.
          </p>
          <p>
            Particularly interested in the intersection of art, design, and software. I believe that these disciplines can be combined to create truly transformative experiences.
          </p>
          <p>
            Currently the founding full stack software engineer @Catapult a DeFi startup.
          </p>
          <p>
            My projects have received multiple awards in the past, and I am always looking for new and innovative ways to use my skills to make a positive impact on the world.
          </p>

          <div className="pt-8">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/about">About me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
