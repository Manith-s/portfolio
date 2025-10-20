import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              Profile Image
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Let's work together!
            </h2>

            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/contact">Get in touch</Link>
            </Button>

            <div className="pt-8">
              <a
                href="mailto:bettinasosarohl@gmail.com"
                className="text-lg hover:text-accent transition-colors"
              >
                bettinasosarohl@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
