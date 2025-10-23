import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const About = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)'
      }}
    >
      <CursorFollower />
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl space-y-32">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-8xl font-bold mb-12" style={{ color: '#000' }}>
                I'm Manith
              </h1>
              
              <div className="w-96 h-96 rounded-full overflow-hidden bg-muted/20 backdrop-blur">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Profile Image
                </div>
              </div>
            </div>

            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#000' }}>
              <p className="text-xl font-medium">
                A software engineer obsessed with making databases confess their secrets and teaching machines to think smarter than their creators.
              </p>
              <p>
                I turn messy data into elegant systems, slow queries into speed demons, and abstract problems into surprisingly simple solutions.
              </p>
            </div>
          </div>

          {/* Experience Journey */}
          <div className="space-y-12" style={{ color: '#000' }}>
            <div>
              <h2 className="text-3xl font-bold mb-4">The Financial Beast Tamer</h2>
              <p className="text-lg leading-relaxed">
                At <strong>Fidelity Information Services</strong>, I became the person they called when billion-dollar loan systems needed surgery without anesthesia. The challenge wasn't just code—it was understanding how financial systems breathe, making them faster without anyone noticing the operation, and ensuring zero miscalculations when the stakes were measured in billions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">The API Orchestra Conductor</h2>
              <p className="text-lg leading-relaxed">
                <strong>Cognizant</strong> taught me that microservices are just orchestras where every instrument must stay in perfect sync. I learned that the best code isn't the cleverest—it's the code that makes your teammates smile when they read it, and lets you deploy on Friday afternoons without fear.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Teaching Databases to Speak Human</h2>
              <p className="text-lg leading-relaxed">
                Now at <strong>Santander US</strong>, I'm building something fascinating: a SQL engine that explains itself in plain English and suggests how it could be better. Using HypoPG, I can test-drive database optimizations in parallel universes before committing to reality. Every slow query is a mystery. Every optimization is a small victory against entropy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Making Plants Talk & Markets Confess</h2>
              <p className="text-lg leading-relaxed">
                <strong>HydroYield</strong> taught IoT sensors to predict crop yields before plants knew they were ready. <strong>CryptoForecast</strong> taught machines to feel market sentiment and predict Bitcoin's mood swings. Both projects shared one goal: making the unpredictable surprisingly predictable.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center py-16">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#000' }}>
              Let's work together!
            </h2>
            <a
              href="mailto:shashidharmanith@gmail.com"
              className="text-xl transition-colors inline-block px-8 py-4 rounded-full border-2"
              style={{ color: '#000', borderColor: '#000' }}
            >
              shashidharmanith@gmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
