import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Gallery = () => {
  const galleryItems = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Item ${i + 1}`,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-6xl font-bold mb-16">Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="aspect-square bg-muted rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
