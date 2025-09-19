import {motion} from "framer-motion";

export default function CTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h4 className="text-2xl font-bold">Take the Next Step
Towards Better Health</h4>
                    <p className="mt-2 text-sm text-white/90">Empire Blue Operates in the growing health and wellness market health conscious individuals seeking natural solutions for disease prevention and immune support with increasing awareness of health risks like cancer and heart disease demand for mineral based supplements in mineral water Ready to experience our exceptional innovative water? book your first can today and discover how we can help you live your healthiest life.</p>
                </div>
                <div>
                    <motion.a whileHover={{ scale: 1.03 }} href="#contact" className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-semibold">Book Now</motion.a>
                </div>
            </div>
        </section>
    );
}