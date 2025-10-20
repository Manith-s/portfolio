import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)'
      }}
    >
      <Header />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-8xl font-bold mb-12" style={{ color: '#000' }}>
                I'm Bettina
              </h1>
              
              <div className="w-96 h-96 rounded-full overflow-hidden bg-muted">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  Profile Image
                </div>
              </div>
            </div>

            <div className="space-y-8 text-xl leading-relaxed" style={{ color: '#000' }}>
              <p>
                A software engineer and designer with a passion for innovation and cutting-edge technology.
              </p>
              <p>
                I have a strong track record of building and deploying successful products.
              </p>
              <p>
                At <strong>Sojo</strong>, I was the founding full-stack engineer, responsible for the design, development, and deployment of the company's core platform. I built a scalable and user-friendly platform that enabled users to easily manage their wardrobe and reduce textile waste.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
