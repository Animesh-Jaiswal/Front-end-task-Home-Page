import { motion } from "framer-motion";
import forestWater from "../assets/images/forest-water.webp";

export default function Company() {
  return (
    <section className="py-20 company-sec px-3">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center company-inner rounded-3xl border-2 border-white shadow-xl">

        
        {/* water droplet animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src={forestWater}
            alt="Forest Water image"
            className="w-60 md:w-80 lg:w-96 h-auto drop-shadow-xl"
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
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Empire Blue Pvt. Ltd.
          </h2>
          <p className="text-gray-600 font-semibold text-lg leading-relaxed mb-6 md:pe-5">
            Our revolutionary water technology is a groundbreaking invention that eliminates the expiration date on bottled water. By using a unique combination of innovative ingredients, we prevent reactions in bottled water—especially when exposed to sunlight—that produce microplastics and harmful bacteria. This addresses major health risks associated with bottled water, including diseases like cancer and heart disease. Our innovation not only maintains water purity and freshness for life, but also provides health benefits such as cancer prevention, heart attack protection, and boosted immunity. With a global reach, we aim to transform the water industry and provide safe drinking water to the billions of people who currently lack access.
          </p>
        </motion.div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 items-center md:grid-cols-3 gap-6">
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 rounded-3xl company-inner shadow-xl">
                <span className="bg-blue-600 p-3 inline-flex justify-center items-center rounded-4xl"><i className="fa-solid fa-star text-sky-100 text-2xl"></i></span>
                <h2 className="text-xl text-blue-900 font-semibold py-3">Revolutionary Technology</h2>
                <p className="text-gray-600 font-semibold text-lg leading-relaxed">Groundbreaking invention that eliminates the expiration date on bottled water</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 rounded-3xl company-inner shadow-xl">
                <span className="bg-blue-600 p-3 inline-flex justify-center items-center rounded-4xl"><i className="fa-solid fa-spray-can-sparkles text-sky-100 text-2xl"></i></span>
                <h2 className="text-xl text-blue-900 font-semibold py-3">Safe & Pure</h2>
                <p className="text-gray-600 font-semibold text-lg leading-relaxed">Ensuring lifelong freshness and health through advanced purification</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 rounded-3xl company-inner shadow-xl">
                <span className="bg-blue-600 p-3 inline-flex justify-center items-center rounded-4xl"><i className="fa-solid fa-shield-halved text-sky-100 text-2xl"></i></span>
                <h2 className="text-xl text-blue-900 font-semibold py-3">Sustainable Solution</h2>
                <p className="text-gray-600 font-semibold text-lg leading-relaxed">Eco-friendly approach to water preservation and distribution</p>
        </motion.div>
      </div>
    </section>
  );
}
