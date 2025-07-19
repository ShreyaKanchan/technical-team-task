import { Button } from "@/components/ui/button";
import oceanBackground from "@/assets/Frame5.jpg";

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
      <div className="absolute inset-0"></div>
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
          
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg p-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Saltwater Fishing</h3>
              <p className="text-white/80">
                Love fishing? With some of the best spots available year-round, from coastline to the deep sea, you won't be short for choice.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Marine Snorkelling</h3>
              <p className="text-white/80">
                Go deep sea diving in some of the most pristine waters on the planet, from Costa Rica and the Canary Islands to Hawaii and Thailand.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">All-Day Parasailing</h3>
              <p className="text-white/80">
                Glide through the wide open, fresh air overlooking gorgeous open bodies of ocean water to sun-swept vistas and woodland hills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;