import { motion } from "framer-motion";

// Importing images (place them inside src/assets/)
import vitaminA from "../assets/images/capsuleA.webp";
import heart from "../assets/images/heart.webp";
import leaf from "../assets/images/leaf.webp";
import lungs from "../assets/images/lungs.webp";
import vitaminD from "../assets/images/vitaminD.webp";

const benefits = [
  {
    id: 1,
    title: "Vitamin A",
    description: "Supports vision, immunity & cell growth.",
    icon: vitaminA,
  },
  {
    id: 2,
    title: "Heart Health",
    description: "Promotes cardiovascular strength & stamina.",
    icon: heart,
  },
  {
    id: 3,
    title: "Chlorophyll",
    description: "Boosts detoxification and overall wellness.",
    icon: leaf,
  },
  {
    id: 4,
    title: "Respiratory",
    description: "Improves lung health and oxygen absorption.",
    icon: lungs,
  },
  {
    id: 5,
    title: "Vitamin D",
    description: "Strengthens bones & supports immunity.",
    icon: vitaminD,
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50 benefits-sec">
      <div className="max-w-6xl mx-auto px-3 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-900"
        >
          Health Benefits
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
