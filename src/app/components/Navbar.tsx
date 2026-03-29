import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect to make navbar "sticky premium"
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Our Models', id: 'models' },
    { name: 'Reviews', id: 'testimonials' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md py-3 shadow-lg border-b border-gold-500/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-yellow-200 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Sparkles className="text-black size-6" />
            </div>
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-serif font-bold tracking-widest bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity uppercase"
            >
              Belle Beauté
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-gray-200 hover:text-amber-400 uppercase tracking-widest transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold px-8 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-amber-500/30 uppercase text-xs tracking-tighter"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-400 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-serif text-white hover:text-amber-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('booking')}
            className="w-full bg-amber-500 text-black py-4 rounded-xl font-bold uppercase tracking-widest shadow-xl"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}