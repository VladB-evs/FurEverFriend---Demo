import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
        >
          FurEverFriends
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link to="/pet-match">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              Find a Pet
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  );
};