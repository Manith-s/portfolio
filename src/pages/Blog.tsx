import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Teaching Databases to Explain Themselves",
      date: "January 2025",
      excerpt: "What if your database could tell you why a query is slow—in plain English? Building a SQL optimization engine that bridges the gap between database internals and human understanding using local LLMs and hypothetical indexes...",
      category: "Backend Engineering"
    },
    {
      id: 2,
      title: "The Art of Constraint Programming",
      date: "December 2024",
      excerpt: "How we used Google OR-Tools to solve the university scheduling problem—reducing course conflicts by 45% through intelligent constraint satisfaction. A deep dive into CP-SAT solvers and why they're better than brute force...",
      category: "Algorithms"
    },
    {
      id: 3,
      title: "From Financial Engines to Microservices",
      date: "November 2024",
      excerpt: "Lessons learned from working on billion-dollar banking systems at FIS. Why the margin for error is zero, how to migrate legacy systems without breaking production, and the surprising beauty of well-architected data flows...",
      category: "Software Architecture"
    },
    {
      id: 4,
      title: "Making AI Work Offline",
      date: "October 2024",
      excerpt: "Why running LLMs locally changes everything. Building AI-powered tools that work without cloud dependencies, respect privacy, and deliver deterministic results. A technical guide to Ollama integration and prompt engineering...",
      category: "AI / ML"
    },
    {
      id: 5,
      title: "The Psychology of Query Optimization",
      date: "September 2024",
      excerpt: "Every slow query is a mystery. Every optimization is a small victory against entropy. Exploring the human side of database performance tuning—understanding execution plans, cost estimation, and why sometimes the best index is no index at all...",
      category: "Data Engineering"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <CursorFollower />
      <Header />
      <main className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 py-24 px-8 bg-foreground text-background rounded-3xl text-center">
            <h1 className="text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl opacity-80">
              Thoughts & Ideas
            </p>
            <p className="text-lg opacity-60 mt-4">
              My collected thoughts on systems, data, and everything in between.
            </p>
          </div>

          {/* New Posts Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-bold">New Posts</h2>
              <button className="text-sm underline hover:no-underline">view all →</button>
            </div>
          </div>
          
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-border pb-12 last:border-0 group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <time className="text-sm text-muted-foreground">{post.date}</time>
                  <span className="text-xs font-mono text-accent">{post.category}</span>
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 text-sm font-medium hover:text-accent transition-colors">
                  Read more →
                </button>
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
