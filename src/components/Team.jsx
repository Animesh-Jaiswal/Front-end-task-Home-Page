import {motion} from "framer-motion";
import ceo from "../assets/images/ceo.webp"
import md from "../assets/images/sandhya.webp"
import cofounder from "../assets/images/1.webp"
import cfo from "../assets/images/2.webp"

export default function Team() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 text-center"
        >Meet Our Expert Team</motion.h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 bg-sky-50 shadow-xl rounded-2xl text-center md:col-start-2">
                        <img src={ceo} alt="Dr. Gagan" className="w-28 h-28 rounded-full mx-auto object-cover" />
                        <h4 className="mt-4 font-semibold">Dr. Gagan Mahalwanshi</h4>
                        <p className="text-sm text-gray-600">Founder & CEO</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 bg-sky-50 shadow-xl rounded-2xl text-center md:col-start-1">
                        <img src={md} alt="Sandhya Mahalwanshi" className="w-28 h-28 rounded-full mx-auto object-cover" />
                        <h4 className="mt-4 font-semibold">Sandhya Mahalwanshi</h4>
                        <p className="text-sm text-gray-600">Managing Director</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 bg-sky-50 shadow-xl rounded-2xl text-center">
                        <img src={cofounder} alt="Dr. Gagan" className="w-28 h-28 rounded-full mx-auto object-cover" />
                        <h4 className="mt-4 font-semibold">U. S. Khobariya</h4>
                        <p className="text-sm text-gray-600">Sub-Director</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="p-6 bg-sky-50 shadow-xl rounded-2xl text-center">
                        <img src={cfo} alt="Dr. Gagan" className="w-28 h-28 rounded-full mx-auto object-cover" />
                        <h4 className="mt-4 font-semibold">Mukesh Dixit</h4>
                        <p className="text-sm text-gray-600">CFO</p>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}