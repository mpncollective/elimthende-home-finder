import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#accommodation", label: "Accommodation" },
    { href: "#amenities", label: "Amenities" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Elimthende Properties & Logistics" className="h-14 md:h-20 w-auto" />
          </a>

          {/* Desktop Navigation with Glassmorphism */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-white/20">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 px-4 py-2 rounded-full ${
                    isScrolled 
                      ? 'text-muted-foreground hover:text-foreground hover:bg-background/50' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              className={`gap-2 transition-all duration-200 ${
                isScrolled 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm' 
                  : 'bg-white/10 border border-white/30 text-white hover:bg-white/20'
              }`} 
              asChild
            >
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
          <nav className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full mt-2" asChild>
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
