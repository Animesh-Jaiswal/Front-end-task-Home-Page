import { motion } from "framer-motion";
import waterDroplet from "../assets/images/water-droplet.webp";

export default function Situation() {
  return (
    <section className="py-20 bg-white situation-sec px-3">
      <div className="max-w-6xl mx-auto px-10 md:px-15 py-10 grid grid-cols-1 md:grid-cols-3 gap-12 items-center situation-inner rounded-3xl border-2 border-white shadow-xl">

        {/* Left side - text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Current Situation
          </h2>
          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
            Approximately 2.2 billion people do not have access to safe drinking water and 3.5 billion people do not have access to clean drinking water. This problem is increasing due to the rapidly increasing population. Poor water management has further aggravated the crisis.
          </p>
          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6">
            The top countries facing severe water crisis include Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
          </p>
        </motion.div>
        
        {/* water droplet animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={waterDroplet}
            alt="Non-Expiry Water"
            className="w-60 md:w-80 lg:w-96 h-auto drop-shadow-xl"
            animate={{
              y: [0, -15, 0], // floating effect
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right side - text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 md:text-right">
            Health Impact of contaminated waters
          </h2>
          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6 md:text-right">
            Every 33 seconds a person dies from heart disease across the worldwide and around 26,300 people die from cancer every day.
          </p>
          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6 md:text-right">
            Contaminated water releases harmful bacteria and micro plastics which is lead to health problems like cancer and also cause high blood pressure and heart problems.
          </p>
        </motion.div>
      </div>
      
    </section>
  );
}
