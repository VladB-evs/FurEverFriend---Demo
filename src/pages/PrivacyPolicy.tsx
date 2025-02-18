import { motion } from "framer-motion";

export const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-6 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5"
    >
      <div className="max-w-4xl mx-auto pt-12 pb-24">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-600">
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal Project Notice</h2>
            <p className="leading-relaxed">
              FurEverFriends is a personal portfolio project developed by Vlad Bacila. This application does not collect, store, or process any personal information from its users.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Usage</h2>
            <p className="leading-relaxed">
              This application only displays pet data retrieved from the Petfinder API. No user data is collected, stored, or transmitted. All pet information shown is publicly available through Petfinder's service.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="leading-relaxed">
              While this application integrates with the Petfinder API, any interaction with actual pet adoption services should be conducted through official channels like Petfinder.com or local shelters directly.
            </p>
          </section>

          <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="leading-relaxed">
              For any questions about this project or its privacy practices, you can reach out through my GitHub profile. For actual pet adoption inquiries, please contact Petfinder or local shelters directly.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;