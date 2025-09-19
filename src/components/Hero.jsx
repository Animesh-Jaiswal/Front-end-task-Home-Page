import {fadeInUp, container} from "../assets/framerMotion/animation";
import {motion} from "framer-motion";
import canImage from "../assets/images/can1.webp"
import headImage from "../assets/images/heroHeadImage.webp"

export default function Hero() {
    return (
        <section className="pt-40 pb-20 px-3 hero-sec relative">
            <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 a inset-0 rounded-4xl [box-shadow:0_0_30px_5px_rgba(59,130,246,0.3)] shadow-blue-500 flex items-center justify-center hero-inner-div">
                <motion.div className="md:w-1/2 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div whileHover={{ rotate: 6, y: -6 }} className="w-100 h-100 md:w-96 md:h-96 relative">
                        {/* Decorative water droplet / hero can */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <img src={canImage} alt="Empire Blue Can" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="md:w-1/2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.35 }}
                    variants={container}
                >
                    <motion.img variants={fadeInUp} src={headImage} alt="Head Image" className="w-70 h-auto py-2" />
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold leading-tight">
                        World's First <span className="text-blue-900">Non‑Expiry</span> Water
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="mt-6 text-gray-600 max-w-xl text-lg font-semibold">
                        Empire Blue Pvt. Ltd. We prioritize health, innovation, and sustainability we are committed to seating new industry standards and providing a safe, reliable and beneficial hydration solution for people worldwide.
                    </motion.p>


                    <motion.div className="mt-8 flex justify-center"
                        variants={fadeInUp}
                    >
                        <motion.a whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}  href="#contact" className="inline-block px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-full shadow">Contact Us <i className="fa-solid fa-arrow-right text-sm ms-2"></i></motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}