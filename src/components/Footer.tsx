import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      timeZone: 'Europe/London'
    });
  };

  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            AI/LLM enthusiast | Cutting-edge tech advocate | Web3 builder | Passionate about using technology to make the world a better place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold mb-2">Version</h3>
            <p className="text-muted-foreground">{currentYear} © Edition</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Timezone</h3>
            <p className="text-muted-foreground">{getCurrentTime()} UK (GMT+1)</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Socials</h3>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/bettysrohl"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bettinasosa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bettina-sosa/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
