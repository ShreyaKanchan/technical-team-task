import { Card, CardContent, CardFooter } from "@/components/ui/card";
import puntaMonitaImage from "@/assets/punta-monita.jpg";

const ToursSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-ocean transition-all duration-300">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={puntaMonitaImage} 
                  alt="Punta Monita"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Punta Monita</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="text-primary font-bold text-lg">
                  from $399 pp
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;