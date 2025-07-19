import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroSection />
        <ToursSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
