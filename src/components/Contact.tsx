import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-muted">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Profile
                </div>
              </div>
              <h2 className="text-5xl font-bold leading-tight" style={{ color: 'white' }}>
                Let's work together!
              </h2>
            </div>

            <div className="pt-8">
              <a
                href="mailto:bettinasosarohl@gmail.com"
                className="text-lg transition-colors inline-block px-6 py-3 rounded-full border"
                style={{ color: 'white', borderColor: 'white' }}
              >
                bettinasosarohl@gmail.com
              </a>
            </div>

            <div className="pt-16 space-y-2" style={{ color: '#666' }}>
              <p>AI/LLM enthusiast | Cutting-edge tech</p>
              <p>advocate | Web3 builder | Passionate</p>
              <p>about using technology to make the world</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              asChild 
              size="lg" 
              className="rounded-full w-64 h-64 text-xl"
              style={{ 
                background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)',
                color: 'white'
              }}
            >
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
