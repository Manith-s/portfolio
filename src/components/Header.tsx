import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMenu(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Logo - Always visible */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
            <span className="text-background font-bold text-sm">MS</span>
          </div>
          <span className="text-sm">© coded by Manith</span>
        </Link>
      </div>

      {/* Desktop Navigation - Always visible at top */}
      <nav className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-8">
        <Link to="/about" className="hover:text-accent transition-colors">About</Link>
        <Link to="/projects" className="hover:text-accent transition-colors">Projects</Link>
        <Link to="/gallery" className="hover:text-accent transition-colors">Gallery</Link>
        <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
      </nav>

      {/* Contact Link - Always visible top right */}
      <Link 
        to="/contact" 
        className="hidden md:flex fixed top-6 right-6 z-50 hover:text-accent transition-colors items-center gap-1"
      >
        Contact
        <span className="text-xs">↗</span>
      </Link>

      {/* MENU Button - appears on scroll */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`fixed top-6 right-6 z-50 px-8 py-3 rounded-full font-medium transition-all duration-300 ${
          showMenu 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-20 opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)',
          color: 'white'
        }}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </button>

      {/* Full Screen Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 flex items-center justify-center animate-fade-in"
          style={{
            background: 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)'
          }}
        >
          <nav className="flex flex-col items-center gap-8 text-white">
            <Link 
              to="/" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              home
            </Link>
            <Link 
              to="/about" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <Link 
              to="/projects" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              projects
            </Link>
            <Link 
              to="/gallery" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              gallery
            </Link>
            <Link 
              to="/blog" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              blog
            </Link>
            <Link 
              to="/contact" 
              className="text-6xl md:text-8xl font-light italic hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
