
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and noise texture */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-pink-50/30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            opacity: 0.03
          }}
        />
      </div>
      
      <div className="relative w-full">
        <motion.div 
          className="container mx-auto px-4 z-10"
          style={{ opacity, scale }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-600 to-pink-600">
                  Find Your Perfect
                </span>
                <br />
                <span className="text-gray-900">FurEverFriend</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                Connect with adorable pets waiting for their forever homes.
                <span className="hidden md:inline"> Your new best friend is just a click away.</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={() => navigate('/pet-match')}
              >
                Find a Pet
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 rounded-full text-lg border-2 hover:bg-gray-50 transition-all duration-300"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};
