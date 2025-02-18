import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, X, Info } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { petfinderService } from '@/services/petfinder';
import { Footer } from '@/components/Footer';

interface Pet {
  id: string;
  name: string;
  age: string;
  breed: string;
  image: string;
  distance: string;
  location: string;
  description: string;
  url: string;
}

// Add this new component for the progress indicator
const ProgressIndicator = ({ current, total }: { current: number; total: number }) => (
  <div className="flex gap-2 justify-center mb-6">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i <= current ? 'w-8 bg-primary' : 'w-4 bg-gray-200'
        }`}
      />
    ))}
  </div>
);

export const PetMatch = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentPet, setCurrentPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedPets = await petfinderService.searchPets({
        limit: 10,
        status: 'adoptable'
      });
      setPets(fetchedPets);
      if (fetchedPets.length > 0) {
        setCurrentPet(fetchedPets[0]);
      }
    } catch (err) {
      setError('Failed to fetch pets. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSwipe = (liked: boolean) => {
    if (!currentPet) return;

    if (liked) {
      setShowDetails(true);
    } else {
      showNextPet();
    }
  };

  const showNextPet = () => {
    const currentIndex = pets.findIndex(pet => pet.id === currentPet?.id);
    if (currentIndex < pets.length - 1) {
      setCurrentPet(pets[currentIndex + 1]);
    } else {
      fetchPets(); // Fetch more pets when we run out
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-primary/20"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-red-500 text-lg font-medium">{error}</p>
          <Button 
            onClick={fetchPets}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          >
            Try Again
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 flex flex-col bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 16c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zm2.5 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm15 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-12.5 5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm10 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z' fill='%239C27B0' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto w-full px-4 py-6 md:py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Find Your Perfect Match
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Swipe through potential companions and find your furever friend
          </p>
        </motion.div>

        {currentPet && (
          <ProgressIndicator 
            current={pets.findIndex(pet => pet.id === currentPet.id)} 
            total={pets.length} 
          />
        )}

        <div className="grid lg:grid-cols-[1fr_500px_1fr] gap-6 items-start">
          {/* Left sidebar */}
          <div className="hidden lg:flex flex-col gap-4 sticky top-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white/20"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">Did You Know?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adopting a pet can increase your lifespan and reduce stress levels. Plus, you're giving a loving home to an animal in need! 🐾
              </p>
            </motion.div>
          </div>

          {/* Main content */}
          <div className="w-full max-w-xl mx-auto perspective-1000">
            <AnimatePresence mode="wait">
              {currentPet && (
                <motion.div
                  key={currentPet.id}
                  initial={{ opacity: 0, rotateY: -20, x: 100 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 20, x: -100 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <Card className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.2)] transition-all duration-500">
                    <div className="relative aspect-[4/5]">
                      <img
                        src={currentPet.image}
                        alt={currentPet.name}
                        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold text-white mb-3"
                          >
                            {currentPet.name}
                          </motion.h2>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-2 mb-2"
                          >
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white px-3 py-1">
                              {currentPet.age}
                            </Badge>
                            <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white px-3 py-1">
                              {currentPet.breed}
                            </Badge>
                          </motion.div>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-white/90 text-sm flex items-center gap-2"
                          >
                            <span>📍</span> 
                            {currentPet.location}
                          </motion.p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 flex justify-center gap-8 bg-white/5 backdrop-blur-sm">
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSwipe(false)}
                        className="rounded-full h-16 w-16 flex items-center justify-center bg-white border-2 border-destructive shadow-lg hover:bg-destructive/10 transition-all duration-300"
                      >
                        <X className="h-8 w-8 text-destructive" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleSwipe(true)}
                        className="rounded-full h-16 w-16 flex items-center justify-center bg-primary shadow-lg hover:bg-primary/90 transition-all duration-300"
                      >
                        <Heart className="h-8 w-8 text-white" />
                      </motion.button>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right sidebar remains the same */}
        </div>
      </div>

      {/* Dialog remains the same */}
    </div>
  );
};

export default PetMatch;