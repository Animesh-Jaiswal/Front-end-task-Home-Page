import { container, fadeInUp } from "../assets/framerMotion/animation";
import {motion} from "framer-motion"

const MILESTONES = [
    { year: '2026', title: 'Newtro-X Project Kickoff' },
    { year: '2027', title: 'Home Care Product Expansion' },
    { year: '2028', title: 'Vehicle Care Segment Launch' },
    { year: '2029', title: 'Black Plum Premium Segment' },
    { year: '2030', title: 'Java-X Major Achievement' },
];


export default function Milestones() {
    return (
        <section className="py-20 milestone-sec">
            <div className="max-w-6xl mx-auto px-3">
                <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-blue-900 text-center"
        >Our Milestone</motion.h1>
                <motion.div className=" flex flex-col md:flex-row items-start gap-6 overflow-hidden" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
                    {MILESTONES.map((m, i) => (
                        <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-2xl shadow w-full h-30 md:w-1/5 text-center">
                            <div className="text-2xl font-bold text-blue-600">{m.year}</div>
                            <div className="mt-2 text-sm text-gray-600">{m.title}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}