import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-12">About Me</h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm a software engineer with a passion for innovation and cutting-edge technology.
            </p>
            <p>
              My work focuses on the intersection of art, design, and software. I believe that these disciplines can be combined to create truly transformative experiences that push the boundaries of what's possible.
            </p>
            <p>
              Currently, I'm the founding full stack software engineer at Catapult, a DeFi startup where I'm building the future of decentralized finance.
            </p>
            <p>
              Throughout my career, my projects have received multiple awards, and I'm constantly exploring new and innovative ways to use technology to make a positive impact on the world.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
