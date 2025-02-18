
import { Hero } from "@/components/Hero";
import { FeaturedPets } from "@/components/FeaturedPets";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedPets />
      <Footer />
    </div>
  );
};

export default Index;
