const TechShowcase = () => {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="text-center z-10 space-y-4 p-8">
              <div className="text-6xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {"{ CODE }"}
              </div>
              <div className="text-sm font-mono opacity-70">
                // where databases meet intelligence
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Making complex problems surprisingly simple
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build systems that don't just work—they think. From teaching SQL to explain itself in plain English, to orchestrating financial engines that process billions without breaking a sweat.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The best code isn't the cleverest. It's the code that makes your teammates smile when they read it, and makes impossible problems look easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechShowcase;
