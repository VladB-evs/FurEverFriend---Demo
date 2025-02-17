
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface PetCardProps {
  name: string;
  age: string;
  breed: string;
  image: string;
  distance: string;
}

export const PetCard = ({ name, age, breed, image, distance }: PetCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="pet-card group">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg aspect-square">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-110"
            />
            <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200">
              <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors duration-200" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
            <Badge variant="secondary" className="text-xs">
              {distance}
            </Badge>
          </div>
          <p className="text-gray-600 text-sm">
            {age} • {breed}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <button className="w-full py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-200">
            Meet {name}
          </button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
