import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-16">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:bettinasosarohl@gmail.com"
                  className="text-accent hover:underline"
                >
                  bettinasosarohl@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">United Kingdom (GMT+1)</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
