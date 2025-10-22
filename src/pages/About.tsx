import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const playlists = [
    {
      name: "focus mode",
      subtitle: "deep work essentials",
      tracks: "42 tracks",
      firstTrack: "Weightless by Marconi Union"
    },
    {
      name: "code & chill",
      subtitle: "lo-fi beats for debugging",
      tracks: "87 tracks",
      firstTrack: "Drift by Kupla"
    },
    {
      name: "algorithm grind",
      subtitle: "high-energy coding sessions",
      tracks: "56 tracks",
      firstTrack: "Strobe by Deadmau5"
    }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)'
      }}
    >
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

            <div className="space-y-8 text-xl leading-relaxed" style={{ color: '#000' }}>
              <p className="font-medium">
                A software engineer and data scientist obsessed with the intersection of elegant code and intelligent systems.
              </p>
              <p>
                I build things that make databases faster, models smarter, and complex problems surprisingly simple.
              </p>
            </div>
          </div>

          {/* FIS Experience */}
          <div className="space-y-6" style={{ color: '#000' }}>
            <h2 className="text-4xl font-bold mb-6">Financial Engineering at Scale</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                At <strong>Fidelity Information Services (FIS)</strong>, I lived in the world of financial engines and high-stakes banking infrastructure. I was the engineer who got called when systems handling billions in loan transactions needed to evolve without breaking.
              </p>
              <p>
                The challenge? The Advanced Commercial Banking System was a beast—a labyrinth of SQL pipelines processing structured and unstructured loan data that couldn't afford a single miscalculation. I rewrote critical data flows, restructured service interfaces, and orchestrated migrations between legacy and modern platforms where the margin for error was exactly zero.
              </p>
              <p>
                The most fascinating part wasn't just making things faster—it was understanding how financial systems think, how they breathe, and how to make them more resilient without anyone noticing the surgery.
              </p>
            </div>
          </div>

          {/* Cognizant Experience */}
          <div className="space-y-6" style={{ color: '#000' }}>
            <h2 className="text-4xl font-bold mb-6">Microservices & Clean Code</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                After FIS, I joined <strong>Cognizant</strong>, where I discovered that building microservices is really just conducting an orchestra where every instrument has to stay perfectly in sync.
              </p>
              <p>
                I designed schemas that anticipated edge cases three months down the road, wrote Java and Spring Boot code that balanced elegance with performance, and most importantly, learned that the best code isn't the cleverest—it's the code that makes your teammates smile when they read it.
              </p>
              <p>
                I spent my days transforming abstract user stories into living, breathing APIs while maintaining the kind of test coverage that lets you deploy on a Friday afternoon without fear.
              </p>
            </div>
          </div>

          {/* Playlists */}
          <div className="space-y-8" style={{ color: '#000' }}>
            <h2 className="text-4xl font-bold">My Top Working Playlists</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {playlists.map((playlist, index) => (
                <div key={index} className="bg-black/10 backdrop-blur rounded-2xl p-6 space-y-3">
                  <h3 className="text-2xl font-bold">{playlist.name}</h3>
                  <p className="text-sm opacity-80">{playlist.subtitle}</p>
                  <p className="text-sm opacity-60">{playlist.tracks}</p>
                  <p className="text-xs opacity-50">First track: {playlist.firstTrack}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Work */}
          <div className="space-y-6" style={{ color: '#000' }}>
            <h2 className="text-4xl font-bold mb-6">Teaching SQL to Explain Itself</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                Currently, I'm a <strong>Data Analyst/Scientist at Santander US</strong>, where I get to play at the intersection of finance, data, and decision-making. But here's what actually excites me: I'm building a SQL Query Explanation & Optimization Engine that's basically a conversation between humans and databases.
              </p>
              <p>
                Think of it as teaching SQL to explain itself in plain English while simultaneously suggesting how it could be better. The engine uses FastAPI as its nervous system, PostgreSQL as its playground, and Ollama (a local LLM) as its translator.
              </p>
              <p>
                But the really interesting part is HypoPG—it lets me create hypothetical indexes that exist only in the query planner's imagination. I can test "what if we added this index?" without actually creating it. It's like being able to test-drive database optimizations in a parallel universe before committing to them in reality.
              </p>
              <p>
                The system doesn't just parse SQL or spit out generic suggestions. It analyzes execution plans, understands schema relationships, detects bottlenecks, and ranks optimizations by actual cost reduction. It's deterministic, runs entirely offline, and treats query optimization like a puzzle where every microsecond matters.
              </p>
            </div>
          </div>

          {/* Education & Projects */}
          <div className="space-y-6" style={{ color: '#000' }}>
            <h2 className="text-4xl font-bold mb-6">Research & Innovation</h2>
            <div className="text-lg leading-relaxed space-y-4">
              <p>
                At <strong>University of Delaware</strong>, I'm pursuing my Master's in Business Analytics and Information Management, which is really just a fancy way of saying I'm learning how to make machines understand business and business understand machines.
              </p>
              <p>
                <strong>HydroYield</strong> was an experiment in making plants talk—an IoT-integrated system that used real-time sensor data to predict crop yields before the plants even knew they were ready. We achieved accuracy that made agronomists curious, using Random Forest algorithms that learned from soil moisture, temperature gradients, and light exposure patterns that humans can't perceive.
              </p>
              <p>
                Then there was <strong>CryptoForecast</strong>, where I tried to predict the unpredictable: Bitcoin price movements. I built an ensemble of LSTM networks and reinforcement learning agents that detected market regime shifts and technical patterns. The system didn't just predict prices—it understood momentum, volatility clustering, and the peculiar way crypto markets move in waves. It was like teaching a machine to feel market sentiment, which is exactly as difficult and fascinating as it sounds.
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
