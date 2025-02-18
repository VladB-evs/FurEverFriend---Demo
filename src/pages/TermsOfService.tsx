import { motion } from "framer-motion";

export const TermsOfService = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5"
    >
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        
        <div className="space-y-6 text-gray-600">
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Project Information</h2>
            <p className="leading-relaxed">
              FurEverFriends is a personal project developed by Vlad Bacila. This application is created for demonstration purposes and serves as a portfolio piece to showcase web development skills.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Purpose</h2>
            <p className="leading-relaxed">
              This platform demonstrates the integration of the Petfinder API to display available pets for adoption. While it shows real pet data, it is not an official adoption platform. For actual pet adoptions, please visit the official Petfinder website or contact local shelters directly.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Liability</h2>
            <p className="leading-relaxed">
              As this is a personal project, we do not assume any responsibility for the accuracy of the information displayed or any outcomes related to pet adoption processes. All pet data is sourced from the Petfinder API and belongs to their respective organizations.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="leading-relaxed">
              For any questions about this project, you can reach out through my GitHub profile. For actual pet adoption inquiries, please contact the respective shelters or visit Petfinder.com directly.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsOfService;