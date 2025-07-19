import { Button } from "@/components/ui/button";
import oceanBackground from "@/assets/ocean-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: `url(${oceanBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-wave"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Discover the water
            </h1>
            <p className="text-xl text-muted-foreground max-w-md">
              From pristine waters to majestic forests...we have it all
            </p>
            <Button variant="ocean" size="lg" className="mt-8">
              Start Your Journey Today
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Saltwater Fishing</h3>
              <p className="text-muted-foreground">
                Love Fishing? With some of the best spots available year-round from floats to the open sea, we catch fish for snook.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Marine Snorkelling</h3>
              <p className="text-muted-foreground">
                Explore and stand some of the most stunning marine waters on the planet, from Costa Rica and the Canary Islands to Hawaii and Thailand.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">All-Day Parasailing</h3>
              <p className="text-muted-foreground">
                Glide through the skies open from an overlanding gorgeous green bodies of ocean water to sun-swept vistas and woodlands hills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;