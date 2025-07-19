import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Waves className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Oceanica</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Tours</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <Button variant="ocean" size="lg">
            Start a Journey
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;