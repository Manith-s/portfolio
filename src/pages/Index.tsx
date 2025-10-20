import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ScrollingImages from "@/components/ScrollingImages";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <ScrollingImages />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
