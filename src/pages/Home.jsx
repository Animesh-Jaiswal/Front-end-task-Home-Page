import About from '../components/About'
import Advantage from '../components/Advantage'
import Benefits from '../components/Benefits'
import Chatbox from '../components/chatbox'
import Company from '../components/Company'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Milestones from '../components/Milestone'
import Navbar from '../components/Navbar'
import ScrollBtn from '../components/ScrollBtn'
import Situation from '../components/Situation'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'

export default function Home() {
    return (
        <div className="antialiased text-slate-800 font-sans bg-white">
            <Navbar /> 
            <Hero />
            <About />
            <Situation />
            <Company />
            <Benefits />
            <Advantage />
            <Milestones />
            <Team />
            <Testimonials />
            <CTA />
            <Footer />
            <Chatbox />
            <ScrollBtn />
        </div>
    )
}
