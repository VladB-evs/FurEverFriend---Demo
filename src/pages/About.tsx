import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const About = () => {
  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Radix UI",
    "Petfinder API",
    "Vite"
  ];

  const features = [
    {
      title: "Modern UI/UX",
      description: "Sleek, responsive design with smooth animations and transitions"
    },
    {
      title: "Pet Discovery",
      description: "Intuitive pet browsing with Tinder-like swiping interface"
    },
    {
      title: "Real-Time Data",
      description: "Integration with Petfinder API for up-to-date pet listings"
    },
    {
      title: "Accessibility",
      description: "Built with accessibility in mind using Radix UI primitives"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            About FurEverFriends
          </h1>
          <p className="text-xl text-gray-600">
            A modern pet adoption platform built with love and cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 mb-12"
        >
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              FurEverFriends is a personal project designed to demonstrate modern web development practices
              and create a delightful user experience for pet adoption. The application combines beautiful
              design with powerful functionality, making it easier for potential pet owners to find their
              perfect companion.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-8 mb-12"
        >
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-6 backdrop-blur-sm bg-white/50">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 text-sm bg-white/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;