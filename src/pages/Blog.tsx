import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web3 Development",
      date: "March 15, 2024",
      excerpt: "Exploring the latest trends and technologies shaping the decentralized web...",
    },
    {
      id: 2,
      title: "AI and Creative Coding",
      date: "February 28, 2024",
      excerpt: "How artificial intelligence is transforming the way we approach creative development...",
    },
    {
      id: 3,
      title: "Building Scalable DeFi Applications",
      date: "February 10, 2024",
      excerpt: "Best practices and lessons learned from building production-ready DeFi platforms...",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-6xl font-bold mb-16">Blog</h1>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-border pb-12 last:border-0">
                <time className="text-sm text-muted-foreground">{post.date}</time>
                <h2 className="text-3xl font-bold mt-2 mb-4 hover:text-accent transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
