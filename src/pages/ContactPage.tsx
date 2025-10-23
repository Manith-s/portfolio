import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <CursorFollower />
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-16">Get in Touch</h1>
          
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
