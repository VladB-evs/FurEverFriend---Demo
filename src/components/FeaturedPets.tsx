
import { PetCard } from "./PetCard";

const FEATURED_PETS = [
  {
    name: "Luna",
    age: "2 years",
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    distance: "2.5 miles"
  },
  {
    name: "Oliver",
    age: "1 year",
    breed: "Siamese Cat",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    distance: "3.8 miles"
  },
  {
    name: "Bella",
    age: "4 months",
    breed: "Labrador Mix",
    image: "https://images.unsplash.com/photo-1438565434616-3ef039228b15",
    distance: "1.2 miles"
  }
];

export const FeaturedPets = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Pets</h2>
        <p className="text-gray-600 text-center mb-12">Meet some of our adorable friends looking for a home</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PETS.map((pet) => (
            <PetCard key={pet.name} {...pet} />
          ))}
        </div>
      </div>
    </section>
  );
};
