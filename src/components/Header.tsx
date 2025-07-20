import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Waves, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Oceanica</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Tours</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
                        <Button variant="ocean" size="sm" className="text-sm">Start a journey</Button>

          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Tours</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
