import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import siteLogo from "../assets/images/siteLogo.webp";

export default function NavBar() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolled(window.scrollY > 20);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-40 top-0 left-0 transition-shadow bg-white backdrop-blur-sm border-b border-gray-300 ${scrolled ? 'shadow-md' : ''}`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src={siteLogo} alt="Empire Blue" className="w-50 h-auto object-contain" />
                </div>
                <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
                    <a href="/" className="hover:text-blue-600 text-lg tracking-wide text-gray-600">Home</a>
                    <a href="#about" className="hover:text-blue-600 text-lg tracking-wide text-gray-600">About</a>
                    <a href="#benefits" className="hover:text-blue-600 text-lg tracking-wide text-gray-600">Service</a>
                    <a href="#technology" className="hover:text-blue-600 text-lg tracking-wide text-gray-600">Contact</a>
                    <a href="#contact" className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-full text-lg">Book Now <i className="fa-solid fa-arrow-right text-sm ms-2"></i></a>
                </nav>


                <div className="lg:hidden">
                    <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md ring-0 focus:outline-none">
                        {!open ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> : <i className="fa-solid fa-xmark"></i>}
                    </button>
                </div>
            </div>


            {/* Mobile menu */}
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="lg:hidden bg-white/95"
                >
                    <div className="px-6 py-4 flex flex-col gap-8">
                        <a href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 text-lg tracking-wide text-gray-600" >Home</a>
                        <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-600 text-lg tracking-wide text-gray-600">About Us</a>
                        <a href="#benefits" onClick={() => setOpen(false)} className="hover:text-blue-600 text-lg tracking-wide text-gray-600">Service</a>
                        <a href="#technology" onClick={() => setOpen(false)} className="hover:text-blue-600 text-lg tracking-wide text-gray-600">Contact</a>
                        <a href="#contact" className="flex items-center justify-center py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl mt-2 text-lg ">Book Now <i className="fa-solid fa-arrow-right text-sm ms-2"></i></a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}