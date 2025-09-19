import { fadeInRight, fadeInLeft } from "../assets/framerMotion/animation"
import { motion } from "framer-motion";
import aboutImage from "../assets/images/about.webp"

export default function About() {
    return (
        <section className="py-20 about-sec">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInLeft} className="px-3">
                    <h2 className="text-6xl font-bold text-blue-900">About Us</h2>
                    <p className="mt-4 text-gray-600 text-lg font-semibold">Empire Blue Pvt. Ltd. Established July 2025 Based on Chhindwara Madhya Pradesh is a pioneering company in the bottled water industry recognized as the world's first manufacturer of non-expiry bacteria free water bottles.</p> <br />

                    <p className="text-gray-600 text-lg font-semibold">Our mission is to revolutionize the way people consume water by ensuring purity, longevity, and health benefits in every drop.</p>
                    <div className="mt-6">
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }} href="#technology" className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold rounded-full">Learn More <i className="fa-solid fa-arrow-right text-sm ms-2"></i></motion.a>
                    </div>
                </motion.div>
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInRight} className="flex justify-center">
                    <div className="w-full max-w-md bg-white p-2 rounded-2xl shadow-inner shadow-xl">
                        <img src={aboutImage} alt="Droplet" className="w-full h-full object-contain rounded-2xl" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}