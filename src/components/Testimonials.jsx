import { container, fadeInUp } from "../assets/framerMotion/animation";
import {motion} from "framer-motion"

export default function Testimonials() {
    const TESTS = [
        { name: 'Priya Sharma', role: 'Health Coach, Mumbai', quote: 'Newtro-X water has completely transformed my daily routine. The non-expiry feature is a game-changer.' },
        { name: 'Rahul Verma', role: 'Fitness Trainer', quote: 'I trust Empire Blue for purity and consistency.' },
        { name: 'Meera Patel', role: 'Nutritionist', quote: 'My clients have seen improved hydration and wellbeing.' },
    ];


    return (
        <section className="py-20 testimonial-sec">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 text-center"
        >What Our Customers Say</motion.h1>
                <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
                    {TESTS.map((t, i) => (
                        <motion.blockquote key={i} variants={fadeInUp} className="p-6 bg-white rounded-2xl shadow">
                            <p className="text-gray-700 italic">“{t.quote}”</p>
                            <footer className="mt-4 text-sm font-medium">{t.name} — <span className="text-gray-500">{t.role}</span></footer>
                        </motion.blockquote>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}