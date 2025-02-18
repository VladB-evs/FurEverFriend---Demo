
import { PetCard } from "./PetCard";
import { useEffect, useState } from "react";
import { petfinderService } from "@/services/petfinder";
import { motion } from "framer-motion";

export const FeaturedPets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const featuredPets = await petfinderService.getFeaturedPets(6);
        setPets(featuredPets);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch pets');
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return (
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center items-center space-x-2"
          >
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
          </motion.div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-lg font-medium"
          >
            {error}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Featured Friends
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet some of our adorable companions looking for their forever homes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {pets.map((pet, index) => (
            <motion.div
              key={pet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PetCard 
                {...pet}
                onMeet={() => window.open(pet.url, '_blank')}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
