import { Button } from "@/components/ui/button";
import oceanBackground from "@/assets/Frame5.jpg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen relative flex items-center"
      style={{
        backgroundImage: `url(${oceanBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <div className="flex flex-col h-full justify-start py-24 relative">
            {/* Heading */}
            <h1 className="text-white text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
              Discover the <br /> water
            </h1>

            {/* Subtext */}
            <p className="text-white text-xl sm:text-2xl font-light max-w-md mb-20">
              From pristine waters to majestic forests...<br />
              we have it all
            </p>

            {/* Arrow + Button Wrapper */}
            <div className="relative min-h-[20rem]">
              {/* Arrow */}
              <div className="absolute left-0 top-0 w-80 h-80 border-l-2 border-b-2 border-white" />

              {/* Button aligned with arrow tip */}
              <div className="pl-80 pt-80">
                <Button
                  variant="link"
                  size="lg"
                  className="text-white text-xl"
                >
                  Start Your Journey Today
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
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
