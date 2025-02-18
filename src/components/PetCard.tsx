
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface PetCardProps {
  name: string;
  age: string;
  breed: string;
  image: string;
  distance: string;
  location: string;
  type: string;
  url: string;
  onMeet?: () => void;
}

export const PetCard = ({ name, age, breed, image, distance, location, type, url, onMeet }: PetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group overflow-hidden rounded-2xl border border-gray-100 bg-white/70 backdrop-blur-lg transition-all duration-300 hover:border-gray-200 hover:shadow-2xl">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden aspect-[4/3]">
            <motion.img
              src={image}
              alt={name}
              className="object-cover w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <motion.button 
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </motion.button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-semibold text-gray-900">{name}</h3>
            <Badge variant="secondary" className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1">
              {type}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm font-medium mb-2">
            {age} • {breed}
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            <span className="text-base">📍</span> {location}
          </p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <Button 
            onClick={onMeet}
            className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 text-base font-medium transition-all duration-300 hover:shadow-lg"
          >
            Meet {name}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
