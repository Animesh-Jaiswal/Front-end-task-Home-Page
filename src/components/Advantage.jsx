import {motion} from "framer-motion";
import earth from "../assets/images/earth.webp"
import heart from "../assets/images/heart.webp"
import star from "../assets/images/star1.webp"
import shield from "../assets/images/shield.webp"
import setting from "../assets/images/setting1.webp"
import beaker from "../assets/images/beaker1.webp"


export default function Advantage() {
  return (
    <section className="py-20 advantage-sec px-3 ">
        <div className="max-w-6xl mx-auto">
            <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 text-center"
        >
          Competitive Advantage Beyond The Ordinary
        </motion.h1>
        <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={earth}
                alt= "earth image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Revolutionary Technology</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Groundbreaking invention that eliminates the expiration date on bottled water</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={heart}
                alt="heart image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Safe & Pure</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Ensuring lifelong freshness and health through advanced purification</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={star}
                alt="star image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Sustainable Solution</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Eco-friendly approach to water preservation and distribution</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={shield}
                alt="shield image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Revolutionary Technology</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Groundbreaking invention that eliminates the expiration date on bottled water</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={setting}
                alt="gear image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Safe & Pure</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Ensuring lifelong freshness and health through advanced purification</p>
        </motion.div>
        <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }} className="py-8 ps-3 flex flex-col justify-center items-center">
                <img
                src={beaker}
                alt="beaker image"
                className="w-20 h-20 object-contain mb-4"
              />
                <h2 className="text-xl text-blue-900 font-semibold py-3">Sustainable Solution</h2>
                <p className="text-gray-700 text-lg text-center leading-relaxed">Eco-friendly approach to water preservation and distribution</p>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
